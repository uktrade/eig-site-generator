#!/usr/bin/env bash

#Change output to build number folder if it is available
assets_output='build/assets';
[[ -n $IIGB_BUILD ]] && assets_output="${assets_output}/${IIGB_BUILD}"
readonly vendor_output="${assets_output}/vendor"
rimraf $vendor_output/*
mkdirp $vendor_output

echo $vendor_output

if [[ $DIT_ENV == "development" ]]; then
  echo "Copying vendor folder for development environment"
  node lib/copy-vendor-files.js $vendor_output
else
  echo "Copying vendor folder for production environment"
	node lib/copy-vendor-files.js $vendor_output
fi