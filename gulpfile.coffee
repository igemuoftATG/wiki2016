# Gulp and related plugins
gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
handlebars = require 'gulp-compile-handlebars'
concat     = require 'gulp-concat'
cssmin     = require 'gulp-cssmin'
header     = require 'gulp-header'
rename     = require 'gulp-rename'
sass       = require 'gulp-sass'
sourcemaps = require 'gulp-sourcemaps'
uglify     = require 'gulp-uglify'
gutil      = require 'gulp-util'
watch      = require 'gulp-watch'

# NodeJS modules
browserify     = require 'browserify'
browserSync    = require('browser-sync').create()
buffer         = require 'vinyl-buffer'
coffeeify      = require 'coffeeify'
colors         = require 'colors'
cheerio        = require 'cheerio'
globby         = require 'globby'
htmlparser     = require 'htmlparser2'
mainBowerFiles = require 'main-bower-files'
phantom        = require 'phantomjs'
readlineSync   = require 'readline-sync'
request        = require 'request'
runSequence    = require 'run-sequence'
combiner       = require 'stream-combiner2'
streamEqual    = require 'stream-equal'
source         = require 'vinyl-source-stream'
toMarkdown     = require 'to-markdown'

# NodeJS internal modules
cp   = require 'child_process'
fs   = require 'fs'
path = require 'path'

paths =
    partials  : './src/templates'
    pulled    : './pulled'
    responses : 'responses'
    phantom   : 'phantom'

files =
    template     : './src/template.json'
    helpers      : 'helpers'
    images       : 'images.json'
    imagesFolder : './images'

dests =
    dev:
        folder     : './build-dev'
        css        : './build-dev/css'
        js         : './build-dev/js'
    live:
        folder : './build-live'
        js     : './build-live/js'
        css    : './build-live/css'

globs =
    sass      : './src/sass/**/*.scss'
    md        : './src/markdown/**/*.md'
    css       : dests.dev.css + '/**/*.css'
    libCoffee : './src/lib/**/*.coffee'
    libJS     : './src/lib/**/*.js'
    js        : dests.dev.js + '/**/*.js'
    hbs       : './src/**/*.hbs'


# **buildTemplateStruct**
buildTemplateStruct = (templateData, mode) ->
    templateDataStruct = new Object()
    # Hard-copy `templateData`
    for k in Object.keys(templateData)
        templateDataStruct[k] = templateData[k]
    # Add `mode`
    templateDataStruct.mode = mode

    return templateDataStruct

# **fillTemplates**
fillTemplates = ->
    templateData = JSON.parse(fs.readFileSync(files.template))
    # Return `dev` and `live` template datas
    return {
        dev: buildTemplateStruct(templateData, 'dev')
        live: buildTemplateStruct(templateData, 'live')
    }

headerCreator = (fileType) ->
    _package = JSON.parse(fs.readFileSync('package.json'))
    if fileType is 'html'
        opener = '<!--'
        closer = '-->'
        spacer = "   "
    else if fileType is 'js'
        opener = '//'
        closer = ''
        spacer = "     "
    else if fileType is 'css'
        opener = '/*'
        closer = '*/'
        spacer = "    "

    headerText = new String()



    if fileType is 'html'
        headerText += '<html>\n'

    headerText += "#{opener} ####################################################### #{closer}\n"
    headerText += "#{opener} #  This #{fileType} was produced by the igemwiki generator#{spacer}# #{closer}\n"
    headerText += "#{opener} #  https://github.com/igemuoftATG/generator-igemwiki  # #{closer}\n"
    headerText += "#{opener} ####################################################### #{closer}\n"
    headerText += "\n#{opener} repo for this wiki: #{_package.repository.url} #{closer}\n\n"

    if fileType is 'html'
        headerText += '</html>\n'

    return headerText

# **compileAllHbs**
compileAllHbs = (templateData, dest) ->
    # see: `helpers.coffee`
    Helpers = require "./helpers"
    # Pass in the *actual* `Handlebars` module and `templateData`.
    # Otherwise, helper functions are not found.
    helpers = new Helpers(handlebars.Handlebars, templateData)

    # Delete `Helpers` from require cache so that next `require` gets new version
    for key in Object.keys(require.cache)
        if key.indexOf("#{files.helpers}.js") isnt -1 and key.indexOf('node_modules') is -1
            delete require.cache[key]

    # Handlebars options, `batch` is where partials (templates in wiki case) are stored
    hbsOptions =
        batch: [paths.partials],
        helpers: helpers

    console.log(hbsOptions)

    # Return a `combiner` stream. Series of pipes will not work here.
    return combiner(
        gulp.src(globs.hbs),
        handlebars(templateData, hbsOptions),
        rename((path) ->
            path.extname = ".html"
        ),
        header(headerCreator('html')),
        gulp.dest(dest)
    ).on 'end', ->
        browserSync.reload()

# **handlebars:dev**
gulp.task "handlebars:dev", ['sass'], ->
    return compileAllHbs(fillTemplates().dev, dests.dev.folder)

# **handlebars:live**
gulp.task "handlebars:live", ['minifyAndUglify'], ->
    return compileAllHbs(fillTemplates().live, dests.live.folder)

# Compile `.scss` into `.css`
gulp.task 'sass', ->
    return gulp
        .src(globs.sass)
        .pipe(sass({
            includePaths: ['./bower_components/compass-mixins/lib', './bower_components/normalize-libsass/']
        }).on('error', sass.logError))
        .pipe(gulp.dest(dests.dev.css))
        .pipe(browserSync.stream())

# Compile `.coffee` into `.js`; browserify
gulp.task 'browserify', ->
    globby [globs.libCoffee, globs.libJS], (err,entries) ->
        if err
            gutil.log()
            return

        b = browserify({
            entries: entries
            extensions: ['.coffee', '.js']
            debug: true
            transform: [coffeeify]
        })

        combined = combiner.obj([
            b.bundle(),
            source('bundle.js'),
            buffer(),
            sourcemaps.init({loadMaps: true}),
            sourcemaps.write('./maps'),
            gulp.dest(dests.dev.js)
        ])

        combined.on('error', gutil.log)

        return combined

# **bower:js**
gulp.task 'bower:js', ->
    return gulp
        .src(mainBowerFiles('**/*.js'), { base: './bower_components'})
        .pipe(concat('vendor.js'))
        .pipe(uglify().on('error', gutil.log))
        # .pipe(rename({suffix: '.min'}))
        .pipe(rename('vendor_min_js'))
        .pipe(header(headerCreator('js')))
        .pipe(gulp.dest(dests.live.js))

# **bower:css**
gulp.task 'bower:css', ->
    return gulp
        .src(mainBowerFiles('**/*.css'), { base: './bower_components'})
        .pipe(concat('vendor.css'))
        .pipe(cssmin())
        # .pipe(rename({suffix: '.min'}))
        .pipe(rename('vendor_min_css'))
        .pipe(header(headerCreator('css')))
        .pipe(gulp.dest(dests.live.css))

# **bower**
gulp.task 'bower', ['bower:js', 'bower:css']

gulp.task 'minify:css', ['bower', 'sass'], ->
    return gulp
        .src(globs.css)
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        # .pipe(rename({suffix: '.min'}))
        .pipe(rename('styles_min_css'))
        .pipe(header(headerCreator('css')))
        .pipe(gulp.dest(dests.live.css))

gulp.task 'uglify:js', ['bower', 'browserify'], ->
    return gulp
        .src(globs.js)
        .pipe(concat('bundle.js'))
        .pipe(uglify().on('error', gutil.log))
        # .pipe(rename({suffix: '.min'}))
        .pipe(rename('bundle_min_js'))
        .pipe(header(headerCreator('js')))
        .pipe(gulp.dest(dests.live.js))


gulp.task 'minifyAndUglify', ['minify:css', 'uglify:js']

# **build:dev**
gulp.task 'build:dev', ['handlebars:dev', 'browserify']

# **build:live**
gulp.task 'build:live', ['handlebars:live']

# **serve**
gulp.task 'serve', ['sass', 'build:dev'], ->
# gulp.task 'serve', ['sass'], ->
    browserSync.init
        server:
            baseDir: dests.dev.folder
            routes:
                '/styles'           : dests.dev.css
                '/bower_components' : './bower_components'
                '/js'               : dests.dev.js
                '/preamble'         : './src/preamble'
                '/images'           : './images'

    watch [globs.hbs, globs.libCoffee, globs.libJS, globs.md, globs.sass, files.template], ->
        # gutil.log(vinyl.inspect())
        gulp.start('build:dev')

    watch [globs.libCoffee, globs.libJS], ->
        gulp.start('browserify')

# What happens when you run `gulp`
gulp.task "default", ['serve']

handleRequestError = (err, httpResponse) ->
    gutil.log('err: ', err)
    gutil.log('status code: ', httpResponse.statusCode)

colourify = (file, url, multiform, type) ->
    if type is 'image'
        year = JSON.parse(fs.readFileSync(files.template)).year
        return "Uploaded #{file} → http://#{year}.igem.org/File:#{multiform['wpDestFile']}".yellow
    else if path.extname(file) is '.html' and url.indexOf('Template') > 0
        return "Uploaded #{file} → #{url}".cyan
    else if path.extname(file) is '.html'
        return "Uploaded #{file} → #{url}".grey
    else if path.extname(file) is '.css'
        return "Uploaded #{file} → #{url}".magenta
    else if path.extname(file) is '.js'
        return "Uploaded #{file} → #{url}".blue
    else
        return "Uploaded #{file} → #{url}"
