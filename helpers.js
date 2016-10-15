'use strict'

const fs = require('fs')
const path = require('path')

const gutil = require('gulp-util')
const marked = require('marked')
const toc = require('markdown-toc')
const highlighter = require('highlight.js')
const wiredep = require('wiredep')()

let hbs = {}
let templateData = {}

class Helpers {
  constructor(handlebars, tplateData) {
    hbs = handlebars
    templateData = tplateData

    this.navigation = this.navigation.bind(this)
    this.navigationWrapper = this.navigationWrapper.bind(this)

    return {
      template: this.template,
      capitals: this.capitals,
      bodyInsert: this.bodyInsert,
      link: this.link,
      cssInject: this.cssInject,
      jsInject: this.jsInject,
      markdown: this.markdown,
      markdownHere: this.markdownHere,
      image: this.image,
      navigation: this.navigationWrapper
    }
  }

  capitals(str) {
    return str.toUpperCase()
  }

  bodyInsert(mode) {
    let content = ''

    if (mode !== 'live') {
      content = '<body></body>'
    }

    return new hbs.SafeString(content)
  }

  jsInject(mode) {
    let content = ''
    let dir = ''

    if (mode === 'live') {
      dir = './build-live/js'
    } else {
      dir = './build-dev/js'
    }

    const scripts = fs.readdirSync(dir)

    if (mode !== 'live') {
      content += '<!-- bower:js --->\n\t'
      for (let script of wiredep.js) {
        script = script.slice(script.indexOf('bower_components'))
        content += `<script src="${script}"></script>\n\t`
      }
      content += '<!-- endbower -->\n\t'
    }

    for (let script of scripts) {
      if (mode !== 'live' && script !== 'vendor_min_js') {
        content += `<script src="http://${templateData.year}.igem.org/Template:${templateData.teamName}/js/${script}?action=raw&ctype=text/javascript"></script>\n\t`
      } else if (script !== 'vendor_min_js') {
        content += `<script src="js/${script}"></script>\n\t`
      }
    }

    for (let script of scripts) {
      if (script === 'vendor_min_js') {
        content = `<script src="http://${templateData.year}.igem.org/Template:${templateData.teamName}/js/${script}?action=raw&ctype=text/javascript"></script>\n\t`
          + content
      }
    }

    return new hbs.SafeString(content)
  }

  cssInject(mode) {
    let content = ''
    let dir = ''

    if (mode === 'live') {
      dir = './build-live/css'
    } else {
      dir = './build-dev/css'
    }

    const styles = fs.readdirSync(dir)

    if (mode !== 'live') {
      content += '<!-- bower:css -->'
      for (let stylesheet of wiredep.css) {
        stylesheet = stylesheet.slice(stylesheet.indexOf('bower_components'))
        content += `<link rel="stylesheet" href="${stylesheet}" type="text/css" />\n\t`
      }
      content += '<!-- endbower -->\n\t'
    }

    if (mode === 'live') {
      content += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">\n\t'
    }

    for (let stylesheet of styles) {
      if (mode === 'live' && stylesheet !== 'vendor_min_css') {
        content += `<link rel="stylesheet" href="http://${templateData.year}.igem.org/Template:${templateData.teamName}/css/${stylesheet}?action=raw&ctype=text/css" type="text/css" />\n\t`
      } else if (stylesheet !== 'vendor_min_css') {
        content += `<link rel="stylesheet" href="styles/${stylesheet}" type="text/css" />\n\t`
      }
    }

    for (let stylesheet of styles) {
      if (stylesheet === 'vendor_min_css') {
        content = `<link rel="stylesheet" href="http://${templateData.year}.igem.org/Template:${templateData.teamName}/css/${stylesheet}?action=raw&ctype=text/css" type="text/css" />\n\t`
          + content
      }
    }

    return new hbs.SafeString(content)
  }

  // img: String of image filename in ./images/filename
  // format: use directlink for normal img tag to full resolution of file
  // use file for inline image using wiki code. this requires breaking and opening html
  // use media for an anchor that points to the full resolution of file
  // see images.json, and 'hardcode' your own markup, the links there should not change
  // note: images.json requires a successful `gulp push` to become populated with new images
  image(img, format, mode) {
    let content = ''
    let imageStores = {}

    if (mode === 'live') {
      if (format === 'directlink') {
        if (fs.readdirSync(__dirname).indexOf('images.json') !== -1) {
          imageStores = JSON.parse(fs.readFileSync('images.json'))
          content = imageStores[img]
        } else {
          content = ''
        }
      } else {
        let fmt = ''
        if (format === 'file') {
          fmt = 'File'
        } else if (format === 'media') {
          fmt = 'Media'
        }
        // TODO update this
        content = `</html> [[File:${templateData.teamName}_${templateData.year}_${img}]] <html>`
      }
    } else {
      if (format === 'directlink') {
        content = `<img src="images/${img}" />`
      } else {
        content = `images/${img}`
      }
    }

    return new hbs.SafeString(content)
  }

  link(linkName, mode) {
    if (mode === 'live') {
      if (linkName === 'index') {
        return `http://${templateData.year}.igem.org/Team:${templateData.teamName}`
      } else {
        return `http://${templateData.year}.igem.org/Team:${templateData.teamName}/${templateData.links[linkName]}`
      }
    } else {
      if (linkName === 'index') {
        return 'index.html'
      } else {
        return `${linkName}.html`
      }
    }
  }

  navigation(field, mode, active1, active2, recursed) {
    var active, actives, arg, content, i, isActive, item, j, k, l, len, len1, newItem, ref, value;
    content = "<ul>\n";
    actives = new Array();
    for (i = j = 0, len = arguments.length; j < len; i = ++j) {
      arg = arguments[i];
      if (i >= 2) {
        actives.push(arg);
      }
    }
    for (item in field) {
      value = field[item];
      isActive = false;
      for (k = 0, len1 = actives.length; k < len1; k++) {
        active = actives[k];
        if (item === active) {
          isActive = true;
        }
      }
      if (item[0] === '_') {
        newItem = '';
        for (i = l = 1, ref = item.length - 1; 1 <= ref ? l <= ref : l >= ref; i = 1 <= ref ? ++l : --l) {
          newItem += item[i];
        }
        item = newItem;
      }
      if (typeof value === 'object') {
        if (isActive) {
          content += "<li class=\"active\"><a href=\"#\"><span>" + item + "</span></a>\n";
        } else {
          content += "<li><a href=\"#\"><span>" + item + "</span></a>\n";
        }
        content += this.navigation(value, mode, active1, active2, true);
      } else {
        if (isActive) {
          content += "<li class=\"active\"><a href=\"" + (this.link(item, mode)) + "\"><span>" + value + "</span></a></li>\n";
        } else {
          content += "<li><a href=\"" + (this.link(item, mode)) + "\"><span>" + value + "</span></a></li>\n";
        }
        content += "</li>\n";
      }
    }
    content += "</ul>\n";
    return content;
  }

  navigationWrapper(mode, active1, active2) {
    let content = '<div id="navigation">\n'
    content += this.navigation(templateData.navigation, mode, active1, active2)
    content += '</div>'

    return new hbs.SafeString(content)
  }

  template(templateName, mode) {
    let template = hbs.compile(fs.readFileSync(`${__dirname}/src/templates/${templateName}.hbs`, 'utf8'))

    if (mode === 'live') {
      // Don't add preamble to live build
      if (templateName === 'preamble') {
        return new hbs.SafeString('')
      }

      return new hbs.SafeString(`{{${templateData.teamName}/${templateName}}}`)
    } else {
      return new hbs.SafeString(template(templateData))
    }
  }

  markdownHere(string, options) {
    marked.setOptions({
      highlight: (code) => highlighter.highlightAuto(code).value
    })

    let handlebarsedMarkdown = hbs.compile(string)(templateData)
    let markedHtml = marked(handlebarsedMarkdown)

    return new hbs.SafeString(markedHtml)
  }

  markdown(file) {
      marked.setOptions({
          highlight: (code) => highlighter.highlightAuto(code).value
      })
      const markdownFile = fs.readFileSync(`${__dirname}/src/markdown/${file}.md`).toString()
      const handlebarsedMarkdown = hbs.compile(markdownFile)(templateData)

      let content = '<div class="content" id="content-main">'
      content += '<div class="row">'

      content += '<div class="col col-lg-8 col-md-12"><div class="content-main">' + marked(handlebarsedMarkdown) + '</div></div>'
      content += '<div id="tableofcontents" class="tableofcontents affix sidebar col-lg-4 hidden-xs hidden-sm hidden-md visible-lg-3"><ul class="nav">' +
                       marked(toc(handlebarsedMarkdown, {firsth1: false, maxdepth: 5}).content).slice(4) +
                   '</div>'

      content += "</div></div>"

      return new hbs.SafeString(content)
  }
}

module.exports = Helpers
