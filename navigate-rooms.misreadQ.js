function ffurthestRoom(input) {
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

function furthestRoom(input) {
  let firstPerm = [0];
  firstPerm.mapState = input.slice();
  var listOfPerms = [firstPerm];
  // path - quickest route
  i = 0;
  //perfrom(0);
  //return listOfPerms;
  while (i < listOfPerms.length) {
    perform(i);
    if (listOfPerms[i].isExhausted) i++;
    // remove all items in  all perm.last.
  }
  return listOfPerms;
  // In map, remove all instances of current room, to locate adjacent rooms and paths
  function perform(indexOnPerms) {
    let perm = listOfPerms[indexOnPerms];
    console.log(indexOnPerms + "-[perm/before]", perm);

    let instance = perm[perm.length - 1];
    let mapState = perm.mapState;
    let isExhausted = true;
    let adjacentRooms = [];
    let i = 0;
    while (i < mapState.length) {
      var connection = mapState[i];
      if (connection.includes(instance)) {
        // find a connecting room : note adjacent room and remove from map
        isExhausted = false;
        removeItem(connection, instance);
        adjacentRooms.push(connection[0]);
        removeAt(mapState, i);
      } else i++;
    }

    /* if notExhausted: 
       iupdateListOfPerms - add permutations, each sharing a copy of state and update of state/isExhausted
    */
    if (isExhausted) perm.isExhausted = true;
    else {
      let isFirst = true;
      adjacentRooms.forEach((element) => {
        if (isFirst) {
          perm.push(element);
          isFirst = false;
        } else {
          let newPerm = perm.slice();
          newPerm[newPerm.length - 1] = element;
          newPerm.mapState = perm.mapState.slice();
          //todo I need to Slice again somewhere Idk
          console.log(listOfPerms.length - 1 + "-[new-perm]", newPerm);
          listOfPerms.push(newPerm);
        }
      });
    }
    console.log(indexOnPerms + "-[isExhausted]", isExhausted);
    console.log(indexOnPerms + "-[perm]", perm);
    console.log(indexOnPerms + "-[adjacentRooms]", adjacentRooms);
    console.log(indexOnPerms + "-[mapState]", mapState);
    return isExhausted;
  }
}

function removeItem(array, value) {
  const index = array.indexOf(value);
  removeAt(array, index);
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
  a = [1, 2];
  a.name = "me";
  console.log(a.name);
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
