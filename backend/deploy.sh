#!/bin/bash
echo "Deploying API to heroku 🤠"
git checkout main && git merge dev
git add * 
git commit -am "deploy"
git push heroku main
git push -u origin main && git checkout dev 
echo "deployed backend to heroku"
echo ""
echo ""
echo "deploying frontend to vercel 🤠"
cd frontend && vc && vc --prod 