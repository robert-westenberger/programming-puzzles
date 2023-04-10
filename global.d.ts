declare module '@datastructures-js/priority-queue';


declare interface Array<T> {
  myMap<U>(callbackfn: (
    value: T,
    index: number, array: T[]) => U, thisArg?: any): U[];
}