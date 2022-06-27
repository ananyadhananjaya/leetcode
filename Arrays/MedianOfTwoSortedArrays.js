let nums1 = [3];
let nums2 = [-2, -1];

let mergedNums = nums1.concat(nums2).sort((a,b)=> a-b)

if(mergedNums.length % 2 !=0){
    let index = mergedNums.length / 2
    console.log("Result: ",mergedNums[Math.floor(index)])
}else{
    let index = mergedNums.length / 2
    console.log(("Result: ",mergedNums[index] + mergedNums[index-1])/2)
}