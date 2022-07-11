let nums = [2, 5, 7, 9, 14];
let target = 1;

let l = 0,
  r = nums.length;

while (l < r) {
  let mid = Math.floor((l + r) / 2);
  if (nums[mid] == target) {
    console.log("found");
    break;
  } else if (nums[mid] < target) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

if (l > r) console.log("not found");
