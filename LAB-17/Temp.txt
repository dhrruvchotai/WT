const path = require('path');

//normalize
let ans = path.normalize('/foo/bar//baz/..');
console.log('Normalized path is :'+ans);

//join
ans = path.join('/foo','bar','baz','..');
console.log('Joined path is : '+ans);

//resolve
ans = path.resolve('/foo','bar','baz');
console.log('Absolute path is : '+ans);

//relative
ans = path.relative('C:\\Users\\User\\Desktop\\JavaScript\\Js Lab','C:\\Users\\User\\Desktop\\JavaScript\\Projects\\Card Flip');
console.log('Relative path is :'+ans);

//dirname 
ans = path.dirname('C:\\Users\\User\\Desktop\\JavaScript\\Js Lab\\LAB-17\\PathModule.js');
console.log('Directory name is :'+ans);

//basename
ans = path.basename('C:\\Users\\User\\Desktop\\JavaScript\\Js Lab\\LAB-17\\PathModule.js');
console.log('File name is :'+ans);

//extname
ans = path.extname('C:\\Users\\User\\Desktop\\JavaScript\\Js Lab\\LAB-17\\PathModule.js');
console.log('File Extension is :'+ans);

