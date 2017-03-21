#!/usr/bin/env bash
set -eo pipefail

readonly BROWSERIFY="browserify -t envify"
readonly WATCHIFY="watchify -v -t envify"

#Change output to build number folder if it is available
assets_output='build/assets';
[[ -n $IIGB_BUILD ]] && assets_output="${assets_output}/${IIGB_BUILD}"
readonly js_output="${assets_output}/js"
rimraf $js_output/*
mkdirp $js_output

if [[ $DIT_ENV == "development" ]]; then
  echo "Building js files for development environment"
  $WATCHIFY src/js/main.js --debug -o $js_output/main.js
else
  echo "Building js files for production environment"
  $BROWSERIFY src/js/main.js | uglifyjs --compress -o $js_output/main.js
fi

