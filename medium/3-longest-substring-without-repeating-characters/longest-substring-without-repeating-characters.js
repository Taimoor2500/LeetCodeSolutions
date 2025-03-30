/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

if(s.length == 1)
{
    return 1
}
    let left = 0;

    let count = 0;
    const mySet = new Set();

    for (let i = 0; i < s.length; i++) {
        while (mySet.has(s[i])) {
            mySet.delete(s[left]);
            left++;
        }
        mySet.add(s[i]);
        count = Math.max(count,mySet.size);
    }
    return count;

};