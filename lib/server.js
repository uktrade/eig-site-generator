#!/usr/bin/env node

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;

app.set('case sensitive routing', false);

app.use(express.static(process.cwd() + '/build'));

app.listen(port, function() {
  console.log('listening');
});
