/**
 * Given an array nums of n integers where nums[i] is 
 * in the range [1, n], return an array of all the integers 
 * in the range [1, n] that do not appear in nums.
 * 
 */

interface ExistingNumbersMap {
  [key: number]: true
}
function findDisappearedNumbers(nums: number[]): number[] {
  const map: ExistingNumbersMap = {};
  const answer = [];
  nums.forEach(num => {
    map[num] = true;
  });
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      answer.push(i);
    }
  }
  return answer;
};

export function findDisappearedNumbersProblem() {
  const answerOne = findDisappearedNumbers([4,3,2,7,8,2,3,1]); // [5, 6] 
}