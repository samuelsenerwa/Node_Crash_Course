const EventEmitter = require("events");

// create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmiter = new MyEmitter();

// Event listener
myEmiter.on("event", () => console.log("Event Fired!"));

// Init event
myEmiter.emit("event");
