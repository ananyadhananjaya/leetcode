let prices = [10, 3, 15, 1, 5, 3];

let l = 0,
  r = 1,
  buy = 0,
  sell = 0,
  profit = 0;

while(r< prices.length){
    if(prices[l] < prices[r] && prices[r] - prices[l] > profit){
        profit = prices[r] - prices[l]
        buy = l
        sell = r
    }
    else{
        l = r
    }
    r+=1
}

console.log("You will buy on", buy, "sell on", sell, "to get", profit);

//Get buy date, sell date with profit
