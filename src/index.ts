// import {expect} from 'expect';
// import { kadanesRecursive4, kadanesRecursive, kadanesIterative, kadanesRecursive2, kadanesRecursive3 } from "./kadanes";
// import { flatten } from "./flatten";
// import { throttle } from "./throttle";
// import { debounce } from './debounce';
// import { curry as curryWithPlaceholder } from "./curryWithPlaceholder";
// import { memo } from "./memo";
// import { pipe } from "./pipe";
import { excludeItems } from "./improveAFunction";

const items = [
   {color: 'red', type: 'tv', age: 18}, 
   {color: 'silver', type: 'phone', age: 20},
   {color: 'blue', type: 'book', age: 17}
];

const excludes = [ 
   {k: 'color', v: 'silver'}, 
   {k: 'type', v: 'tv'}, 
];

excludeItems(items, excludes);

// const times = (y: number) =>  (x: number) => x * y;
// const plus = (y: number) => (x: number) => x + y;
// const subtract = (y: number) =>  (x: number) => x - y;
// const divide = (y: number) => (x: number) => x / y;

// const test1 = pipe([
//    times(2),
//    times(3)
// ]);
// console.log(test1(2));
// // x * 2 * 3

// const test2 = pipe([
//    times(2),
//    plus(3),
//    times(4)
// ]);
// console.log(test2(1), (1 * 2 + 3) * 4);
// (x * 2 + 3) * 4

// pipe([
//    times(2),
//    subtract(3),
//    divide(4)
// ]) 
// (x * 2 - 3) / 4

// const sum = (arg1: number, arg2: number) => {
//   return arg1 + arg2
// }

// const memoed = memo(sum, () => 'sameKey');

// memoed(1, 2) 
// // 3, func is called

// memoed(1, 2) 
// // 3 is returned right away without calling func

// memoed(1, 3)
// 4, new arguments, so func is called

// const  join = (a: number, b: number, c: number) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curryWithPlaceholder(join)
// const _ = curryWithPlaceholder.placeholder

// const t1 = curriedJoin(1, 2, 3) // '1_2_3'

// const t2 = curriedJoin(_, 2)(1, 3) // '1_2_3'
// console.log(t2);
// const t3 = curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

// console.log(t1, t2, t3);




// const testFn = (arg1: number, arg2: number) => {
//   console.log(arg1, arg2);
// }
// const debounceTest = debounce(testFn, 1);
// for (let i =0; i < 1000000; i++ ) {
//   // console.log('foo..');
//   debounceTest(Math.random(), Math.random());
// }
// run(['A@0', 'B@2', 'C@3']);
// expect(run(['A@0', 'B@2', 'C@3'])).toEqual(['A@0', 'C@3']);
// const arr = [1, [2], [3, [4]]];
// const arr2 = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
// console.log(flatten(arr2, Infinity));
// console.log(flatten(arr));
// console.log(flatten(arr, 1));
// console.log(flatten(arr, 2));
// const input2 = [-1];
// const input3 = [-1, 2, 4, -3, 5, 2, -5, 2];
// const input = [-2,1,-3,4,-1,2,1,-5,4];
// const input5 = [5,4,-1,7,8];
// const input4 = [1];
// console.log('recursive: ', kadanesRecursive(input));
// console.log('recursive variant: ', kadanesRecursive2(input));
// console.log('recursive variant 2: ', kadanesRecursive3(input));
// console.log('recursive variant 3: ', kadanesRecursive4(input));
// console.log('iterative: ', kadanesIterative(input) )
// function findLastNegativeInNonDecreasingArr(nums: number[]) {
//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((high + low) / 2);

//     if (0 > nums[mid] && 0 <= nums[mid + 1]) {
//       // if negative AND the next member of the arr is nonnegative
//       return mid;
//     }

//     if (mid === nums.length - 1 && nums[mid] < 0) {
//       // if last in the array and it's negative
//       return mid;
//     }


//     if (0 <= nums[mid]) {
//       // nums[mid] is positive

//       high = mid;

//       continue;
//     }
//     low = mid + 1;
//   }
//   return -1;
// }

// function findFirstPositiveInNonDecreasingArr(nums: number[], initLow: number) {
//   let low = initLow;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     if (0 < nums[mid] && 0 >= nums[mid - 1]) {
//       return mid;
//     }

//     if (mid === 0 && nums[mid] > 0) {
//       return mid;
//     }

//     if (0 < nums[mid]) {
//       high = mid - 1;

//       continue;
//     }
//     low = mid + 1;
//   }
//   return -1;
// }
// function maximumCount(nums: number[]) {
//   const lastNegative = findLastNegativeInNonDecreasingArr(nums);
//   const firstPositive = findFirstPositiveInNonDecreasingArr(
//     nums,
//     lastNegative + 1
//   );
//   const negCount = lastNegative >= 0 ? lastNegative + 1 : 0;
//   const posCount = firstPositive >= 0 ? nums.length - firstPositive : 0;
//   return Math.max(negCount, posCount);
// }

// const t0 = [-2, -1, -1, 1, 2, 3];
// const t1 = [-3, -2, -1, 0, 0, 1, 2];
// const t2 = [5, 20, 66, 1314];
// console.log("tt..");
// console.log("1...", maximumCount(t0));
// console.log("2", maximumCount(t2));
// console.log("3", maximumCount(t1)); // expects 3
