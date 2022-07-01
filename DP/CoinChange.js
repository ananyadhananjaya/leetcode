let coins = [1, 2, 5];
let amount = 11;
let max = amount + 1;
let dp = [0];
for (let i = 1; i <= amount; i++) {
  dp.push(amount);
}
for (let i = 1; i <= amount; i++) {
  for (let j = 0; j < coins.length; j++) {
    if (coins[j] <= i) {
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      console.log(dp);
    }
  }
}
console.log(dp);
