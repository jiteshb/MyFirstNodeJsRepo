const events = require('events');
const myEmitter = new events.EventEmitter();

/*function c1(name, id) {
   console.log(`an event occurred! ${name}  ${id}`);
}*/

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', (name,id) => {
    console.log(`an event occurred! ${name}  ${id}`);
}); // Register for eventOne

myEmitter.on('eventOne', c2); // Register for eventOne

myEmitter.emit('eventOne','jitesh',1)

