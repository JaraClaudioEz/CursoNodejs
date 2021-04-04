const EventEmitter = require('events')

const url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
    log(message) { //When a function is inside a Class is called Method, there is no need to use function reserved word
    //Send an HTTP request
    console.log(message);

    //Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' })
}
}

/*
module.exports.log = log; //We can define another name to the exported object ex. module.exports.mylog = log;
//Also the line above exports an OBJECT, to export only a function: module.exports = log;
*/

module.exports = Logger