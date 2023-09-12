const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello World!', {}, err => {
//     if(err) throw err;
//     console.log('File written to..');
// });

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'File appended successfully', {}, err => {
//     if(err) throw err;
//     console.log('File written to..');
// });

// Read file

// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log("File written to..");
//   }
// );

// Rename a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hellonode.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
