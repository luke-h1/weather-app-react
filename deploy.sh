#!/bin/bash
echo "Deploying API to heroku"
cd backend
git checkout main && git merge dev
git add * 
git commit -am "deploy"
git push heroku main
git push -u origin main && git checkout dev 