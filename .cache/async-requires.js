// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-index-js": () => import("/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-tags-js": () => import("/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/.cache/data.json")

