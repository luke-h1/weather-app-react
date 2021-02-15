#!/bin/bash
echo "🎆 deploying to prod 🎆"
cd backend
git add * 
git commit -am "deploy"
git push heroku master