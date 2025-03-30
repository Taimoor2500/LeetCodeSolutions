var characterReplacement = function (s, k) {
    let charCount = new Map();
    let left = 0;
    let maxFreq = 0; 
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, charCount.get(s[right]));

        while ((right - left + 1) - maxFreq > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            left++; 
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
