import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import serverStyleCleanup from 'node-style-loader/clientCleanup';
import { useScroll } from 'react-router-scroll';
import { getDefault } from '../../shared/util/ModuleUtil';
import ReworkRootComponent from '../app/ReworkRootComponent';
import { rootRoute, history } from '../common/kernel';
import ClientHooks from './client-hooks';

let rootComponent = (
  <CookiesProvider>
    <ReworkRootComponent>
      <Router
        history={history}
        routes={rootRoute}
        render={
          // Scroll to top when going to a new page, imitating default browser behaviour
          applyRouterMiddleware(useScroll())
        }
      />
    </ReworkRootComponent>
  </CookiesProvider>
);

const clientHooks = ClientHooks.map(hookModule => {
  const HookClass = getDefault(hookModule);

  return new HookClass();
});

// allow plugins to add components
for (const clientHook of clientHooks) {
  if (clientHook.wrapRootComponent) {
    rootComponent = clientHook.wrapRootComponent(rootComponent);
  }
}

ReactDOM.render(
  rootComponent,
  document.getElementById('app'),
);

// remove server-generated CSS
serverStyleCleanup();
