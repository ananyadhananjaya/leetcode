let arr  = [-3,3,8,0,1,-4,10,6]

let mSum  = 0
let cSum = 0

for(let i=0; i<arr.length; i++){
    cSum = cSum + arr[i]
    if(cSum > mSum){
        mSum = cSum
    }
    if(cSum < 0){
        cSum = 0
    }
}

console.log(mSum) 
//kadane's Algo