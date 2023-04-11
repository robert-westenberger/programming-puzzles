


export function invert() {
  
  
  Array.prototype.myMap = function(cb, thisObj) {
    const result: any[] = [];
  this.forEach((...args) => {
    const index = args[1];
    result[index] = cb.apply(thisObj, args);
  })
  return result;
  }



  const callback = (item: any, i: number, array: any[]) => {
  array.push(1);
  return item;
}
  console.log('t');
  console.log([1,2,3].myMap(callback));

}