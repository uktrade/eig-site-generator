#!/usr/bin/env bash
set -eo pipefail

#Change output to build number folder if it is available
assets_output='build/assets';
[[ -n $IIGB_BUILD ]] && assets_output="${assets_output}/${IIGB_BUILD}"
readonly css_output="${assets_output}/css"
rimraf $css_output/*
mkdirp $css_output

NODE_SASS="node-sass --output $css_output"
if [[ $DIT_ENV == "development" ]]; then
  echo "Building sass files for development environment"
  $NODE_SASS src/sass &&
  $NODE_SASS --watch --recursive src/sass --source-map true \
      --source-maps-contents sass
else
  echo "Building css files for production environment"
  $NODE_SASS src/sass --output-style compressed
fi

