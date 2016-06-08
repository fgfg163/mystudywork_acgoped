#!/bin/bash
unset GIT_DIR
WEB_PATH='/home/poweruser/acgoped'
WEB_USER='poweruser'
WEB_USERGROUP='poweruser'
 
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
forever restartall
echo "Finished."