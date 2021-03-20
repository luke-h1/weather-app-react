#!/bin/bash
echo "Deploying API to heroku 🤠"
cd server 
git add * 
git commit -am "deploy"
git push heroku main
echo "deployed backend to heroku"
echo ""
echo ""
echo "deploying frontend to vercel 🤠"
cd ../client && vc && vc --prod 

