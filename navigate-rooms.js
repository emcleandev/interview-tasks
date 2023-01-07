function furthestRoom(input) {
  // P.s. I assumed the graph approach wasn't deserible by the data structure so...
  // idea is to build all paths till the

  // map of routes
  // listOfList of paths
  var map = {};
  // path - quickest route
  quickestRouteBetween(a, b);

  function quickestRouteBetween(a, b) {
    hashmap;
  }
}
// Tests
const testscript1 = () => {
  /*
    each record needs to store its path, 

    if has CurrentNode, remove. then take arr[0] since its only 1 element.
      then build path 0-1 (having removed all 0s)
      then go again with currentNode being 

  */
  console.log(
    furthestRoom([
      [0, 1],
      [1, 2],
      [1, 3],
      [2, 4],
      [4, 5],
      [3, 4],
    ])
  );
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
