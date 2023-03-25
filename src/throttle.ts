export function throttle<T extends (...args:any[]) => any>(func: T, wait: number): T {
  let throttled = false;
  let capturedArguments: any = null;
  return function(...args) {
    if (throttled) {
      capturedArguments = args;
    } else {
      func(...args);
      throttled = true;
      const timeout = () => setTimeout(() => {
        throttled = false;
        if (capturedArguments) {
          func(...capturedArguments);
          throttled = true;
          capturedArguments = null;
          timeout();
        }
      }, wait);
      timeout();
    }
  } as T;
}

