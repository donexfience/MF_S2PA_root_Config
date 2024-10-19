const fs = require("fs");

const path = require("path");
const source = path.join(__dirname, "./src/importmap.json");
const destination = path.join(__dirname, 'dist', 'importmap.json');  

fs.copyFileSync(source, destination);
console.log('importmap.json copied successfully!');