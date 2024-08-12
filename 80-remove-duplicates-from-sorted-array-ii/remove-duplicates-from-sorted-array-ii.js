/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

      let j = 0; 
      let count = 0;
    for (let i = 1; i < nums.length ; i++) {
      count++;
       if(nums[i]==nums[j]&& count<2)
       {
          j++;
          nums[j] = nums[i];
       }
       else if (nums[i] !== nums[j])
       {
         j++;
          nums[j] = nums[i];
          count = 0;

       }
    }
    return j + 1;
    
};