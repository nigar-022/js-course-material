let arr2 = [{id:5},{id:6},{id:5},{id:7},{id:6}]


const flattenObj = function(arr) {
    const outputArr = {};

    Object.keys(arr).forEach(key => {
        if(typeof arr[key] === 'object') {
            //outputArr[key] = flattenObj(arr[key])
            temp = flattenObj(arr[key])

            for(const j in temp) {
                outputArr[key +'.'+ j] = temp[j]
            }
        } else{
            outputArr[key] = arr[key]
        }

    })

return outputArr
}

console.log(flattenObj(arr2))

const arr = ["mon", "tues", ["wed", "thurs", ["fri", "sat"]], "sun"] ;
console.log(arr.flat(3))

console.log(arr.flatMap((el) => el).flat(3))
