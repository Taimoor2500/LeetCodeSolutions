const maxProfit = (prices) => {
    let index = 0;
    let totalProfit = 0;
    const length = prices.length;

    while (index < length - 1) {
        while (index < length - 1 && prices[index] >= prices[index + 1]) {
            index++;
        }
        const buyPrice = prices[index];

        while (index < length - 1 && prices[index] <= prices[index + 1]) {
            index++;
        }
        const sellPrice = prices[index];

        totalProfit += sellPrice - buyPrice;
    }

    return totalProfit;
};
