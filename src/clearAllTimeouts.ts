// @ts-nocheck
/*
window.setTimeout() could be used to schedule some task in the future.

Could you implement clearAllTimeout() to clear all the timers ? This might be useful when we want to clear things up before page transition.

For example


setTimeout(func1, 10000)
setTimeout(func2, 10000)
setTimeout(func3, 10000)

// all 3 functions are scheduled 10 seconds later
clearAllTimeout()

// all scheduled tasks are cancelled.
note

You need to keep the interface of window.setTimeout and window.clearTimeout the same, but you could replace them with new logic
*/

window.timeouts = new Map();
const _setTimeout = window.setTimeout;

window.setTimeout = (cb, timeout, ...args) => {
  const test = _setTimeout(cb, timeout, ...args);
  window.timeouts.set(cb, test);
  return test;
}


/**
 * cancel all timer from window.setTimeout
 */
export function clearAllTimeout() {
  window.timeouts.forEach(timeout => {
    window.clearTimeout(timeout);
  })
  // your code here
}