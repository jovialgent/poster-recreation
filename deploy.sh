#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to https://jovialgent.github.io
# git push -f git@github.com:jovialgent/jovialgent.github.io.git main

# if you are deploying to https://jovialgent.github.io/poster-recreation
git push -f git@github.com:jovialgent/poster-recreation.git main:gh-pages

cd -