/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    max_candies = 0;

    for(let i = 0; i < candies.length; i++)
    {
        if(candies[i]>= max_candies)
        {
            max_candies = candies[i];
        }
    }

    const booleanArray = [];


    for(let i = 0; i < candies.length; i++)
    {
        if(candies[i]+extraCandies >= max_candies)
        {
            booleanArray[i] = true;
        }
        else
        {
            booleanArray[i] = false;
        }
    }

    return booleanArray;
    
};