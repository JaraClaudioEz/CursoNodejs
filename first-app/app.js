
function sayHello(name){
    console.log('Hello ' + name); //console.log() Is a global object
}

sayHello('Eze');

/*
MORE JAVASCRIPT GLOBAL OBJECTS

setTimeout() //Calls a functiona after a delay
clearTimeout()

setInterval(() => { //Used for call a functiona repeately after a given delay
    
}, interval);
clearInterval()

In Node all the javascript global objects can be accessed by the 'global' object,
but the variables wich we declare can not be accessed by the global object, because they are 
not added to the global object

In node every file is a module, so every variable or function defined has
the scope of that file/module. Like in OOP when a object is private
To be accessed the objects in a module need to be exported

*/

require('./logger') //To load a module
//for a sub folder './subFolder/logger', for a paretn folder '../logger'
//We can use jshint wich scan our javascript errors and gives back a more understable description
//In terminal: jshint app.js