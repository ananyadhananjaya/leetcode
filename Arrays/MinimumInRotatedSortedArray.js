
let nums = [7, 8, 9, 3, 4];

let start = 0, end = nums.length-1;

while(start < end){
    if(nums[start] < nums[end]){
        break;
    }

    let mid = Math.floor((start+end)/2)
    if(nums[mid]>= nums[start]){
        start = mid+1
    }else{
        end = mid
    }
}

console.log("Min is:", nums[start])