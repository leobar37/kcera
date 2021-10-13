#!bin/sh

set -e
npm run build
git add .
git commit -m "chore: deploy version 1.0.1"
git checkout main
git merge develop
git push deploy main
git push origin main
git checkout develop