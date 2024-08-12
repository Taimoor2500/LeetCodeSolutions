/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    majority = nums[0];
    count = 1;

    for (let i = 0; i<nums.length;i++)
    {
       if(nums[i]==majority)
       {
        count++;
       }
       else
       {
        count--
        if(count == 0)
        {
            majority  = nums[i]
            count = 1;
        }
       }

    }
    return majority
   
};