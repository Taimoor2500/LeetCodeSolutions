var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
       if (!numSet.has(num - 1)) {  
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
