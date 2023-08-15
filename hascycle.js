class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

function hasCycle(head){
    let slowPointer = head, fastPointer = head;

    //While the fastPointer is still in the linkedlist
    while(fastPointer !== null && fastPointer.next !== null){

        fastPointer = fastPointer.next.next;

    }

}

//Test case1
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

//Add the cycle
node6.next = node3

console.log(hasCycle(head1))//true

//Test case2
const nodeF = new Node('f');
const nodeE = new Node('e', nodeF);
const nodeD = new Node('d', nodeE);
const nodeC = new Node('c', nodeD);
const nodeB = new Node('b', nodeC);
const headA = new Node('a', nodeB);

//Add cycle
nodeF.next = nodeB;

console.log(hasCycle(headA))//true

const nodeYellow = new Node('Yellow');
const nodeBlue = new Node('blue', nodeYellow);
const nodeRed = new Node('red', nodeBlue);
const nodePurple = new Node('purple', nodeRed);
const nodeOrange = new Node('orange', nodePurple);

console.log(hasCycle(nodeOrange))//False



