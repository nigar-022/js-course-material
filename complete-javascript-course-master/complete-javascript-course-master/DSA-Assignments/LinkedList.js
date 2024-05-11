function ListNode(val,next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

    
}
head = new ListNode(4,5)
node = new ListNode(5,1);
node.next = new ListNode(1,9);
node.next.next = new ListNode(9,null);

var deleteNode = function(head) {
   
    let next = node.next.next;
    //console.log(next)
    node.val = node.next.val;
    node.next = next;
    
    return [head.val,node.val,node.next.val]
};

console.log(deleteNode(head,5))

//

// var removeNthFromEnd = function(head, n) {
    
//     let dummyHead = new ListNode(-Infinity);
//     dummyHead.next = head;
//     let resultHead= dummyHead;
    
//     let count = 0;
//     let tail = head;
    
//     while(count < n){
//         count++
//         tail = tail?.next;
//     }
    
//     let removedNode = head;
//     let prev=dummyHead;
    
//     while(tail){
//         tail = tail.next;
//         removedNode = removedNode.next;
//         prev = prev.next;
//     }
    
//     prev.next = removedNode.next;
//     return resultHead.next;
    
// };

// console.log(removeNthFromEnd([1,2,3,4,5],2))