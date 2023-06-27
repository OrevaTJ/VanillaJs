
//  Using classes

class Node {
    constructor(value, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        let node = new Node(value);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = node
        }
        this.size++
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++
    }


    listSize() {
        return this.size;
    }

    listHead() {
        return this.head;
    }

    tail() {
        let current = this.head

        while(current.nextNode) {
            current = current.nextNode;
        }
        return current  
    }


    getAt(index) {
        let current = this.head;
        let counter = 0;
        if(index === 0) {
            return current;
        } else if(index >= this.size) {
            return
        } else {
            while(counter < index) {
                current = current.nextNode;
                counter++
            }

            console.log(current)
        }
    }

    pop() {
        let current = this.head
        let previous;

        while(current.nextNode) {
            previous = current
            current = current.nextNode;
        }
        previous.nextNode = null
        this.size--
        return 
    }


    listValue() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.nextNode;
        }
    }


    insertAt(value, index) {
        if(index > this.size) return;

        if(index === 0) {
            this.prepend(value);
            return;
        }

        const node = new Node(value);
        let previous, current;

        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++
            current = current.nextNode
        }
        previous.nextNode = node;
        node.nextNode = current
        this.size++
    }


    removeAt(index) {
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0) {
            this.head = current.nextNode
        } else if (index > this.size) {
            return
        } else {
            while(count < index) {
                previous = current;
                count++;
                current = current.nextNode
            }
            previous.nextNode = current.nextNode;
        }
        this.size--
        return
    }

    toString() {
        let current = this.head;
        let str = '';
        while(current != null) {
            str += `( ${current.value} ) ->`
            current = current.nextNode;
        }
        str += 'null';
        return
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }
}


const list = new LinkedList();

list.prepend(100)
list.prepend(200)
list.prepend(300)
list.append(400)

console.log(list)
list.listValue()

////////////////////////////////////////////////
////////  Using factory functions    ///////////
///////////////////////////////////////////////


// function Node(value, nextNode=null) {
//     return {
//         value,
//         nextNode
//     }
// }

// function linkedList() {
//     let head = null;
//     let size = 0;

//     return {

//         append() {
//             let node = Node(400);
//             let current;

//             if(!head) {
//                 head = node;
//             } else {
//                 current = head;

//                 while(current.nextNode) {
//                     current = current.nextNode;
//                 }
//                 current.nextNode = node;
//             }
//             size++
//         },

//         prepend(value) {
//             head = Node(value, head)
//             size++
//         },

//         listSize() {
//             return size;
//         },
    
//         listHead() {
//             return head;
//         },
    
//         tail() {
//             let current = head
    
//             while(current.nextNode) {
//                 current = current.nextNode;
//             }
//             return current  
//         },
    
    
//         getAt(index) {
//             let current = head;
//             let counter = 0;
//             if(index === 0) {
//                 return current;
//             } else if(index >= size) {
//                 return
//             } else {
//                 while(counter < index) {
//                     current = current.nextNode;
//                     counter++
//                 }
    
//                 console.log(current)
//             }
//         },
    
//         pop() {
//             let current = head
//             let previous;
    
//             while(current.nextNode) {
//                 previous = current
//                 current = current.nextNode;
//             }
//             previous.nextNode = null
//             size--
//             return 
//         },

    
//         listValue() {
//             let current = head;
    
//             while(current) {
//                 console.log(current.value)
//                 current = current.nextNode;
//             }
//         },

//         insertAt(value, index) {
//             if(index > size) return;
    
//             if(index === 0) {
//                 list.prepend(value);
//                 return;
//             }
    
//             const node = Node(value);
//             let previous, current;
    
//             current = head;
//             let count = 0;
    
//             while(count < index) {
//                 previous = current;
//                 count++
//                 current = current.nextNode
//             }
//             previous.nextNode = node;
//             node.nextNode = current
//             size++
//         },

        
//         removeAt(index) {
//             let current = head;
//             let previous;
//             let count = 0;
    
//             if(index === 0) {
//                 head = current.nextNode
//             } else if (index > size) {
//                 return
//             } else {
//                 while(count < index) {
//                     previous = current;
//                     count++;
//                     current = current.nextNode
//                 }
//                 previous.nextNode = current.nextNode;
//             }
//             size--
//             return
//         },


//         toString() {
//             let current = head;
//             let str = '';
//             while(current != null) {
//                 str += `( ${current.value} ) -> `
//                 current = current.nextNode;
//             }
//             return (str += 'null');
//         },

//         clearList() {
//             head = null;
//             size = 0;
//        }

//     }
// }

// const list = linkedList();

// list.prepend(100)
// list.prepend(200)
// list.prepend(300)
// list.append(400)

// list.listValue()
