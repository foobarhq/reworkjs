import Helmet from 'react-helmet';

export default function buildPage($doc, html, appState) {
  const { htmlAttributes, ...headChildren } = Helmet.rewind();

  const $html = $doc.find('html');
  for (const attributeName of Object.keys(htmlAttributes)) {
    $html.attr(attributeName, htmlAttributes[attributeName]);
  }

  const $head = $doc.find('head');
  const { title, base, ...appendableTags } = headChildren;
  replace($head, 'title', title.toString());
  replace($head, 'base', base.toString());

  // TODO replace meta tags ?

  for (const tagName of Object.keys(appendableTags)) {
    const tag = appendableTags[tagName];
    $head.append(tag.toString());
  }

  // Insert App HTML
  $doc.find('#app').append(`<div>${html}</div>`);

  // Insert Redux State
  $doc.find('script').last().before(`<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>`);
}

function replace($head, tagName, newTag) {
  const tag = $head.find(tagName);
  if (tag.length > 0) {
    tag.replaceWith(newTag);
  } else {
    $head.append(newTag);
  }
}
