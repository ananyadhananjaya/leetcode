let nums = [7, 8, 9, 10, 1, 2, 3, 4, 5];
let target = 9;

let left = 0,
  right = nums.length - 1;

while (left < right) {
  let mid = Math.floor((left + right) / 2);
  if (nums[mid] == target) {
    console.log("found");
    break;
  }
  if (nums[left] <= nums[mid]) {
    if (target > nums[mid] || target < nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  } else {
    if (target < nums[mid] || target > nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
