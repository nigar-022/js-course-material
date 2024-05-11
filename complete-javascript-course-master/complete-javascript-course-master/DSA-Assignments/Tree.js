var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  } // p and q both are null
  if (!p || !q || p.value !== q.value) {
    return false
  } // if any one p or q is null and value does not match

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // child node recursively
};

console.log(isSameTree([1, 2, 1], [1, 1, 2]));
