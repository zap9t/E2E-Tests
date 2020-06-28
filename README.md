## Requirements
- Nodejs
- Vortimo is up and running at localhost in port 4104

## Test Execution
1. Clone this repository
2. Navigate to the path the project was cloned
3. Type: npm install to install the dependencies
4. Type: npx wdio wdio.conf.js to run the script

## To load Chrome extension
1. Include the crx file (Eg: extension.crx) inside the project folder
2. Open wdio.config.js file 
3. Point to the crx file by including its path correctly
   
```
var extensionChrome = fs.readFileSync('Vortimo.crx'); 
```