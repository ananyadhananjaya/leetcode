let prices = [7,1,2,3,5,6,1,10]

let profit = 0

let minS = 0

for(let i= 1; i< prices.length;i++){
    if(prices[i]< prices[minS]){
        minS = prices[i]
        
    }
    profit =   prices[i] -prices[minS]
}

console.log("Day to buy stock", minS, "we get", profit, "profit")