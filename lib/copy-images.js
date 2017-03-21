#!/usr/bin/env node
const fs = require('fs-extra')

var argv = process.argv.slice(2)
var images_output = argv[0]

fs.copy('./src/img', images_output, err => {
  if (err) return console.error(err)
  console.log("Copy images success!")
});