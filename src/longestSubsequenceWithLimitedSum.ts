export function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a-b);
  const indexSums: number[] = [nums[0]];


  for (let i = 1; i <= nums.length - 1; i++ ) {
    indexSums[i] = nums[i] + indexSums[i -1];
  }
  
  return queries.map(query => {
    let low = 0;
    let high = indexSums.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (indexSums[mid] <= query && indexSums[mid+1] > query) {
        return mid + 1;
      }
      if (mid === 0 && indexSums[mid] <= query && indexSums[mid + 1] > query) {
        return mid + 1;
      }
      if (mid === indexSums.length - 1 && indexSums[mid] <= query) {
        return indexSums.length;
      }
      if (indexSums[mid] > query) {
        high = mid-1;
        continue;
      }
      low = mid + 1;
    }
    return 0;
  });
};