#!/bin/bash

# ssh into digital ocean droplet, pull latest changes 
# and restart pm2 for changes to take affect
ssh root@ip-address
cd apps/weather-app-react
git pull 
cd server
pm2 restart src/index.ts