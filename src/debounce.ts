

// export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  
//   let timer: undefined | NodeJS.Timeout = undefined;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, wait);
//   } as T;

// }


export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  
  let debounceTimer: undefined | number = undefined;
  let executionTimer
  const setDebounceTimer = () => {
    debounceTimer = new Date().getTime();
  }
  return function(...args) {
    if (!debounceTimer) {
      setDebounceTimer();
    } else {
      const currentTime = new Date().getTime();
      if ((currentTime - debounceTimer) < wait) {
        setDebounceTimer();
      } else {
        console.log('can execute');
      }
    }
    
  } as T;

}
