#!/bin/bash
set -e

rm -rf deploy || exit 0;

git clone --branch=master --single-branch "https://${GH_TOKEN}@${GH_REPOSITORY}" deploy > /dev/null 2>&1
cd deploy

git rm -r .
cp -R ../public/* .
cp ../public/.* .

# git config user.name "Travis CI"
# git config user.email "travis@travis-ci.org"

git add .
git commit -am "Travis buld #${$TRAVIS_BUILD_NUMBER} - `date +\"%D %T\"` [ci skip]"
git push --force "https://${GH_TOKEN}@${GH_REPOSITORY}" +master > /dev/null 2>&1
