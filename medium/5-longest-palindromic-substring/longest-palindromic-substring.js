/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLength = 0;
    let longestSubstr = "";

    function isPalindrome(s, start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) { 
            if (isPalindrome(s, i, j) && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
                longestSubstr = s.substring(i, j + 1);
            }
        }
    }

    return longestSubstr;
};
