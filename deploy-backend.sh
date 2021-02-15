#!/bin/bash
echo "🎆 deploying backend to production 🎆"
cd backend
git add * 
git commit -am "deploy"
git push heroku master