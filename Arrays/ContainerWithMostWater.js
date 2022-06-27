let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let ans = 0;

let lf = 0,
  rf = arr.length - 1;

while (lf < rf) {
  ans = Math.max(ans, Math.min(arr[lf], arr[rf]) * (rf - lf));
  arr[lf] <= arr[rf] ? lf++ : rf--;
}

console.log("Result: ", ans);
