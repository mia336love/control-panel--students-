arr = [
  { name: "uuuuu", age: 15 },
  { name: "bbbbbbb", age: 17 },
  { name: "ddddd", age: 19 },
  { name: "aaaaa", age: 23 },
];

// function sortUsers(array, objProperty, direction = false) {
//   let result = array.sort(function (a, b) {
//     let direct = a[objProperty] < b[objProperty];

//     if (direction == true) direct = a[objProperty] > b[objProperty];

//     if (direct == true) return -1;
//   });
//   return result;
// }

function sortStudents(array, objProperty, direction = false) {
  let result = array.sort(function (a, b) {
    let direct =
      direction == false
        ? a[objProperty] < b[objProperty]
        : a[objProperty] > b[objProperty];

    if (direct == true) return -1;
  });

  return result;
}
console.log(sortStudents(arr, "name", true));
