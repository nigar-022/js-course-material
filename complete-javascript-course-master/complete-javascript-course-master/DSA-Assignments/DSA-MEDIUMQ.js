//Remove Duplicates from Sorted Array II
/*
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3589635/js-ts-2-simple-solutions-100-explained-and-commented/

const removeDuplicates = function(nums){

    if(!nums.length) return 0

    let k = 0 ;

    for(let i =0 ;i< nums.length;i++){
        if(k < 2 || nums[i] !== nums[k-2]) {
            nums[k] = nums[i];
            k++
        }
    }

    return k

}

console.log(removeDuplicates([1,1,1,2,2,3]))

//Time complexity:
// O(n)

// Space complexity:
// O(1)