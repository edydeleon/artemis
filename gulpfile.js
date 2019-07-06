'use strict';

/**
 * LOAD PLUGINS
 */

const {
  series,
  parallel,
  src,
  dest,
  watch
} = require('gulp'),
  del = require('del'),
  sass = require('gulp-sass'),
  gulpif = require('gulp-if'),
  cssnano = require('cssnano'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  postcss = require('gulp-postcss'),
  imagemin = require('gulp-imagemin'),
  purgecss = require('gulp-purgecss'),
  browsersync = require('browser-sync').create(),
  autoprefixer = require('autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  environments = require('gulp-environments');

/**
 * NODE ENV VARIABLES
 * 
 * Used to conditionally run tasks based on env variable
 */
const production = environments.production;

/**
 * PATHS OBJECT
 * 
 * Contains all the relevant paths for gulp tasks
 */
const paths = {
  public: './public',
  styles: {
    main: './assets/scss/main.scss',
    src: './assets/scss/**/*.scss',
    dest: './public/css'
  },
  scripts: {
    src: './assets/js/**/*.js',
    dest: './public/js'
  },
  html: {
    src: './layouts/**/*.html'
  },
  images: {
    src: './assets/img/**/*{gif,png,jpg,JPG}',
    dest: './public/img'
  }
}

/**
 * CLEAN TASK
 * 
 * Deletes the public directory
 */
function clean() {
  return del([paths.public]);
}

/**
 * SERVE TASK
 * 
 * Initializes BrowserSync
 */
function serve(done) {
  browsersync.init({
    server: {
      baseDir: paths.public
    },
    port: 3000
  });
  done();
}

/**
 * RELOAD TASK
 * 
 * Reloads BrowserSync
 */
function reload(done) {
  browsersync.reload();
  done();
}

/**
 * STYLES TASK
 * 
 * IF DEV: Compiles main.scss, creates sourcemaps, adds vendor prefixes, outputs to public/css directory
 * 
 * IF PROD: Purges unused css and minifies
 */

function styles() {
  return src(paths.styles.main)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpif(production(), purgecss({
      content: [paths.html.src]
    })))
    .pipe(gulpif(production(), postcss([cssnano()])))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}

/**
 * SCRIPTS TASK
 * 
 * IF DEV: Compiles to ES2015+, concats all js files, creates sourcemaps, outputs to public/js directory
 * 
 * IF PROD: Minifies js
 */

function scripts() {
  return src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulpif(production(), uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scripts.dest));
}

/**
 * IMAGES TASK
 * 
 * Uses imagemin to optimize images
 */

function images() {
  return src(paths.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ], {
      verbose: true
    }))
    .pipe(dest(paths.images.dest));
}

/**
 * WATCH TASK
 * 
 * Watches for changes in assets and layouts directory
 * Runs through all tasks and reloads browsersync
 */

function watchTask() {
  return watch(
    [paths.html.src, paths.styles.src, paths.scripts.src, paths.images.src],
    series(styles, scripts, images, reload)
  )
}

/**
 * Default gulp task
 */
const def = parallel(styles, scripts, images, serve, watchTask)

exports.default = def;
exports.clean = clean;
exports.images = images;