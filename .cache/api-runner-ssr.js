var plugins = [{
      plugin: require('/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-hello-friend","short_name":"hello-friend","start_url":"/","background_color":"#292a2d","theme_color":"#292a2d","display":"minimal-ui","icon":"src/images/hello-icon.png"},
    },{
      plugin: require('/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/node_modules/gatsby-plugin-whatshelp/gatsby-ssr'),
      options: {"plugins":[],"facebook":"darshankumar89","whatsapp":"+32 465183127","email":"darshankumar38@gmail.com","call":"+32 465183127","company_logo_url":"//storage.whatshelp.io/widget/xx/xxxx/xxxxxx/logo.jpg","greeting_message":"Hello","call_to_action":"Call to Action","button_color":"#b02030","position":"right","order":"facebook,whatsapp,call,email","ga":true,"branding":false,"mobile":true,"desktop":true,"greeting":true,"shift_vertical":0,"shift_horizontal":0,"domain":"https://darshankumar.netlify.com","key":"xxx"},
    },{
      plugin: require('/Users/darshankumar/dgod/darshankumar.com/darshankumar.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-133460649-2","head":true,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","experimentId":"YOUR_GOOGLE_EXPERIMENT_ID","variationId":"YOUR_GOOGLE_OPTIMIZE_VARIATION_ID","sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"darshankumar.netlify.com"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
