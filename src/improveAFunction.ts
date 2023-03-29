// @ts-nocheck
/*
// Given an input of array, 
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 

function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })
  return items
} 

1. What does this function excludeItems do?
excludeItems allows you to specify exclude objects
which contains metadata about which items in an 
array of objs should be excluded. 
2. Is this function working as expected ?
No, it's making the wrong comparison. item[pair.v] is always undefined.
3. What is the time complexity of this function? n^2
4. How would you optimize it ?
*/



/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */

// export function excludeItemsUnoptimized(items, excludes) {
//   excludes.forEach( pair => { 
//     items = items.filter(item => {
//       return item[pair.k] !== pair.v;
//     });
//   });
//   return items;
// }

export function excludeItems(items, excludes) {
  let map = new Map();
  let exclude_keys = new Set();
  
  excludes.forEach(({k,v})=>{
    exclude_keys.add(k);
    if(!map.has(k)){
      map.set(k,new Set());
    }
    map.get(k).add(v);
  })

  return items.filter(item=>{
    return [...exclude_keys].every(ex_key=>{
      return !map.get(ex_key).has(item[ex_key])
    })
  });
}