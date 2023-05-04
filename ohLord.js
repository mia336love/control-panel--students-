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
console.log(sortStudents(arr, "name", false));

function renderTable() {
  //   // Creating table body
  //   students.forEach((student) => {
  //     let row = document.createElement("tr");
  //     let cellFIO = document.createElement("td");
  //     // let cellName = document.createElement("td");
  //     // let cellSurname = document.createElement("td");
  //     // let cellLastname = document.createElement("td");
  //     let cellDate = document.createElement("td");
  //     let cellStartYear = document.createElement("td");
  //     let cellFaculty = document.createElement("td");
  //     cellFIO.innerText = student.name;
  //     // cellName.innerText = student.name;
  //     // cellSurname.innerText = student.surname;
  //     // cellLastname.innerText = student.lastname;
  //     cellDate.innerText = student.date.toLocaleDateString();
  //     cellStartYear.innerText = student.startYear;
  //     cellFaculty.innerText = student.faculty;
  //     row.appendChild(cellFIO);
  //     // row.appendChild(cellName);
  //     // row.appendChild(cellSurname);
  //     // row.appendChild(cellLastname);
  //     row.appendChild(cellFaculty);
  //     row.appendChild(cellDate);
  //     row.appendChild(cellStartYear);
  //     tbody.appendChild(row);
  //   });
  //   document.body.append(tbody);
  // }
  // // Call the function to render the table
  // renderTable();
}
