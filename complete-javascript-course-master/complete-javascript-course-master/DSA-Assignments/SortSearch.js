const merge = function(nums1,m,nnums2,n){
    let first = m-1;
    let second = n-1;
    let i= nums1.length -1;

    while(second >=0){
        let fVal = nums1[first];
        let sVal = nums2[second];
        if(fVal > sVal){
            nums1[i] = fVal;
            i--;
            first--;
        }else{
            nums1[i] = sVal;
            i--;
            second--
        }
    }
}

//_______________________________________________

function isBadVersion(num){
    if(num >= 4){
        return true
    }
}

const solution = function(isBadVersion){
    return function(n){
        let start = 1;
        let end =n;
        while(start <= end){

            let mid = Math.floor((start + end )/2);
            if(isBadVersion(mid)){
                // bad version found loop for left for more bad version
                end = mid -1;

            } else{
                start = mid+1;
            }
        }
        return start
    }
   

}

console.log(solution(isBadVersion)(5))