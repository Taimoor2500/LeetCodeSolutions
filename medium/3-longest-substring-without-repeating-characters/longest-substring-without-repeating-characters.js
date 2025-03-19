var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let length = 0;
    let left = 0;
    let seen = new Set(); 

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) { 
            seen.delete(s[left]); 
            left++; 
            length--; 
        }

        seen.add(s[right]); 
        length++; 
        max = Math.max(max, length);
    }

    return max;
};
