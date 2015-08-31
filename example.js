var string = "Hello World";
var buffer = new Buffer(string);
var toHex = buffer.toString('ucs2');
console.log(string + " encoding to hex is " + toHex);
