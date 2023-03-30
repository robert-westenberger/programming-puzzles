/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

export function missingNumber(nums: number[]): number {
  let xor = 0, i = 0;
	for (i; i < nums.length; i++) {
    const nextXor = xor ^ i ^ nums[i];
		xor = nextXor;
	}

	return xor ^ i;
};