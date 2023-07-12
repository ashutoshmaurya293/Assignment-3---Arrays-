function smallest_Range(nums, k) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const newMin = Math.max(min + k, max - k);
    const newMax = Math.min(max - k, min + k);
    return newMax - newMin;
  }
