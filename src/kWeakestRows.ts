import { PriorityQueue } from "./utils";
/*
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

*/

interface RowData {
  row: number[];
  index: number;
}

// FIXME: This is broken.
export function kWeakestRows(mat: number[][], k: number): number[] {
  const answer: number[] = [];
  const rowQueue = new PriorityQueue<RowData>((a, b) => {
    // TODO: Convert to binary search
    return a.row.filter(val => val === 1).length > b.row.filter(val => val === 1).length;
  });
  mat.forEach((row, index) => {
    rowQueue.push({row, index});
  });
  for (let i = 0; i < k; i++) {
    answer.push(rowQueue.pop().index);
  }
  return answer;
};