function furthestRoom(input) {
  let startingRoom = 0;
  let queue = [startingRoom];
  let paths = input;
  let hashmap = new Map();
  hashmap.set(startingRoom, 0);

  while (queue.length != 0) {
    let room = queue.shift();
    let i = 0;
    while (i < paths.length) {
      let path = paths[i];
      foundRoomIndex = path.findIndex((element) => element == room);
      if (foundRoomIndex >= 0) {
        let matchingRoom = path[+!foundRoomIndex];
        let matchingRoomCost = hashmap.get(matchingRoom);
        exploreCost = (hashmap.get(room) ?? 0) + 1;

        if (matchingRoomCost == undefined) {
          queue.push(matchingRoom);
          hashmap.set(matchingRoom, exploreCost);
        } else if (matchingRoomCost > exploreCost)
          hashmap.set(matchingRoom, exploreCost);

        if (room == startingRoom) {
          removeAt(paths, i);
          continue;
        }
      }
      i++;
    }
  }
  // console.log("queue", queue);
  // console.log("paths", paths);
  // console.log("map", hashmap);
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
