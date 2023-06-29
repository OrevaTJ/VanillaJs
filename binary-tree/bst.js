class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array=null) {
        this.root = array;
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

// console.log(tree.insert(60))
// tree.insert(40)
// tree.insert(70)
// console.log(tree.prettyPrint())


function buildTree(arr, start, end) {

    if(start > end) return;

    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = buildTree(arr, start, mid-1);
    node.right = buildTree(arr, mid+1, end);

    return node
}


// Merge sort using recursion

function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return [...sorted, ...left, ...right];
}


function mergeSort(array) {
    if(array.length <= 1) return array;

    let mid = Math.floor(array.length/2);

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid))

    return merge(left, right)
}

function duplicate(arr) {
    return [...new Set(arr)];
}



// let array = duplicate(mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 
//                     9, 67, 6345, 324]));
// let n = array.length
// console.log(array)
// let rootNode = buildTree(array, 0, n-1);
// console.log(rootNode.left)
// const tree = new Tree(buildTree(array, 0, n-1));
// console.log(tree)
// console.log(tree.prettyPrint())




