
// This is a JavaScript coding problem from BFE.dev 

interface Curry {
  (fn: (...args: any[]) => any) : (...args: any[]) => any,
  placeholder: Symbol
}

export const curry: Curry = (fn) => {
  return function curried(...args: any) {
    const complete = args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder);

    if(complete){
      return fn(...args);
    } 
    return function(...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map( (arg: any) => {
        const currentExaminedArgIsPlaceholder = arg === curry.placeholder;
        const thereExistsANewarg = newArgs.length;
        console.log(`currentArgIsPlaceholder: ${currentExaminedArgIsPlaceholder}. Theres a newarg: ${thereExistsANewarg}`);
        if (currentExaminedArgIsPlaceholder && thereExistsANewarg) {
          console.log('We are shifting newargs...');
          return newArgs.shift();
        }
        console.log('we are returning arg..');
        return arg;
      });
      return curried(...res, ...newArgs);
    }
  } as Curry;
}


curry.placeholder = Symbol()


