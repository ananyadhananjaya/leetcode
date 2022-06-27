let arr = [2,7,11,15]
let target = 9

let dict = {}

for(let i=0; i< arr.length; i++){
    let diff = target - arr[i]
    if(dict[diff] !== undefined){
        console.log(dict[diff], i)
    }
    else{
        dict[arr[i]] = i;
    }   
}

