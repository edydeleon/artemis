[![Artemis, a Hugo Boilerplate](https://i.imgur.com/K7nUXTB.jpg)](https://github.com/edydeleon/artemis)

![](https://forthebadge.com/images/badges/built-with-love.svg)
![](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

[![](https://img.shields.io/badge/version-0.2.1-<COLOR>.svg)](https://github.com/edydeleon/artemis)
[![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/edydeleon/artemis)

# Artemis

A [Hugo](https://gohugo.io/) boilerplate.

**Disclaimer** - Artemis is a boilerplate (starter kit) for Hugo projects. It's not a Hugo theme and cannot be placed inside the `/themes` directory.

## Features

Artemis provides the following features out of the box:

* Sass compilation with sourcemaps and autoprefixer
* Purgecss integration and minification for production builds
* JS concatination with babel integration
* JS minification for production builds
* BrowserSync server integration

## Prerequisites

Artemis does not include a copy of the `hugo` binary. You will need to [install Hugo](https://gohugo.io/getting-started/installing/) first before you begin developing your site.

## Getting Started

To get started, clone the repository, then fun the following commands from the root directory.

```

npm install
npm run dev

```

### Available Commands

Theere are 3 available commands:

* `npm run dev` - Builds assets using gulp and hugo and creates a browsersync server
* `npm run stage` - Same as `dev`, but minifies assets
* `npm run production` - Builds production ready site in public directory

## File Structure

```
│
└──── /archetypes            - Hugo archetypes
│
└──── /assets                - Source files for assets (SASS, JS, Images, Fonts etc)
│   └──── /img
│   └──── /js
│   └──── /scss
│
└──── /layouts               - Template files
│   │ 404.html               - 404 Template
│   │ index.html             - Home page
│   │
│   └──── /_default          - Base templates
│   │   │ baseof.html        - Base template
│   │
│   └──── /partials          - Partials for site
│       │ footer.html        - Sites primary <footer>
│       │ header.html        - Sites primary <header>
│       │ meta.html          - Site <meta> tags
│       │ scripts.html       - JavaScript <script> referenced before closing </body>
│       │ styles.html        - Stylesheets referenced before closing </head>
│
└──── /static                - Hugo static resources
│   │ favicon.ico
│
│ .babelrc                   - Babel configuration file
│ .gitignore
│ config.yml                 - Hugo configuration file
│ gulpfile.js                - Gulp js file
│ LICENSE
│ package.json
│ README.md                  - The README file you're reading right now
```

## License

MIT © Edy de Leon