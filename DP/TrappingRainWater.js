let h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let res = [];
let left = [0];
let right = [];
let lMax = 0,
  rMax = 0;

for (let i = 1; i < h.length; i++) {
  if (h[i] > lMax) {
    lMax = h[i];
    left.push(lMax);
  } else {
    left.push(lMax);
  }
}
for (let i = h.length - 1; i >= 0; i--) {
  if (h[i] > rMax) {
    rMax = h[i];
    right.push(rMax);
  } else {
    right.push(rMax);
  }
}

right = right.reverse();

// console.log(left, right)

for (let i = 0; i < left.length; i++) {
  res.push(Math.min(left[i], right[i]) - h[i]);
}

console.log(
  "Total water",
  res.reduce((a, b) => a + b)
);

