 # Hello Friend

![Hello Friend](https://github.com/panr/hugo-theme-hello-friend/blob/master/images/screenshot.png?raw=true)

This starter was made to help you present your ideas easier. We all know how hard is to start something on the web, especially these days. You need to prepare a bunch of stuff, configure them and when that’s done — create the content.

This starter is pretty basic and covers all of the essentials. All you have to do is start typing!

### DEMO - https://gatsby-hello-friend.now.sh/

## Features

- **dark/light mode**, depending on your preferences (dark is default, but you can change it)
- great reading experience thanks to [**Inter UI font**](https://rsms.me/inter/), made by [Rasmus Andersson](https://rsms.me/about/)
- nice code highlighting thanks to [**PrismJS**](https://prismjs.com)
- responsive youtube/vimeo etc. videos [gatsby-remark-embed-video](https://github.com/borgfriend/gatsby-remark-embed-video)
- fully responsive site

#### Code highlighting

By default the theme is using PrismJS to color your code syntax. All you need to do is to wrap you code like this:

<pre>
```html
  // your code here
```
</pre>

**Supported languages**: bash/shell, css, clike, javascript, apacheconf, actionscript, applescript, c, csharp, cpp, coffeescript, ruby, csp, css-extras, diff, django, docker, elixir, elm, markup-templating, erlang, fsharp, flow, git, go, graphql, less, handlebars, haskell, http, java, json, kotlin, latex, markdown, makefile, objectivec, ocaml, perl, php, php-extras, r, sql, processing, scss, python, jsx, typescript, toml, reason, textile, rust, sass, stylus, scheme, pug, swift, yaml, haml, twig, tsx, vim, visual-basic, wasm.

## How to start

First you need to clone this repo by `git clone https://github.com/panr/gatsby-starter-hello-friend.git` then switch to main dir, probably `cd gatsby-starter-hello-friend` should work fine. Next you should install all dependencies by `yarn` and then, to run starter on localhost `yarn dev` (which is `gatsby clean && gatsby develop`). If you want to build starter just run `yarn build` (which is `gatsby build`).

## How it works

It's a simple starter for blogs and personal sites. You have `posts` and `pages` directories. Posts are generated from markdown files with required fileds: `title`, `date` and `path`. Pages can be generated from markdown files as well (with built-in navigation between them, just like in posts) but you can also generate them from JavaScript files (just like you normally do in Gatsby). If so, you should wrap your content in `Layout` component. It's not required, but highly recommended.

#### Configuration

You can configure starter in `gatsby-config.js`. Here's what you can change:

```
title: String,
description: String,
copyrights: String,
author: String,
logo: Shape { // you can place your own logo
  src: String, // default dir is `/static/`
  alt: String,
},
logoText: String, // change default Hello Friend logo
defaultTheme: String, // light or dark as default
postsPerPage: Number, // pagination
showMenuItems: Number, // number of visible main menu items
menuMoreText: String, // string of main sub menu trigger (not visible items from main menu)
mainMenu: arrayOf(Shape { // main menu items
  title: String,
  path: String,
})
```

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/panr/gatsby-starter-hello-friend/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/panr/gatsby-starter-hello-friend/pulls).

## Sponsoring

If you like my work and want to support the development of the project, now you can! Just:

<a href="https://www.buymeacoffee.com/panr" target="_blank"><img src="https://res.cloudinary.com/panr/image/upload/v1579374705/buymeacoffee_y6yvov.svg" alt="Buy Me A Coffee" ></a>

## License

Copyright © 2019 Radosław Kozieł ([@panr](https://radoslawkoziel.pl))

The starter is released under the MIT License. Check the [original theme license](https://github.com/panr/gatsby-starter-hello-friend.git/blob/master/LICENSE.md) for additional licensing information.


### some info
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec interdum metus. Aenean rutrum ligula sodales ex auctor, sed tempus dui mollis. Curabitur ipsum dui, aliquet nec commodo at, tristique eget ante.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

**Donec quis dolor nec nunc mollis interdum vel in purus**. Sed vitae leo scelerisque, sollicitudin elit sed, congue ante. In augue nisl, vestibulum commodo est a, tristique porttitor est. Proin laoreet iaculis ornare. Nullam ut neque quam.

> Fusce pharetra suscipit orci nec tempor. Quisque vitae sem sit amet sem mollis consequat. Sed at imperdiet lorem. Vestibulum pharetra faucibus odio, ac feugiat tellus sollicitudin at. Pellentesque varius tristique mi imperdiet dapibus. Duis orci odio, sodales lacinia venenatis sit amet, feugiat et diam.

Sed a leo id risus venenatis vulputate non quis nulla. Aenean nisl quam, lacinia pulvinar orci sit amet, eleifend eleifend dui. Nulla tempor ligula leo, eu vehicula quam condimentum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla gravida tristique nunc sed semper. Morbi nec felis odio.

- Sed efficitur, lacus ac scelerisque pellentesque, lectus risus dignissim nisl, fermentum semper lectus diam eget lacus.
- Nunc ornare purus enim, id eleifend mauris vestibulum volutpat.
- Aenean facilisis ut ipsum condimentum ultrices.
- Fusce sed metus vulputate, lobortis purus et, finibus purus. Suspendisse quis posuere lorem. Vivamus vulputate nec risus in pulvinar.


## Header 2

Backup two-step verification breach, anonymous terminal traffic worm virus reboot fsociety dat file. Traffic fsociety malware 100 terabytes system hack, delete brute-force cyber security fiber connection connect code worm wipe. Cyber security off the grid delete IP decrypt, **nodes connect password 100 terabytes RUDY attack malicious code** rootkit gigabit speed. Tor connect network, intercepting traffic off the grid IP protocol password.

> Backup DDoS attack rootkit nodes disconnect website. Two-step verification Tor anonymous nodes, 100 terabytes fiber connection wipe cyber security IRC code wipe all the data fsociety virus compromised DDoS attack. Sys admin data center gigabit speed breach, worm DDoS attack AFK nodes.

### Header 3

Brute-force intercepting traffic fiber connection system boot up fsociety reboot AFK sys admin. Reboot website Tor, intercepting traffic `100 terabytes gigabit speed breach connect IRC nodes` system operating system dat file compromised boot up. Data center decrypt password network disconnect. Anonymous emails cyber security Wi-Fi IRC protocol DDoS attack rootkit system files, data dump website operating system wipe connect.

```css
/* PostCSS code by PrismJS */

pre {
  background: #1a1a1d;
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  overflow: auto;

  @media (--phone) {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code {
    background: none !important;
    color: #ccc;
    padding: 0;
    font-size: inherit;

    .dark-theme & {
      color: inherit;
    }
  }
}
```

```js
// JS code by PrismJS

const menuTrigger = document.querySelector('.menu-trigger')
const menu = document.querySelector('.menu')
const mobileQuery = getComputedStyle(document.body).getPropertyValue('--phoneWidth')
const isMobile = () => window.matchMedia(mobileQuery).matches
const isMobileMenu = () => {
  menuTrigger.classList.toggle('hidden', !isMobile())
  menu.classList.toggle('hidden', isMobile())
}

isMobileMenu()

menuTrigger.addEventListener('click', () => menu.classList.toggle('hidden'))

window.addEventListener('resize', isMobileMenu)
```

```html
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
```

#### Header 4

Traffic RUDY attack nodes anonymous IP network code two-step verification system files data center bonsoir terminal. Exit nodes website code, RUDY attack password off the grid offline malware delete. Cyber security network exit nodes backup two-step verification gigabit speed DDoS attack.

- Fsociety delete malicious code nodes.
- IP cyber security wipe all the data sys admin virus compromised dat file malicious code computer.
- Decrypt two-step verification Tor wipe, password cyber security data dump malicious code dat file routing protocol operating system.
- Anonymous boot up website AFK.
  - Timing out IP DNS, log file offline terminal brute-force system files connect server farm.
  - Reboot sys admin worm log file wipe.

`youtube: xIBiJ_SzJTA`

Tor boot up backup anonymous bonsoir IRC website. Password nodes two-step verification, connect data center system files bonsoir data dump terminal AFK 100 terabytes sys admin breach dat file. Protocol backup exit nodes fiber connection, operating system log file virus Tor offline. Password data center two-step verification disconnect IRC terminal. Tor IRC cyber security AFK protocol traffic disconnect. Code exit nodes IRC cyber security nodes worm.
