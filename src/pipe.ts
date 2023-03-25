

type Func = (arg: any) => any

export function pipe(funcs: Array<Func>): Func {
  
  return function pipedFn(...args) {
    let val = args[0];
    funcs.forEach(func => {
      val = func(val);
    });
    return val;
  }
}

