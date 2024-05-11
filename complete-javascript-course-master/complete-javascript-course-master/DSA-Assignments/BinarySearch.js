// var search = function(nums,target){
//     let left = 0;
//     let right = nums.length -1;

//     while(left <= right){
//         const mid = Math.floor((left + right) / 2);
//         if(nums[mid] == target) {
//             return mid
//         } else if (nums[mid] < target){
//             left = mid + 1
//         } else {
//             right = mid -1
//         }

//     }
//     return -1
// }
// console.log(search([-1,0,3,5,9,12],9))

//_______________________________________

//recursive binary search

function binarySearch(arr, l, r, x){
        if(l > r) return null;

        if(l < r){
        let mid = Math.floor((l + r) / 2);
        // If the element is present at the middle
        // itself
        
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if ( x < arr[mid] )
            return binarySearch(arr, l, mid - 1, x);
 
        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}
let arr = [ 2, 3, 4, 10, 40 ];
let x = 5;
let n = arr.length -1
//console.log(binarySearch(arr,0,n,x))

// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 10;
// let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log( "Element is not present in array")
                   : console.log("Element is present at index " + result);

//_________________________________________________________________
// var mySqrt = function(x) {
//    return Math.floor(Math.sqrt(x));
    

    
// };

// console.log(mySqrt(8))

//_________________________________________________

// var guessNumber = function(n) {
//     let left = 0;
//     let right = n;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (guess(mid) == 0) {
//             return mid;
//         } else if (guess(mid) == -1) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
    
//     return 0;
// };

// // console.log(guessNumber(10))

//+++++++++++++++++++++++++++++++++++++++++++++

//maximum depth of array

function TreeNode(v){
    this.val = v;
    this.left = null;
    this.right = null;
  };
const root = new TreeNode(3);//the nums dont even matter u can delete if you want lol...
root.right = new TreeNode(4);
//root.right.left = new TreeNode(3);
//root.right.right = new TreeNode();
root.left = new TreeNode(1);
root.left.right = new TreeNode(2);


  var maxDepth = function(root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

console.log('maxdepth', maxDepth(root));

//_____________________________________________________________________

var isValidBST = function(root) {
  
    return helper(root, null, null);
    
};
  
function helper(root, min, max) {
    if (!root) {
        return true; // We hit the end of the path
    }
    
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
        //right || left
        return false; // current node's val doesn't satisfy the BST rules
    }
    
    // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

console.log(isValidBST(root))

//symmetric 

const isSymmetric = function(root){
    if(!root) return true           

    return traverse(root.left,root.right)
}

function traverse(node1,node2){

    if(!node1 && !node2) return true 
    if(!node1 || !node2 ) return false
    if(node1.val !== node2.val) return false

    
    return traverse(node1.left,node2.right) && traverse(node1.right,node2.left)

}

console.log(isSymmetric(root))

//_____________________________________________________________________________________

var levelOrder = function(root) {
    if(!root) return [];
    
    const queue = [root];
    const result = [];
    
    while(queue.length){
        let len = queue.length;
        
        result.push(queue.map(node => node.val))
        
        while(len--){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        
    }
    return result
    
};
console.log(levelOrder(root))

//__________________________________________________________________________

// sorted array to bst

const sortedArrayToBST = function(nums,left=0,right=nums.length - 1){
    if(left > right) return null;


    let mid = Math.floor((left + right) /2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums,left,mid - 1);
    root.right = sortedArrayToBST(nums,mid+1,right)

    return Object.values(root)
}


console.log(sortedArrayToBST( [-10,-3,0,5,9]))

// Inorder travelsal


const inorderTraversal = function(root){

    let node = root;
    const result = [];

    while(node){
        if(!node.left){
            result.push(node.val)
            node=node.right;

        } else{
            const pred = findPredecessor(node);
            if(pred.right === node){
                pred.right = null;
                result.push(node.val)
                node=node.right
            } else{
                pred.right = node;
                node = node.left;
            }
        }
    }

    return result;

}

const findPredecessor = function(root){
    let node = root.left;
    while(node.right && node.right !== root){
        node=node.right;

    }
    return node
}

console.log(inorderTraversal(root))


//Binary Tree Zigzag Level Order Traversal

const zigzagLevelOrder = function(root){

    if(!root) return [];

    const queue = [root];
    const result = [];
    let count = 0;

    while(queue.length){
        let len = queue.length;

        if(count % 2 === 0) result.push(queue.map(node => node.val))
        else result.push(queue.map(node => node.val).reverse())
        count++


        while(len--){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
    }

    return result
}

console.log(zigzagLevelOrder(root))
//____________________________________________________

var kthSmallest = function(root, k) {
    let vals = [];
  (function dfs(node) {
    if (vals.length !=k) { //no need to keep going after reach k-th number
      if(node.left) dfs(node.left); //go left first
      vals.push(node.val); //finished going left, now start adding values
      if (node.right) dfs(node.right); //if have right, go there and repeat process
    }  
  })(root) // IFFE Immediately Invoking Function Expression, starting from root.
  return vals[k-1]; //return element, but as i mentioned in the descript, don't need this full array, just the k-th elm
    
};

console.log(kthSmallest(root,1))

//---------------------------------

const kthSmallestEl = function(root,k){
    let vals = [];

    dfs(root,vals)
    
    return vals[k-1];
}

function dfs(root,vals){
    if(!root) return

    if(root.left) dfs(root.left,vals)
    vals.push(root.val)
    if(root.right) dfs(root.right,vals)
}

console.log(kthSmallestEl(root,1))

