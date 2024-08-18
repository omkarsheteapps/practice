// 16. create an Event Emitter

class EventEmitter {
    constructor(){
        this.events = {

        }
    }

    subscribe(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback)
        }else{
            this.events[eventName] = [callback]
        }

        return {
            release : () => {
                const callbacks = this.events[eventName];
                if(callbacks.length > 0){
                    let index = callbacks.indexOf(callback);
                    callbacks.splice(index,1)
                }
            }
        }

    }

    emit(eventName,...args){
        const callbacks = this.events[eventName]
        if(callbacks){
            for(let i = 0; i< callbacks.length;i++){
                callbacks[i](...args)
            }
        }
    }
}


const eventEmitter = new EventEmitter();

function testCallback(data) {
    console.log(`Event received with data: ${data}`);
}


const subscription = eventEmitter.subscribe('testEvent', testCallback);

console.log("Emitting 'testEvent' with data 'Hello World'");
eventEmitter.emit('testEvent', 'Hello World');  

console.log("Emitting 'testEvent' with data 'Another Event'");
eventEmitter.emit('testEvent', 'Another Event');  

subscription.release();

console.log("Emitting 'testEvent' after unsubscribe");
eventEmitter.emit('testEvent', 'This should not appear'); 