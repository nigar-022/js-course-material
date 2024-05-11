

const arr = [1,2];

const result = arr.reduce(((prevoiusValue,currentValue) => prevoiusValue + currentValue),1);
console.log(result)


Array.prototype.myreduce = function(myReducer,initialValue){

        //myReducer();

        let prevoiusValue = initialValue !==undefined ? initialValue : 0;

        for(let  i =0 ; i< this.length ; i++){
            // console.log(arr[i])

            prevoiusValue = myReducer(prevoiusValue,this[i])
           
        }

        return prevoiusValue;    
        
};

function myReducer(a,b) {
    return a + b;
}


console.log([5,6].myreduce(myReducer));