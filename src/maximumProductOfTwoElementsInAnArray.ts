import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
/*
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
*/
export function maxProduct(nums: number[]): number {


  const maxPriorityQueue = new MaxPriorityQueue<number>();

  nums.forEach(num => {
    maxPriorityQueue.enqueue(num);
  });
  const val1 = maxPriorityQueue.dequeue();
  const val2 = maxPriorityQueue.dequeue();
  return ((val1 -1) * (val2 - 1));
};