#!/usr/bin/env node
const replace = require('replace-in-file');

var argv = process.argv.slice(2);
var assets_path = argv[0];

  console.log('assets_path', assets_path);
  
const options = {
  //Glob(s) 
  files: [
    'build/*.html',
    'build/**/*.html',
  ],
  //Replacement to make (string or regex) 
  from: /\/assets\/img\//g,
  to: assets_path,
  //Specify if empty/invalid file paths are allowed (defaults to false) 
  //If set to true these paths will fail silently and no error will be thrown. 
  allowEmptyPaths: false,
  //Character encoding for reading/writing files (defaults to utf-8) 
  encoding: 'utf8',
};

replace(options, (error, changedFiles) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  console.log('asseets_path in JS', assets_path);
  console.log('Modified files:', changedFiles.join(', '));
});
