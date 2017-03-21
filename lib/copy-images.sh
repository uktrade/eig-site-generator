#!/usr/bin/env bash

#Change output to build number folder if it is available
assets_output='build/assets';
[[ -n $IIGB_BUILD ]] && assets_output="${assets_output}/${IIGB_BUILD}"
readonly images_output="${assets_output}/img"
rimraf $images_output/*
mkdirp $images_output

if [[ $DIT_ENV == "development" ]]; then
  echo "Copying images folder for development environment"
  node lib/copy-images.js $images_output
else
  echo "Copying images folder for production environment"
	node lib/copy-images.js $images_output
fi