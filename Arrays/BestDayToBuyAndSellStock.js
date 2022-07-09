let prices = [10, 15, 1, 5, 3];

let profit = 0,
  buy = 0,
  sell = 1,
  buyDay = 0,
  sellDay = 0;

while (sell < prices.length) {
  if (prices[buy] < prices[sell] && prices[sell] - prices[buy] > profit) {
    profit = prices[sell] - prices[buy];
    buyDay = buy
    sellDay = sell
  } else {
    buy = sell;
  }
  sell += 1;
}

console.log("You will buy on", buyDay, "sell on", sellDay, "to get", profit);

//Get buy date, sell date with profit
