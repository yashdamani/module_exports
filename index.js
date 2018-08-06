var strings = require('./stringexample');
var functions = require('./functionexample');
var objects = require('./objects');
var classes = require('./class');
var prop = require('./property');

var obj1 = new classes("abc@gmail.com", "yash");

console.log(strings); //string
console.log(functions.one("Hello world from function"));//function one 
console.log(functions.two("Hello world from another function"));//function two
console.log(objects.name + " " +objects.email);//objects
console.log(obj1.email + " " + obj1.name);//classes
console.log(prop.SimpleMessage);




