/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let words = [];
    let k = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            words[k] = s[i];
            k++;
        }
    }

    words.reverse();

    let result = "";
    let vowelIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            result += words[vowelIndex];
            vowelIndex++;
        } else {
            result += s[i];
        }
    }

    return result;
};
