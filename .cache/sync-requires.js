const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/darshankumar/dgod/darshankumar.com/devcommuntiy/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/darshankumar/dgod/darshankumar.com/devcommuntiy/src/pages/404.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/Users/darshankumar/dgod/darshankumar.com/devcommuntiy/src/templates/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/darshankumar/dgod/darshankumar.com/devcommuntiy/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/darshankumar/dgod/darshankumar.com/devcommuntiy/src/templates/tags.js")))
}

