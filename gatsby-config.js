const postCssPresetEnv = require(`postcss-preset-env`);
const postCSSNested = require('postcss-nested');
const postCSSUrl = require('postcss-url');
const postCSSImports = require('postcss-import');
const cssnano = require('cssnano');
const postCSSMixins = require('postcss-mixins');

module.exports = {
	siteMetadata: {
		title: `Darshan Kumar`,
		description: `full stack engineer`,
		copyrights: '2020',
		author: `@darshankumar`,
		logo: {
			src: '',
			alt: ''
		},
		logoText: 'Darshan Kumar',
		defaultTheme: 'dark',
		postsPerPage: 5,
		showMenuItems: 2,
		menuMoreText: 'Show more',
		mainMenu: [
			{
				title: 'About',
				path: '/full-stack-developer'
			},
			{
				title: 'Showcase',
				path: '/showcase'
			},
			{
				title: 'entrepreneur',
				path: '/entrepreneur'
			},
			{
				title: 'coronavirus',
				path: '/coronavirus'
			},
			{
				title: 'how-to-install-and-use-postgresql-on-ubuntu-18-04',
				path: '/how-to-install-and-use-postgresql-on-ubuntu-18-04'
			}
		]
	},
	plugins: [
		`babel-preset-gatsby`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					postCSSUrl(),
					postCSSImports(),
					postCSSMixins(),
					postCSSNested(),
					postCssPresetEnv({
						importFrom: 'src/styles/variables.css',
						stage: 1,
						preserve: false
					}),
					cssnano({
						preset: 'default'
					})
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-embed-video',
						options: {
							related: false,
							noIframeBorder: true
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							quality: 100
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `darshan kumar`,
				short_name: `full-stack-developer`,
				start_url: `/full-stack-developer`,
				background_color: `#292a2d`,
				theme_color: `#292a2d`,
				display: `minimal-ui`,
				icon: `src/images/hello-icon.png`
			}
		},
		{
			resolve: 'gatsby-plugin-whatshelp',
			options: {
				facebook: 'https://www.facebook.com/darshankumar89', // Facebook page ID
				whatsapp: '+32 465183127', // WhatsApp number
				email: 'darshankumar38@gmail.com', // Email
				call: '+32 465183127', // Call phone number
				company_logo_url: '//storage.whatshelp.io/widget/xx/xxxx/xxxxxx/logo.jpg', // URL of company logo (png, jpg, gif)
				greeting_message: 'Hello', // Text of greeting message
				call_to_action: 'Call to Action', // Call to action
				button_color: '#b02030', // Color of button
				position: 'right', // Position may be 'right' or 'left'
				order: 'facebook,whatsapp,call,email', // Order of buttons
				ga: true, // Google Analytics enabled
				branding: false, // Show branding string
				mobile: true, // Mobile version enabled
				desktop: true, // Desktop version enabled
				greeting: true, // Greeting message enabled
				shift_vertical: 0, // Vertical position, px
				shift_horizontal: 0, // Horizontal position, px
				domain: 'https://darshankumar.netlify.com', // site domain
				key: 'xxx' // pro-widget key
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-133460649-2'
			}
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `UA-133460649-2`,
				// Puts tracking script in the head instead of the body
				head: true,
				// enable ip anonymization
				anonymize: true
			}
		}
	]
};
