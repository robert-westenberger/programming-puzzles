/*
Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

Versions after first bad version are supposed to be all bad versions.

notes

Inputs are all non-negative integers
if none found, return -1
Source for this  


*/

// This is a JavaScript coding problem from BFE.dev 

type IsBad = (version: number) => boolean

export function firstBadVersion(isBad: IsBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version: number): number => {
    let low = 0;
    let high = version;
    let earliestFound = Number.MAX_SAFE_INTEGER;
    // write your code to return the first bad version
    while (low <= high) {
      const mid = Math.floor((high + low) / 2);
      if (isBad(mid) && !isBad(mid - 1)) {
        return mid;
      }
      if (mid === 0 && isBad(mid)) {
        return mid;
      }
      if (mid === version && isBad(mid)) {
        return version;
      }
      if (isBad(mid)) { 
        high = mid - 1;
        continue;
      }
      low = mid + 1;
    }
    
    // if none found, return -1
    return -1;
  }
}