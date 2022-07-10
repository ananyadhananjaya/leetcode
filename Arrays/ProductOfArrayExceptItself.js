let nums = [2, 3, 1, 4];

let n = nums.length;

let res = [1];

for(let i=1; i< n; i++){
    res[i] = nums[i-1] * res[i-1]
}

let right = 1;

for(let i= n-1; i>=0; i--){
    res[i] *= right
    right *= nums[i]
}

console.log(res);
