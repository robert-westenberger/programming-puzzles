

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  
  let timer: undefined | NodeJS.Timeout = undefined;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  } as T;

}


