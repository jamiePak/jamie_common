#!/bin/bash

source $HOME/.bash_profile
export JAMIE=$HOME/jamie_project/deploy/jamie_common

cd /home/ec2-user/jamie_project/docker-image
./deploy.sh > /dev/null 2> /dev/null < /dev/null &