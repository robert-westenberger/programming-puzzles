export function kadanesRecursive(arr: number[], index =0, localSum = 0, globalSum = Number.MIN_SAFE_INTEGER): number {
  if (index === arr.length  ) { // last index in the arr..
    return globalSum;
  }
  if (arr[index] >= arr[index] + localSum) { // if we are starting at a new index..
    return kadanesRecursive(arr, index + 1, arr[index], Math.max(globalSum, arr[index]));
  }

  // we are continuing the subarray.
  return kadanesRecursive(arr, index + 1, arr[index] + localSum, Math.max(globalSum, arr[index] + localSum));
}

export function kadanesRecursive4(nums: number[]) {
  let globalSum = nums[0];
  function helper(nums: number[], numsLength: number) {
    if (numsLength === 1) {
      return nums[0];
    }
    const currentMax = Math.max(nums[numsLength-1], helper(nums, numsLength - 1) + nums[numsLength - 1]);
    globalSum = Math.max(globalSum, currentMax);
    return currentMax;
  }

  helper(nums, nums.length);
  return globalSum;
}




export function kadanesRecursive2(arr: number[], index =0, localSum = 0, globalSum = Number.MIN_SAFE_INTEGER): number {
  if (index === arr.length) {
    return globalSum;
  }

  const sum = Math.max(arr[index], arr[index] + localSum);
  return kadanesRecursive2(arr, index + 1, sum, Math.max(globalSum, sum));
}



export const kadanesRecursive3 = (arr: number[], index =0, localSum = 0, globalSum = Number.MIN_SAFE_INTEGER): number => index === arr.length ? globalSum : kadanesRecursive3(arr, index + 1, Math.max(arr[index], arr[index] + localSum), Math.max(globalSum, Math.max(arr[index], arr[index] + localSum)));
export function kadanesIterative(nums: number[]) {
  let local = 0;
  let global = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++){
    local = Math.max(nums[i], local + nums[i]);
    global = Math.max(local, global);
  }
  return global;
}