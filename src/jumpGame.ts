/*
You are given an integer array nums. 
You are initially positioned at the array's first 
index, and each element in the array represents your 
maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

// bool canJump(int A[], int n) {
//     int i = 0;
//     for (int reach = 0; i < n && i <= reach; ++i)
//         reach = max(i + A[i], reach);
//     return i == n;
// }

export function canJump(nums: number[]): boolean {
  let i = 0;
  for (let reach = 0; i < nums.length && i <= reach; i++) {
    const newReach = Math.max(i + nums[i], reach);
    reach = newReach;
  }
  return i === nums.length;
};