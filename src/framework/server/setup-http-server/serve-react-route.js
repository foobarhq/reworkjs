import fs from 'fs';
import React from 'react';
import { plugToRequest as plugReactCookie } from 'react-cookie';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { collectInitial, collectContext } from 'node-style-loader/collect';
import { parse } from 'accept-language-parser';
import { invert } from 'lodash';
import getWebpackSettings from '../../../shared/webpack-settings';
import { rootRoute, store } from '../../common/kernel';
import ReworkJsWrapper from '../../app/ReworkJsWrapper';
import { setRequestLocales } from './request-locale';
import renderPage from './render-page';

function matchAsync(routes, url) {
  return new Promise((resolve, reject) => {
    try {
      match({ routes, location: url }, (err, redirect, props) => {
        if (err) {
          reject(err);
        } else {
          resolve({ redirect, props });
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

export default async function serveReactRoute(req, res, next): ?{ appHtml: string, state: Object, style: string } {

  try {
    hookWebpackAsyncRequire();
    const { redirect, props } = await matchAsync([rootRoute], req.url);

    if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
      return null;
    }

    if (!props) {
      res.status(404).send('This is a 404 page. To define the page to actually render when a 404 occurs, please create a new route object and set its "status" property to 404 (int)');
      return null;
    }

    const matchedRoute = props.routes[props.routes.length - 1];
    if (matchedRoute.status) {
      res.status(matchedRoute.status);
    }

    setRequestLocales(
      parse(req.header('Accept-Language'))
        .map(parsedLocale => {
          let localeStr = parsedLocale.code;

          if (parsedLocale.region) {
            localeStr += `-${parsedLocale.region}`;
          }

          return localeStr;
        }),
    );

    const compilationStats = await getCompilationStats();

    // There is no CSS entry point in dev mode, generate it instead.
    const initialStyleTag = compilationStats.client.entryPoints.css
      ? compilationStats.client.entryPoints.css
      : collectInitial();

    const unplugReactCookie = plugReactCookie(req, res);

    const [contextStyleTag, appHtml] = collectContext(() => renderToString(
      <ReworkJsWrapper>
        <RouterContext {...props} />
      </ReworkJsWrapper>,
    ));

    const importedServerChunks: Set = unhookWebpackAsyncRequire();
    const importableClientChunks = [];
    for (const importedServerChunk of importedServerChunks) {
      const clientChunk = serverChunkToClientChunk(importedServerChunk, compilationStats);
      if (clientChunk) {
        importableClientChunks.push(getChunkPrefetchLink(clientChunk, compilationStats));
      }
    }

    unplugReactCookie();

    res.send(renderPage({
      // initial react app
      body: appHtml,

      // initial style
      header: initialStyleTag + contextStyleTag + importableClientChunks.join(''),

      // initial redux state + webpack bundle
      footer: `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>${compilationStats.client.entryPoints.js}`,
    }));
  } catch (e) {
    next(e);
  } finally {
    unhookWebpackAsyncRequire();
  }
}

function serverChunkToClientChunk(serverChunk, stats: CompilationStats) {
  const moduleName = stats.server.chunkToModule[serverChunk];
  if (!moduleName) {
    return null;
  }

  return stats.client.moduleToChunk[moduleName] || null;
}

const webpackClientConfig = getWebpackSettings(/* is server */ false);
const clientBuildDirectory = webpackClientConfig.output.path;
const serverBuildDirectory = getWebpackSettings(/* is server */ true).output.path;

type CompilationStats = {
  client: {
    entryPoints: {
      js: string,
      css: string,
    },
    moduleToChunk: { [key: string]: any },
    chunkFileNames: { [key: string]: string },
  },
  server: {
    chunkToModule: { [key: string]: string },
  },
};

let compStatCache;
function getCompilationStats(): CompilationStats {
  if (compStatCache) {
    return compStatCache;
  }

  return Promise.all([
    readFileAsync(`${serverBuildDirectory}-entrypoints.json`),
    readFileAsync(`${clientBuildDirectory}-entrypoints.json`),
  ]).then(([serverStats, clientStats]) => {

    serverStats = JSON.parse(serverStats);
    clientStats = JSON.parse(clientStats);

    serverStats.chunkToModule = invert(serverStats.moduleToChunk);
    serverStats.moduleToChunk = void 0;

    clientStats.entryPoints = buildEntryPointTags(clientStats.entryPoints);
    serverStats.entryPoints = void 0;

    const compStats = {
      server: serverStats,
      client: clientStats,
    };

    if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-process-env
      compStatCache = compStats;
    }

    return compStats;
  });
}

const httpStaticPath = webpackClientConfig.output.publicPath;

function getChunkPrefetchLink(chunkId, stats: CompilationStats) {
  return `<link rel="prefetch" href="${httpStaticPath + stats.client.chunkFileNames[chunkId]}" as="script" pr="1.0" />`;
}

function buildEntryPointTags(entryPoints) {
  // httpStaticPath
  entryPoints.js = entryPoints.js.map(entryPoint => `<script src="${httpStaticPath + entryPoint}"></script>`).join('');
  entryPoints.css = entryPoints.css.map(entryPoint => `<link rel="stylesheet" href="${httpStaticPath + entryPoint}" />`).join('');

  return entryPoints;
}

// __webpack_require__.e = webpack's chunk ensure function.
// .hook and .unhook are methods added by a custom webpack plugin.
let requiredChunks: ?Set = null;
const rjsHook = __webpack_require__.rjs; // eslint-disable-line
function hookWebpackAsyncRequire() {
  requiredChunks = new Set();

  if (!rjsHook) {
    return;
  }

  rjsHook.hook(onRequiredModule);
}

function onRequiredModule(chunkId) {
  requiredChunks.add(chunkId);
}

function unhookWebpackAsyncRequire() {
  if (rjsHook) {
    rjsHook.unhook(onRequiredModule);
  }

  return requiredChunks;
}

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}