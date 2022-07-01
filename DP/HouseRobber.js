let nums = [2,7,9,3,1]
let dp = [0,nums[0]]

for(let i=1; i< nums.length; i++){
    dp[i+1] = Math.max(dp[i], dp[i-1]+nums[i])
}

console.log("Result is: ", dp[nums.length])