#!bin/sh

set -e

git add .
git commit -m "chore: deploy version 1.0.1"
git checkout main
git merge develop
git push deploy main