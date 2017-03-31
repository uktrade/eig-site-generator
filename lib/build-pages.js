#!/usr/bin/env node
var Metalsmith  = require('metalsmith')
var htmlMinifier  = require('metalsmith-html-minifier')
var env = require('metalsmith-env');
var layouts     = require('metalsmith-layouts')
var markdown    = require('metalsmith-markdown')
var pageBuilder = require('metalsmith-page-builder')
var nunjucks = require('nunjucks')
var path = require('path')

var dir=process.cwd()
configureNunjucks()

var configPath = path.normalize('/config/development.json');
if(process.env.DIT_ENV==='producton') {
  var configPath =  'config/production.json';
}

var metalsmith=Metalsmith(dir)
  .source('node_modules/eig-content/content')
  .destination('build')     // destination directory
  .clean(false)
  .use(env())
  .use(markdown())
  .use(pageBuilder({
    structures: 'node_modules/eig-content/structures',
  }))
  .use(layouts({
    engine: 'nunjucks',
    directory: 'src/templates'
  }))


/*eslint-disable  no-console */
if(process.env.DIT_ENV==='development') {
  //metalsmith.use(htmlMinifier())
}



metalsmith.build(function(err) {
  if (err) {
    /*eslint-disable  no-console */
    console.error(err.stack)
    process.exit(1)
  } else {
    console.log('Successfully built to %s', 'build')
  }
})
/*eslint-enable  no-console */

function configureNunjucks() {
  nunjucks.configure(
    ['./src/templates','./src/templates/partials'],
    {watch: false}
  )
}
