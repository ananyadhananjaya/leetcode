let prices = [7, 9, 1, 2, 3, 5, 6, 1, 10, 1];

let profit = 0,
  buy = 0,
  sell = 0;

for (let i = 1; i < prices.length; i++) {
  if (prices[i] < prices[buy]) {
    buy = i;
  }
  if (prices[i] - prices[buy] > profit) {
    sell = i;
    profit = prices[i] - prices[buy];
  }
}

console.log("You will buy on", buy, "sell on", sell, "to get", profit);

//Get buy date, sell date with profit 
