class Stack {
    constructor (stackMaxLength = 10) {
        if (stackMaxLength !== undefined && typeof(stackMaxLength) !== 'number') {
            throw new Error ('Check your number')
        }
        this.stackMaxLength = stackMaxLength;
        this.stack = [];
        this.index = 0;
    }
    push(elem) {
        if (this.stack.length >= this.stackMaxLength){
            throw new Error ('Stack is full');
        }
        this.stack[this.index] = elem;
        this.index++;
    }
    pop() {        
        if (this.stack.length === 0) {
        throw new Error ('Stack is empty');
    }
    let deletedItem = this.stack[this.index-1]
    this.index--;
    return deletedItem;
    }
    peek() {
        if (this.stack.length === 0) {
            return null
        }
        return this.stack[this.index-1]
    }
    isEmpty() {
        return (this.stack.length === 0)?true:false
    }
    toArray() {
        return this.stack;
    }
}
let stack = new Stack ();
module.exports = { Stack };