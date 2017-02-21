Coding Challenge

The Demo Link is here(in case that the code won`t run on your local machine properly): https://www.youtube.com/watch?v=6WCIm9O0DFk

Features:
1. Using AngularyJS framework
2. Using NodeJS

Installation:
1. Download and install nodejs at 
    https://nodejs.org/en/
2. Install npm in terminal: 
    npm install
    npm install express
3. Go to the directory and run the terminal: 
    node server_juniper.js
4. Open the page in chrome: 
    http://localhost:3000/public/index.html

Unit tests are written using mocha and chai. 
1. 
go to the directory and run the command:
cd ur_folder
npm install mocha
npm install
sudo npm install --global mocha
mocha testFile.test.js

2.
The files contained in the bower_components are files used to build a set of AngularJS directives. I previously implemented small part of it together with other people. The controller.js file and index.html file in public folder are using the directives directly. So the unit test for these two file are not necessary and the workload to do unit test for angular-shcema-form is too large (>3000 lines of code). The Schema Form directive is very useful to do tasks like transform form into json format.

3. To show the knowledge of unit test, there`s a fold call testDemo which includes several unit test examples. But those are not exactly the same code as mentioned in shcema-form.js file.

