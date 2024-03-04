#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"
pwd
. ~/.nvm/nvm.sh
nvm use 8
node --version

#npm install

TESTCASE=$1

dateTime=`date +%Y-%m-%d\ %T`

#./node_modules/mocha/bin/mocha -t 18000000 $TESTCASE --reporter mochawesome --reporter-options reportFilename="${BUILD_NUMBER}-${Environment}-${Country}-${dateTime}-TestReport"
./node_modules/mocha/bin/mocha -t 18000000 $TESTCASE --reporter mochawesome --reporter-options reportFilename="${BUILD_NUMBER}-${Environment}-${dateTime}-TestReport"


#npm install cassandra-driver --save
#npm install chai --save
#npm install crypto-js --save
#npm install jquery --save
#npm install jsdom --save
#npm install log4js --save
#npm install mocha --save
#npm install moment --save
#npm install mysql --save
#npm install puppeteer --save
#npm install selenium-webdriver --save
#npm install uuid --save
#npm install chromedriver --save

#npm install mochawesome --dev
#npm install supertest --dev
