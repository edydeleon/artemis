[![Artemis, a Hugo Boilerplate](./static/img/artemis.jpg)](https://github.com/edydeleon/artemis)

![](https://forthebadge.com/images/badges/built-with-love.svg)
![](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

[![](https://img.shields.io/badge/version-1.0.0-<COLOR>.svg)](https://github.com/edydeleon/artemis)
[![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/edydeleon/artemis)
[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/edydeleon/artemis/master/LICENSE)

# Artemis

A [Hugo](https://gohugo.io/) boilerplate.

**Disclaimer** - Artemis is a boilerplate (starter kit) for Hugo projects. It's not a Hugo theme and cannot be placed inside the `/themes` directory.

## Features

Artemis provides the following features out of the box:

- Base HTML template with site partials to separate style links, script sources, meta tags, and common site components
- Hugo Pipes set to auto-compile, minify, and MD5-hash CSS and JS based on development environment
- PostCSS through Hugo Pipes using Autoprefixer and PurgeCSS
- Google Analytics support through Hugo Templates
- Image optimization using [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
- Basic `netlify.toml` for simple [Netlify](https://www.netlify.com/) integration

## Prerequisites

Artemis does not include a copy of the `hugo` binary. You will need to [install Hugo Extended](https://gohugo.io/getting-started/installing/) first before you begin developing your site.

***The Extended version of Hugo is required.***

## Getting Started

To get started, clone the repository, then fun the following commands from the root directory.

```
npm install
npm start
```

### Adding Pages

To add main site pages run the `hugo new` command and create a markdown file in the `pages/` directory. Then create a corresponding `html` template file in `layouts/pages/`

Example:
```
hugo new pages/my-new-page.md
```

The `header.html` partial is configured to generate a main site navigation by utilizing [Hugo Menu Templates](https://gohugo.io/templates/menu-templates). The `pages.md` archetype sets each page markdown file to the main menu via front matter.

### Available Scripts

Theere are 4 available Scripts:

- `npm start` - Runs development server with CSS sourcemaps and drafts enabled
- `npm run preview` - Runs server in production environment with asset minification and postCSS enabled
- `npm run build` - Builds production ready site in public directory with minified/optimized assets
- `npm run images` - Runs gulp images task to optimize images in `./static/img/`

## File Structure

```
│
└──── /archetypes            - Hugo archetypes
│
└──── /assets                - Source files for scss and js
│   └─── /js
│   └─── /scss
│
└──── /content               - Hugo Content Directory
│   └─── /pages              - Markdown files for main site pages
│   |
│   | _index.md              - Site homepage markdown file
│
└──── /layouts               - Template files
│   └─── /_default
│       |
│       | baseof.html        - Base template
│   │
│   └─── /pages              - Template files for main site pages
│   │
│   └─── /partials
│       └─── /site           - Site partials
│       │
│       │ footer.html        - Site primary <footer>
│       │ header.html        - Site primary <header>
│       │ meta.html          - Site <meta> tags
│       │ scripts.html       - JavaScript <script> tags before closing </body>
│       │ styles.html        - Stylesheets referenced before closing </head>
│   │
│   │ 404.html               - 404 Template
│   │ index.html             - Home page
│
└──── /static                - Hugo static resources
│   └─── /img                - Images directory
│
│ config.yml                 - Hugo configuration file
│ gulpfile.js                - Gulp js file
│ netlify.toml               - Netlify configuration file
│ package.json
│ README.md                  - The README file you're reading right now
```

## License

MIT © Edy de Leon
