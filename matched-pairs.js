function countUnpaired(input) {
  // O(n) | idea: lovesMeLovesMeNot hashity mapity
  let map = new Map();
  input.forEach((num) => {
    let isExisting = map.has(num); // check if has love
    if (isExisting) map.delete(num); // loves me not
    else map.set(num, true); // loves me
  });
  console.log(map);
  return map.size;
}
// Tests
const testscript1 = () => {
  console.log(countUnpaired([1, 2, 3, 4]));
  console.log(countUnpaired([1, 1, 2, 2, 3, 3, 4, 4]));
  console.log(countUnpaired([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
  console.log(countUnpaired([4, 3, 2, 1, 3, 2, 1, 2, 1, 1]));
};

const run = testscript1;
run();

// Task Description
/* Q1: Matched pairs
 *
 * You have a list of numbers. Write a function which takes the list (either as a list or array, depending on your choice of language) as an input, and returns a count of how many numbers can not be paired up with another identical number in the list. Each element in the list can only be a member of a single pair - if we have three elements the same, two of those can pair with each other, leaving the third unpaired.
 *
 * e.g.
 *   [1,2,3,4] returns 4 (1,2,3,4 can’t be paired)
 *   [1,1,2,2,3,3,4,4] returns 0 (all numbers can be paired)
 *   [1,2,2,3,3,3,4,4,4,4] returns 2 (the 1 and one of the 3s can’t be paired)
 *   [4,3,2,1,3,2,1,2,1,1] returns 2 (the 4 and one of the 2s can’t be paired)
 */
