// form
const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const form = document.querySelector(".form");

openForm.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("active");
  // console.log("active");
});

closeForm.addEventListener("click", () => {
  form.classList.remove("active");
});

const inpName = document.getElementById("nameId");
const inpSurname = document.getElementById("surnameId");
const inpPatronymic = document.getElementById("patronymicId");
const inpBirthday = document.getElementById("birthdayId");
const inpYearOfEntry = document.getElementById("yearOfEntryId");
const inpFaculty = document.getElementById("facultyId");

const enterBtn = document.getElementById("enterData");

// др и возраст

// const tbody = document.querySelector(".tbody");

// добавление студентов
let students = [
  {
    name: "bbb",
    surname: "fffff",
    lastname: "aaaaa",
    birthday: new Date("2004-04-04"),
    startYear: 2021,
    faculty: "kl",
  },
  {
    name: "qqqqqq",
    surname: "xxxxxx",
    lastname: "aaaaaa",
    birthday: new Date("2005-05-05"),
    startYear: 2021,
    faculty: "kl",
  },
  {
    name: "iiiiiii",
    surname: "sssss",
    lastname: "mmmm",
    birthday: new Date("2001-10-29"),
    startYear: 2020,
    faculty: "cdc",
  },
];

// students.forEach(function () {
//   for (i in students) {
//     // курс
//     const year = students[i].startYear;
//     console.log(year);
//     let course = Math.trunc(new Date().getFullYear() - students[i].startYear);
//     course > 4 ? (course = "Завершил") : (course = `${course} курс`);
//   }
// });

// students.forEach((students) => {
//   for (i in students) {
//     const birth = new Date(students.birthday[i]);
//     console.log(birth);
//     let age = Math.floor(
//       (Date.now() - birth) / (1000 * 60 * 60 * 24 * 30 * 12)
//     );
//   }
// });
function renderTable(students) {
  let table = `
  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Lastname</th>
          <th>Birthday</th>
          <th>Start Year</th>
          <th>Faculty</th>
        </tr>
      </thead>
        <tbody>

        </tbody>
        `;
  students.forEach((student) => {
    table += `
    <tr>
      <td>${student.name}</td>
      <td>${student.surname}</td>
      <td>${student.lastname}</td>
      <td>${student.birthday.toLocaleDateString()}</td>
      <td>${student.startYear}</td>
      <td>${student.faculty}</td>
    </tr>`;
  });
  table += `
  </table>
  `;
  document.querySelector("body").insertAdjacentHTML("beforeend", table);
}
renderTable(students);

function addStudent() {
  // проверка на др и возраст
  const birth = new Date(inpBirthday.value);
  const birthdayX = birth.toLocaleDateString();
  const birthday = formatDate(new Date(inpBirthday.value));
  const today = formatDate(new Date());
  let age = Math.floor((Date.now() - birth) / (1000 * 60 * 60 * 24 * 30 * 12));

  if (birthday > today) {
    console.log(birthday);
    console.log("false");
    return;
  }

  // курс
  const year = inpYearOfEntry.value;
  let course = Math.trunc(new Date().getFullYear() - inpYearOfEntry.value);
  course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    lastname: inpPatronymic.value,
    birthday: inpBirthday.value,
    startYear: inpYearOfEntry.value,
    faculty: inpFaculty.value,
  };

  students.push(student);

  console.log(sortStudents(students, "name", false));

  let display = `
        <tr>
          <td>${student.name}</td>
          <td>${student.surname}</td>
          <td>${student.lastname}</td>
          <td>${birthdayX} (${age} лет)</td>
          <td>${student.startYear}-${Number(year) + 4} (${course})</td>
          <td>${student.faculty}</td>
        </tr>
        `;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", display);
}
enterBtn.addEventListener("click", addStudent);

function changeBirthday() {
  const birthday = formatDate(new Date(inpBirthday.value));
  const today = formatDate(new Date());
  if (birthday > today) {
    console.log("false");
    return;
  }
}

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(".");
}
const sortBtn = document.getElementById("sort");
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

// sortBtn.addEventListener("click", sortStudents(students, "name", false));
console.log(sortStudents(students, "name", false));
// console.log(sortStudents(students, "name", false));

// function displayAge(date) {
//   let studentAge = Math.floor(
//     (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
//   );
//   return studentAge;
// }
