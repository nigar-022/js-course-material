// const intersect = function(nums1,nums2) {
//     const map = new Map();
//     for(const n of nums1) {
//     if(map.has(n)) {
//             map.set(n,map.get(n) + 1);
    
//     } else {
//         map.set(n,1);
    
//     }
    
//     }
    
//     const result = [];
//     for(const n of nums2){
//     if(map.has(n) && map.get(n) > 0){
//     result.push(n);
//     map.set(n, map.get(n) - 1)
    
//     }
    
//     }
    
//     return result
    
//     } 

//     console.log(intersect([1,2,2,1],[2,2]))
//_____________________________________________________________________________________________________

const containDuplicate = function (nums) {
    const set = new Set();
   for(let i=0;i<nums.length;i++){
       if(set.has(nums[i])) return true
       else set.add(nums[i])

}

return false


}

console.log(containDuplicate([1,2,3,1]))

// for of 

// const containDuplicate = function (nums) {
//     const set = new Set();
//    for(const n of nums){
//        if(set.has(n)) return true
//        else set.add(n)

// }

// return false


// }

// console.log(containDuplicate([1,2,3,1]))

//__________________________________________________________________________________________


const singleNumber = function(nums) {
	const uniqueSet = new Set();
	for(let i=0;i<nums.length;i++) {
		if(uniqueSet.has(nums[i])){
			uniqueSet.delete(nums[i])
} else {
	uniqueSet.add(nums[i])



}


}

return Array.from(uniqueSet)[0]




}

console.log(singleNumber([2,2,1]))
//___________________________________________________________________________________________________

const rotate = function(nums,k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k))
    return nums
    
    }
    
console.log(rotate([1,2,3,4,5,6],3))

//__________________________________________________________________

const removeDuplicate = function(nums) {
    let unique = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== nums[i+1]){
            nums[unique]=nums[i];
            unique++
        
    }
    
    }
    
    nums.length = unique;
    return unique
    
    
    }
    
    console.log(removeDuplicate([1,1,2]))
    // ________________________________________________________________________________


    
const maxProfit = function(prices){
    let profit = 0;
    
    for(let i=0;i<prices.length;i++){
    const[priceYesterday,priceToday] = [prices[i-1],prices[i]];
    
    if(priceYesterday < priceToday){
        profit += priceToday - priceYesterday
    }
    
    
    
    }
    
    return profit
    
    }
console.log(maxProfit([7,1,5,3,6,4]))

//___________________________________________________________________________________

const plusOne = function(digits){
	for(let i=digits.length-1;i>=0;i--){
		if(digits[i] < 9){
			digits[i] = digits[i]+1;
			return digits;


    } else {
	digits[i] = 0

    }

    }

digits.unshift(1);
return digits

}

console.log(plusOne([9]))

//___________________________________________________________________________________


const movezeros = function(nums){

    let index =0;
    
    for(let i=0;i<nums.length;i++){
        const num = nums[i];
        
        if(num !== 0){
        nums[index]=num;
        index++
    
    }
    
    
    }
    
    
    for(let i=index; i< nums.length;i++){
        nums[i] = 0;
    }
    
    return nums
    
}
console.log(movezeros([0,1,0,3,12]))   

//_________________________________________________________________

const rotati = function(matrix){
    for(let r=0;r<matrix.length;r++){
    for(let c = r; c<matrix[0].length;c++){
    [matrix[r][c],matrix[c][r]]=[matrix[c][r],matrix[r][c]]
    
    
    }
    
    
    }
    
    for(let row of matrix){
    
    
    row.reverse()
    }
     return matrix
}
console.log(rotati([[1,2,3],[4,5,6],[7,8,9]]))

//________________________________________________________________________

const twoSum = function(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
    let value = nums[i];
    let complementPair = target - value;
    
    if(map[complementPair] !== undefined){
    
    return [map[complementPair],i]
    
    } else{
    
    map[value] = i
    
    
    }
    
    
    
    }
    
    
    }
    console.log(twoSum([2,7,11,15],9))    


    //________________________________________________________________

    const isValidSudoku = function(board){
        for(let i=0;i<9;i++) {
        let row = new Set(),
        col = new Set(),
        box=new Set();
        
        for(let j=0;j<9;j++) {
        let rowCell = board[i][j];
        let colCell = board[j][i];
        let boxCell = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
        
        if(rowCell !== '.') {
        if(row.has(rowCell)) return false
        row.add(rowCell);
        }
        
        if(colCell !== '.'){
        
        if(col.has(colCell)) return false
        col.add(colCell);
        }
        
        if(boxCell !== '.'){
        
        if(box.has(boxCell)) return false
        box.add(boxCell);
        
        
        }
        
        
        
        }
        
        }
        

        return true
        }


    console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))

        
    