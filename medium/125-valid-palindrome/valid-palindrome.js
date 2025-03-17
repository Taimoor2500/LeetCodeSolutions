/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let p1 = 0;
    let arr = [];
    s = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (/[a-z0-9]/.test(s[i])) {
            arr.push(s[i]);
        }
    }

    let p2 = arr.length - 1;

    while (p1 < p2) {
        if (arr[p1] !== arr[p2]) {  
            return false;
        }
        p1++;
        p2--;
    }

    return true;
};
