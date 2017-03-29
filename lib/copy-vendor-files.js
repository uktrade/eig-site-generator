#!/usr/bin/env node
const fs = require('fs-extra')

var argv = process.argv.slice(2)
var vendor_output = argv[0]

fs.copy('./src/vendor', vendor_output, err => {
  if (err) return console.error(err)
  console.log("Copy vendor files success!")
});