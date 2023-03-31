/*
You are given a string s. We want to partition the string into as 
many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the 
parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.
*/
// TODO: Implement me 
export function partitionLabels(s: string): number[] {
  console.log('s', s);
  const letterLocations = new Map();
  s.split('').forEach((letter, index) => {
    if (!letterLocations.has(letter)) {
      letterLocations.set(letter, []);
    }
    letterLocations.get(letter).push(index);
  });
  console.log(letterLocations)
  return [5];
};

// partitionLabels("ababcbacadefegdehijhklij") // [9,7,8]