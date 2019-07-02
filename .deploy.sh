#!/usr/bin/env sh
set -e
yarn run build

# 进入生成的文件夹
cd dist
git init
git add -A
git commit -m '<deploy> project'
git push -f git@github.com:yxbysxcoco/resources.git master:gh-pages

cd -