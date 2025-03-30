/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let left = 0;
    let s1_map = new Map();
    
    for (let char of s1) {
        s1_map.set(char, (s1_map.get(char) || 0) + 1);
    }
    
    let s2_map = new Map();

    for (let right = 0; right < s2.length; right++) {
        s2_map.set(s2[right], (s2_map.get(s2[right]) || 0) + 1);

        if (right - left + 1 > s1.length) {
            s2_map.set(s2[left], s2_map.get(s2[left]) - 1);
            if (s2_map.get(s2[left]) === 0) {
                s2_map.delete(s2[left]);
            }
            left++;
        }

        if (areMapsEqual(s1_map, s2_map)) {
            return true;
        }
    }

    return false;
};

function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    
    return true;
}
