type nestedArr = any[]


export function flatten(arr: nestedArr , depth = 1): nestedArr {
  if (depth === 0) {
    return arr;
  }
  let encounteredArray = false;
  const newArr = arr.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      encounteredArray = true;
      return [...prev, ...curr];
    }
    return [...prev, curr];
  }, []);

  if (!encounteredArray && !isFinite(depth)) {
    return newArr;
  }
  return flatten(newArr, depth - 1);
}
//flatten([1,[2],[3,[4]]]);

//flatten([1,[2],[3,[4]]], 1);  

//flatten([1,[2],[3,[4]]], 2);  

//flatten([1,2,[3,4,[5,6,[7,8,[9,10]]]]], Infinity)  