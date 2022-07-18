let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
nums.sort((a, b) => a - b);
let res = [];
for (let i = 0; i < nums.length; i++) {
  if (i > 0 && nums[i] == nums[i - 1]) {
    continue;
  }
  let l = i + 1,
    r = nums.length - 1;
  while (l < r) {
    threeSum = nums[l] + nums[r] + nums[i];
    if (threeSum === 0) {
      res.push([nums[i], nums[l], nums[r]]);
      l += 1;
      while (nums[l] == nums[l - 1]) {
        l += 1;
      }
    } else if (threeSum < 0) {
      l += 1;
    } else {
      r -= 1;
    }
  }
}

console.log(res);
