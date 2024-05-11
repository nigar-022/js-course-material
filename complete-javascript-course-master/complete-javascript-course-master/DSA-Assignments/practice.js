const rotate = function (matrix) {
    for(let r = 0 ; r <matrix.length; r++) {
        for(let c = r; c<matrix[0].length;c++) {
            [matrix[c][r],matrix[r][c]] = [matrix[r][c],matrix[c][r]]
        }
    }

    for(let row of matrix) {
        row.reverse()
    }

    return matrix
}


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))


const rotateArray = function (nums,k) {

    // k = k % nums.length; 

    // nums.unshift(...nums.splice(nums.length - k))

    // for(let i = 0 ; i < k ; i++) {

    //     nums.unshift(nums.pop())

    // }
    // return nums



    k = k % nums.length;
    nums.reverse()


    reverseNums(nums,0, k - 1)
    reverseNums(nums,k,nums.length - 1)

    return nums

}

const reverseNums = function (start,end) {

    while(start < end) {
        [nums[end],nums[start]]=[nums[start],nums[end]]
        start++
        end--
    }

}
console.log(rotateArray([1,2,3,4,5,6,7],9))



