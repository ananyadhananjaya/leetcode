const twoSum = (arr, target) => {
  const map = new Map();
  map.set(arr[0], 0);

  for (let i = 1; i < arr.length; i++) {
    const diff = target - arr[i];
    if (map.has(diff)) {
      return `The indexes are ${map.get(diff)} ${i}`;
    }
    map.set(arr[i], i);
  }

  return "No two elements add up to the target.";
};

console.log(twoSum([3,2,4], 6));
