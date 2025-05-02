const fs = require('fs');
const path = require('path');

// Path to your CNAME file in the root of the project
const CNAME_PATH = path.join(__dirname, 'CNAME');
// Path to the generated build directory
const BUILD_PATH = path.join(__dirname, 'build');

// Copy the CNAME file to the build directory
fs.copyFileSync(CNAME_PATH, path.join(BUILD_PATH, 'CNAME'));

console.log('CNAME file copied to build folder!');
