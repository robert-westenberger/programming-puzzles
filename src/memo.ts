

export function memo<T extends (...args: any[]) => any>(func: T, resolver: (...args: Parameters<T>) => string = (...args) => args.join(' ')): T {
  const store = new Map();
  return function memoed(...args: Parameters<T>) {
    const cacheKey = resolver(...args);
    if (store.has(cacheKey)) {
      return store.get(cacheKey);
    }
    // @ts-ignore
    const val = func.apply(this, args);
    store.set(cacheKey, val);
    return val;
  } as T;
}

