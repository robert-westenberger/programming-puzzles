// @ts-nocheck

/*
We have Map in es6, so we could use any data as key, such as DOM element.

const map = new Map()
map.set(domNode, somedata)
What if we need to support old JavaScript env like es5, how would you create your own Node Store as above?

You are asked to implement a Node Store, which supports DOM element as key.

Map is disabled when judging your code, it is against the goal of practicing.

You can create a simple general Map polyfill. Or since you are asked to support specially for DOM element, what is special about DOM element?

What is the Time / Space cost of your solution?
*/

export class NodeStore {
   /**
   * @param {Node} node
   * @param {any} value
   */

  store = {};
  set(node, value) {
    this.store[node] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store[node];
  }
  
  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.store.hasOwnProperty(node);
  }
}