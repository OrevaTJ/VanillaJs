
// Using classes
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    listData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++
    }
}


const list = new LinkedList();

list.insertFirst(100)
list.insertFirst(200)
list.insertFirst(300)
list.insertLast(400)

console.log(list)
list.listData()


// Using factory functions
// function Node(data, next=null) {
//     return {
//         data,
//         next
//     }
// }

// function linkedList() {
//     let head = null;
//     let size = 0;

//     return {
//         insertFirst(data) {
//             head = Node(data, head)
//             size++
//         },
    
//         listData() {
//             let current = head;
    
//             while(current) {
//                 console.log(current.data)
//                 current = current.next;
//             }
//         },

//         insertLast() {
//             let node = Node(400);
//             let current;

//             if(!head) {
//                 head = node;
//             } else {
//                 current = head;

//                 while(current.next) {
//                     current = current.next;
//                 }
//                 current.next = node;
//             }
//             size++
//         }

//     }
// }

// const list = linkedList();

// list.insertFirst(100)
// list.insertFirst(200)
// list.insertFirst(300)
// list.insertLast(400)

// list.listData()
