
class Tree {
    constructor(array=null) {
        removeDuplicate(array);
        const n = array.length;
        this.root = buildTree(array, 0, n-1);
    }

    insert(data) {
        const node = this.root;
        if(node === null) {
            return this.root = new Node(data);
        } else {
            const insertData = function(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if(node.left !== null) {
                        return node.left = insertData(node.left);
                    }
                } else if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if(node.right !== null) {
                        return insertData(node.right);
                    }
                } else {
                    return null
                }
            };
            // Call the function passing node
            return insertData(node)
        }
    }

    delete(data) {
        let node = this.root
        if(node.data === null) return;

        function deleteNode(node, data) {
            if(node.data === data) {
                if(node.left === null && node.right === null) {
                    return null;
                } else if(node.left === null) {
                    return node.right;
                } else if(node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while(tempNode.left) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data
                node.right = deleteNode(node.right, data);
                return node;
            } else if(data < node.data) {
                node.left = deleteNode(node.left, data);
                return node
            } else {
                node.right = deleteNode(node.right, data);
            }
        }

        deleteNode(node, data);
    }


    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) return
        }
        return current
    }


    levelOrder(node=this.root, queueList = [], printList = []) {
        if (node.data === null) return;

        queueList.push(node);

        while(queueList.length) {
            let temp = [];
            let size = queueList.length
            for(let i=0; i<size; i++) {
                let current = queueList.shift();
                temp.push(current.data);
                if(current.left) {
                    queueList.push(current.left)
                }
                if(current.right) {
                    queueList.push(current.right)
                }
            }
            
            printList.push(temp);
        }

        return printList;
    }


    inOrderTraversal(node = this.root) {
        let printList = [];
        inOrder(node)
        function inOrder(node) {
            if(!node) return null;

            inOrder(node.left);
            printList.push(node.data);
            inOrder(node.right);
        }
        return printList
    }


    
    preOrderTraversal(node = this.root) {
        let printList = [];
        inOrder(node)
        function inOrder(node) {
            if(!node) return null;

            printList.push(node.data);
            inOrder(node.left);
            inOrder(node.right);
        }
        return printList
    }


    
    postOrderTraversal(node = this.root) {
        let printList = [];
        inOrder(node)
        function inOrder(node) {
            if(!node) return null;

            inOrder(node.left);
            inOrder(node.right);
            printList.push(node.data);
        }
        return printList
    }


    height(node=this.root) {
        if(node === null) return 0;

        const x = this.height(node.left);
        const y = this.height(node.right);
        
        return Math.max(x, y) + 1;
    }


    depth(data, node=this.root, count=0) {
        if(!data) return;
        if(data === node.data) return count;
        if(data < node.data) {
            return this.depth(data, node.left, count + 1)
        } else {
            return this.depth(data, node.right, count + 1)
        }
    }


    
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
          }
        if (node.right) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '|   ' : '    '}`, false)
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '|   '}`, true)
        }
    }
}



function buildTree(arr, start, end) {

    if(start > end) return;

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = buildTree(arr, start, mid-1);
    node.right = buildTree(arr, mid+1, end);

    return node
}



module.exports = Tree;