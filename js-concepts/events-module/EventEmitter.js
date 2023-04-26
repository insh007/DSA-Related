const EventEmitter = require('events')

// create a new event emitter instance
const myEmitter = new EventEmitter()

// register a listener for the 'myEvent' event
myEmitter.on('myEvent', () => {
    console.log('myEvent was triggered')
})

console.log("Do something before event occurs in the system")

// emit the 'myEvent' event
myEmitter.emit('myEvent') 