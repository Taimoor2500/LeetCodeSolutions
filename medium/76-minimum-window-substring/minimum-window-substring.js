/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    if (s.length < t.length) return "";

    let charCount = new Map();
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let left = 0, minLen = Infinity, minStart = 0;
    let required = charCount.size, formed = 0;
    let windowCounts = new Map();

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (charCount.has(char) && windowCounts.get(char) === charCount.get(char)) {
            formed++;
        } //now i know t is whole

        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

            if (charCount.has(leftChar) && windowCounts.get(leftChar) < charCount.get(leftChar)) {
                formed--;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};
