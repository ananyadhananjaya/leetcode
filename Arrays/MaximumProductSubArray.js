let nums = [2, 3, -2, 4, -4];

let curMax = 1,
  curMin = 1,
  res = Math.max(...nums);

for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 0) {
    curMax = 1;
    curMin = 1;
    continue;
  }
  temp = curMax * nums[i];
  curMax = Math.max(temp, curMin * nums[i], nums[i]);
  curMin = Math.min(temp, curMin * nums[i], nums[i]);
  res = Math.max(curMax, res);
}

console.log(res);
