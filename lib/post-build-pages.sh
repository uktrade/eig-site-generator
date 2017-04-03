#!/usr/bin/env bash

# Required because we have hard coded image paths in content html
#Change path to images to include build number folder if it is available
assets_path='/assets/img/';
[[ -n $IIGB_BUILD ]] && assets_path="/assets/${IIGB_BUILD}/img/"

if [[ $DIT_ENV == "development" ]]; then
  echo "Post build pages - rewrite asset paths in development"
  node lib/post-build-pages.js $assets_path
elif [[ $DIT_ENV == "staging" ]]; then
  echo "Post build pages - rewrite asset paths in staging"
  node lib/post-build-pages.js $assets_path
else
  echo "Post build pages - rewrite asset paths in production"
	node lib/post-build-pages.js $assets_path
fi