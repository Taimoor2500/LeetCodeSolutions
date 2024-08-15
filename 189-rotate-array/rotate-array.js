/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

  
 
       reverse(nums, 0, nums.length - 1);

       reverse(nums,0,k%nums.length-1)

       reverse(nums,k%nums.length,nums.length-1)

};

var reverse = function (nums, start, end) {
    let temp;
    let j = end;
    while (start <= end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;

    }

};