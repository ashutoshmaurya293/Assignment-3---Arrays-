var findMissing_Ranges = function(nums, lower, upper) {
    let result = [];
    let prev = lower - 1;
    for (let i = 0; i <= nums.length; i++) {
        let curr = (i < nums.length) ? nums[i] : upper + 1;
        if (prev + 1 <= curr - 1) {
            result.push(formatRange(prev + 1, curr - 1));
        }
        prev = curr;
    }
    return result;
};

function format_Range(lower, upper) {
    if (lower === upper) {
        return [lower, upper];
    } else {
        return [lower, upper];
    }
}
