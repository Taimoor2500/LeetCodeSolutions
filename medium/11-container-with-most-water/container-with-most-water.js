var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max_volume = 0;

    while (left < right) {
        let current_volume = (right - left) * Math.min(height[left], height[right]);
        max_volume = Math.max(max_volume, current_volume);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_volume;
};
