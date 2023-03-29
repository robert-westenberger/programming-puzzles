/**
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

Could you write your own all() ? which should works the same as Promise.all()

note: Do not use Promise.all() directly, it is not helping
 */

/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
export function all(promises: any[]) {
  return new Promise((resolve, reject) => {
    const result: any[] = [];

    if (promises.length === 0) {
      resolve(result);
      return;
    }

    let pendingPromiseCount = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        result[index] = value;
        pendingPromiseCount--;
        if (pendingPromiseCount === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
}