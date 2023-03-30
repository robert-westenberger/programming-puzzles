/*
Given two integer arrays nums1 and nums2, 
return an array of their intersection. Each element in the 
result must be unique and you may return the result in any order.


*/
export function intersection(nums1: number[], nums2: number[]): number[] {
  const hash = new Map();
  const intersections = new Set<number>();
  nums1.forEach((num) => {
    if (!hash.has(num)) {
      hash.set(num, true);
    }
  });
  nums2.forEach(num => {
    if (hash.has(num)) {
      intersections.add(num);
    }
  })
  return Array.from(intersections);
};