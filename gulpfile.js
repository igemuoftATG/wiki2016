'use strict'

// Node core modules
const fs = require('fs')
const path = require('path')
const cp = require('child_process')

// Gulp modules
const gulp = require('gulp')
const handlebars = require('gulp-compile-handlebars')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const header = require('gulp-header')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const gutil = require('gulp-util')
const watch = require('gulp-watch')

// npm modules
const Promise = require('bluebird')
const browserify = require('browserify')
const browserSync = require('browser-sync').create()
const buffer = require('vinyl-buffer')
const colors = require('colors')
const globby = require('globby')
const mainBowerFiles = require('main-bower-files')
const runSequence = require('run-sequence')
const combiner = require('stream-combiner2')
const source = require('vinyl-source-stream')
const _ = require('lodash')

// API for uploading/download pages with igem wiki
const igemwiki = require('igemwiki-api')({ year: 2016, teamName: 'Toronto' })

// Files and Globs
const paths = {
  partials: './src/templates',
  pulled: './pulled',
  responses: './responses'
}

const files = {
  template: './src/template.json',
  helpers: 'helpers',
  images: 'images.json',
  imagesFolder: './images'
}

const dests = {
  dev: {
    folder: './build-dev',
    css: './build-dev/css',
    js: './build-dev/js'
  },
  live: {
    folder: './build-live',
    js: './build-live/js',
    css: './build-live/css',
    templates: './build-live/templates'
  }
}

const globs = {
  sass: './src/sass/**/*.scss',
  md: './src/markdown/**/*.md',
  css: dests.dev.css + '/**/*.css',
  libJS: './src/lib/**/*.js',
  js: dests.dev.js + '/**/*.js',
  hbs: './src/**/*.hbs'
}

const buildTemplateStruct = (templateData, mode) => {
  let templateDataStruct = {}
  // Hard copy `templateData`
  for (let key in templateData) {
    templateDataStruct[key] = templateData[key]
  }
  // Add `mode`
  templateDataStruct.mode = mode

  return templateDataStruct
}

const fillTemplates = () => {
  const templateData = JSON.parse(fs.readFileSync(files.template))

  return {
    dev: buildTemplateStruct(templateData, 'dev'),
    live: buildTemplateStruct(templateData, 'live')
  }
}

const headerCreator = (fileType) => {
  const _package = JSON.parse(fs.readFileSync('package.json'))

  let opener, closer, spacer
  switch (fileType) {
    case 'html':
      opener = '<!--'
      closer = '-->'
      spacer = '   '
      break
    case 'js':
      opener = '//'
      closer = ''
      spacer = '     '
      break
    case 'css':
      opener = '/*'
      closer = '*/'
      spacer = '    '
  }

  let headerText = ''
  if (fileType === 'html') headerText += '<html>\n'

  headerText += `${opener} ####################################################### ${closer}\n`
  headerText += `${opener} #  This ${fileType} was produced by the igemwiki generator${spacer}# ${closer}\n`
  headerText += `${opener} #  https://github.com/igemuoftATG/generator-igemwiki  # ${closer}\n`
  headerText += `${opener} ####################################################### ${closer}\n`
  headerText += `\n${opener} repo for this wiki: ${_package.repository.url} ${closer}\n`
  headerText += `${opener} file built: ${new Date()} ${closer}\n\n`

  if (fileType === 'html') headerText += '</html>\n'

  return headerText
}

const compileAllHbs = (templateData, dest) => {
  const Helpers = require('./helpers.js')
  const helpers = new Helpers(handlebars.Handlebars, templateData)

  // Delete `Helpers` from require cache so that next `require` gets new version
  Object.keys(require.cache).forEach((key) => {
    if (key.indexOf('helpers.js') !== -1 && key.indexOf('node_modules') === -1) {
      delete require.cache[key]
    }
  })

  // Handlebars options, `batch` is where partials (templates in wiki case) are stored
  const hbsOptions = {
    batch: [ paths.partials ],
    helpers
  }

  console.log(hbsOptions)

  // Combiner stream since series of pipes doesnt work
  return combiner(
    gulp.src(globs.hbs),
    handlebars(templateData, hbsOptions),
    rename(path => path.extname = '.html'),
    header(headerCreator('html')),
    gulp.dest(dest)
  ).on('end', () => browserSync.reload())
}

gulp.task('handlebars:dev', [ 'sass' ], () => {
  return compileAllHbs(fillTemplates().dev, dests.dev.folder)
})

gulp.task('handlebars:live', [ 'minifyAndUglify' ], () => {
  return compileAllHbs(fillTemplates().live, dests.live.folder)
})

gulp.task('sass', () => gulp
  .src(globs.sass)
  .pipe(sass({
    includePaths: ['./bower_components/compass-mixins/lib', './bower_components/normalize-libsass/']
  }).on('error', sass.logError))
  .pipe(gulp.dest(dests.dev.css))
  .pipe(browserSync.stream())
)

gulp.task('browserify', () => {
  globby([globs.libJS], (err, entries) => {
    if (err) {
      gutil.log()
      return
    }

    const b = browserify({
      entries,
      extensions: ['.js'],
      debug: true,
      // transform: [babelify]
    })

    const combined = combiner.obj([
      b.bundle(),
      source('bundle.js'),
      buffer(),
      sourcemaps.init({ loadMaps: true }),
      sourcemaps.write('./maps'),
      gulp.dest(dests.dev.js)
    ])

    combined.on('error', gutil.log)

    return combined
  })
})

gulp.task('bower:js', () => gulp
  .src(mainBowerFiles('**/*.js'), { base: './bower_components' })
  .pipe(concat('vendor.js'))
  .pipe(uglify().on('error', gutil.log))
  // .pipe(rename({suffix: '.min'}))
  .pipe(rename('vendor_min_js'))
  .pipe(header(headerCreator('js')))
  .pipe(gulp.dest(dests.live.js))
)

gulp.task('bower:css', () => gulp
  .src(mainBowerFiles('**/*.css'), { base: './bower_components'})
  .pipe(concat('vendor.css'))
  .pipe(cssmin())
  // .pipe(rename({suffix: '.min'}))
  .pipe(rename('vendor_min_css'))
  .pipe(header(headerCreator('css')))
  .pipe(gulp.dest(dests.live.css))
)

gulp.task('bower', [ 'bower:js', 'bower:css' ])

gulp.task('minify:css', [ 'bower', 'sass' ], () => gulp
  .src(globs.css)
  .pipe(concat('styles.css'))
  .pipe(cssmin())
  // .pipe(rename({suffix: '.min'}))
  .pipe(rename('styles_min_css'))
  .pipe(header(headerCreator('css')))
  .pipe(gulp.dest(dests.live.css))
)

gulp.task('uglify:js', [ 'bower', 'browserify' ], () => gulp
  .src(globs.js)
  .pipe(concat('bundle.js'))
  .pipe(uglify().on('error', gutil.log))
  // .pipe(rename({suffix: '.min'}))
  .pipe(rename('bundle_min_js'))
  .pipe(header(headerCreator('js')))
  .pipe(gulp.dest(dests.live.js))
)

gulp.task('minifyAndUglify', [ 'minify:css', 'uglify:js' ])

gulp.task('build:dev', [ 'handlebars:dev', 'browserify' ])

gulp.task('build:live', [ 'handlebars:live' ])

gulp.task('serve', [ 'sass', 'build:dev' ], () => {
  browserSync.init({
    server: {
      baseDir: dests.dev.folder,
      routes: {
        '/styles': dests.dev.css,
        '/bower_components': './bower_components',
        '/js': dests.dev.js,
        '/preamble': './src/preamble',
        '/images': './images'
      }
    },
    open: false
  })

  watch([ globs.hbs, globs.libJS, globs.md, globs.sass, files.template ], () => {
    gulp.start('build:dev')
  })

  watch([ globs.libJS ], () => {
    gulp.start('browserify')
  })
})

gulp.task('default', [ 'serve' ])
