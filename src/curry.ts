export function curry(fn: Function) {
  return function curriedFn(...args: any) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...partial: any) {
        return curriedFn(...args, ...partial);
      }
  }
}