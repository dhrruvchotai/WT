const child_process = require('child_process');
const { stdout, stdin } = require('process');

// let ans = child_process.exec('dir',(err,stdout,stdin) => {
    
//     console.log(stdout);
// });


let newans = child_process.execSync('start brave');

console.log(newans);
