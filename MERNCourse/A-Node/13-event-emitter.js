// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id)=>{ //on() listen for an event, first argument is the name of the event
    console.log(`data recieved user ${name} with id: ${id}`); 
})

customEmitter.on('response', ()=>{ //we can have as many functions who listen for an event and do some logic
    console.log(`some other logic here `); 
})

customEmitter.emit('response', 'eze', 17) //emits an event. Is very importan to mantian the order: first listen then emit