
function sayHello(name) {
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

const logger = require('./logger') //To load a module
//for a sub folder './subFolder/logger', for a parent folder '../logger'
//We can use jshint wich scan our javascript errors and gives back a more understable description
//In terminal: jshint app.js


//path module
const path = require('path')

let pathObject = path.parse(__filename)

console.log(pathObject)

//Operating System module: to access information about the operating system

const os = require('os');

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

console.log(totalMemory + ' ' + freeMemory) //With concatenation
console.log(`Total Memory: ${totalMemory}`); //With template string
console.log(`Free Memory: ${freeMemory}`);

//File System: all the methoods comes in pairs Synchronous or Asynchronous
//Use allways Asynchronous methods!
const fs = require('fs')
/*
const files = fs.readdirSync('./')
console.log(files);
*/

fs.readdir('$', function (err, files) {
    if (err) console.log('Error', err); //This is not how to treat errors normally
    else console.log('Result', files);
})

//Events

const EventEmitter = require('events') //EventEmitter is a Class, see naming convenction
//const emitter = new EventEmitter() //emitter is an Object, a instance of EventEmitter. In the real world is quite rare to work with it directly

/*
//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'}) //between {} is an object called Event Argument to pass data to a Listener
//Important: first goes Listener then event raise, and event raise goes in logger module
*/

const Logger = require('./logger')
const logger = new Logger()


//Register a Listener
emitter.on('messageLogged', (arg) => { // arg or argument or e or event
    console.log('Listener called', arg);
})

logger.log('message')//Remember, when a event raise goes after the listener

//HTTP Module
const http = require('http')

const server = http.createServer((req, resp) => {
    if(req.url === '/'){ //To handle a url, a endpoint
        resp.write('Hello world')
        resp.end()
    }

    if(req.url === 'api/courses'){ //As we add more endpoints the complexity raises, so we use Express framework to simplify 
        resp.write(JSON.stringify([1, 2, 3])) //Using JSON we convert an array of numbers on string
        resp.end()
    }
}) //With this we create a web server, this server is a EventEmitter

/* This is a low level demostration
server.on('connection', (socket)=> { //A listener or handler  
    console.log('New connection...');
})
*/

server.listen(3000)

console.log('Listening on port 3000...'); //Every time there is a new connection or new request this server raises an event