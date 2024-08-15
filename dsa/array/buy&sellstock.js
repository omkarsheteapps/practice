
function maxProfit(prices){
    let buy = prices[0];
    prices[0] = 0;
    let profit = 0;
    for(let i=1;i<prices.length-1;i++){
        if(prices[i] < buy){
            buy = prices[i];
            prices[i] = 0;
        }else{
            profit = Math.max(prices[i]-buy, profit)
        }
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))