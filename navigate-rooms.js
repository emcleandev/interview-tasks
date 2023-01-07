function furthestRoom(input) {
  // dw I can spell, I'm just avoiding naming
  let startingRoom = 0;
  let queue = [startingRoom];
  let paths = input;
  let hashmap = new Map();
  hashmap.set(startingRoom, 0);

  while (queue.length != 0) {
    // console.log("queue-early", queue);
    let room = queue.shift();

    let i = 0;
    while (i < paths.length) {
      let path = paths[i];
      foundRoomIndex = path.findIndex((element) => element == room);
      if (foundRoomIndex >= 0) {
        let matchingRoom = path[+!foundRoomIndex];
        // console.log("foundRoomIndex", foundRoomIndex);

        // console.log(path, matchingRoom);

        let matchingRoomCost = hashmap.get(matchingRoom);
        exploreCost = (hashmap.get(room) ?? 0) + 1;

        if (matchingRoomCost == undefined) {
          // also means we havent hadded it too queue yet
          queue.push(matchingRoom);
          hashmap.set(matchingRoom, exploreCost);
        }
        // console.log("matchingCost,", matchingRoomCost + " " + exploreCost);
        else if (matchingRoomCost > exploreCost)
          hashmap.set(matchingRoom, exploreCost);

        if (room == startingRoom) {
          // console.log("ran");
          removeAt(paths, i);
          continue;
        }
      }
      i++;
    }

    // if room 0 remove path after.
  }
  console.log("queue", queue);
  console.log(paths);
  console.log(hashmap);
  let longest = 0;
  hashmap.forEach((value, key, map) => {
    longest = value > longest ? value : longest;
  });

  return longest;
}
function removeAt(array, index) {
  if (index > -1) {
    array.splice(index, 1);
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
