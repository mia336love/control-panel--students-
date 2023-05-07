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

console.log("type input", typeof inpYearOfEntry);
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

// students.forEach(() => {
//   for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
//   }
// });

// students.forEach(function (student) {
//   console.log(setAge(student.birthday));
// });

// for (i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// console.log(students.birthday);
// console.log(setAge(students.birthday));

function renderTable(students) {
  let table = `
  <table id="table" data-type="unsorted">
      <thead>
        <tr class="tr_">
          <th class='button'>Full Name</th>
          <th class='button'>Birthday and Age</th>
          <th class='button'>Years of Study</th>
          <th class='button'>Faculty</th>
        </tr>
      </thead>
        <tbody>

        </tbody>
        `;
  students.forEach((student) => {
    table += `
    <tr>
      <td>${student.surname} ${student.name} ${student.lastname}</td>
      <td>${student.birthday.toLocaleDateString()} (${setAge(
      student.birthday
    )} years) </td>
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

  const birthday = new Date(inpBirthday.value);
  const today = formatDate(new Date());

  if (birthday > today) {
    console.log(birthday);
    console.log("false");
    return;
  }

  // курс
  // const year = inpYearOfEntry.value;
  // let course = Math.trunc(new Date().getFullYear() - inpYearOfEntry.value);
  // course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    lastname: inpPatronymic.value,
    birthday: new Date(inpBirthday.value),
    startYear: inpYearOfEntry.value,
    faculty: inpFaculty.value,
  };

  students.push(student);

  // console.log(student.birthday);
  // console.log(setAge(student.birthday));

  // console.log(sortStudents(students, "name", false));

  let display = `
        <tr>
          <td>${student.surname} ${student.name} ${student.lastname}</td>
          <td>${new Date(inpBirthday.value).toLocaleDateString()} (${setAge(
    student.birthday
  )} years)</td>
          <td>${student.startYear}-${
    Number(inpYearOfEntry.value) + 4
  } (${setCourse(inpYearOfEntry)})</td>
          <td>${student.faculty}</td>
        </tr>
        `;

  console.log("setCourse(inpYearOfEntry)", typeof inpYearOfEntry);
  // console.log(typeof student.startYear);
  let year = new Date(inpYearOfEntry.value);
  console.log(year);

  // let birthObj = JSON.parse(student.birthday);
  // console.log(birthObj);

  // console.log(typeof student.birthday);
  // console.log(setAge(student.birthday));

  document.querySelector("tbody").insertAdjacentHTML("beforeend", display);

  inpBirthday.value = "";
  inpFaculty.value = "";
  inpName.value = "";
  inpPatronymic.value = "";
  inpSurname.value = "";
  inpYearOfEntry.value = "";
}
enterBtn.addEventListener("click", addStudent);

function setAge(date) {
  let age = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12));
  return age;
}

// console.log(typeof testDate);
// console.log(testAge(testDate));

// function changeBirthday() {
//   const birthday = formatDate(new Date(inpBirthday.value));
//   const today = formatDate(new Date());
//   if (birthday > today) {
//     console.log("false");
//     return;
//   }
// }

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

// let buttons = document.querySelectorAll(".button");
// buttons.forEach((element) =>
//   element.addEventListener("click", () => {
//     if (element.innerHTML == "Full Name") {
//       sortStudents(students, "surname", false);
//       return;
//     }
//     if (element.innerHTML == "Faculty") {
//       sortStudent(students, "faculty", element, "Faculty");
//       return;
//     }
//     if (element.innerHTML == "Birthday and Age") {
//       sortStudent(students, "birthday", element, "Birthday and Age");
//       return;
//     }
//     if (element.innerHTML == "Years of Study") {
//       sortStudent(students, "startYear", element, "Years of Study");
//       return;
//     }
//   })
// );

function setCourse(year) {
  // const year = date;
  let course = Math.trunc(new Date().getFullYear() - Number(year));
  course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  console.log("course", typeof course);
  console.log("year:", typeof year);
  return course;
}
console.log("func in action:", typeof setCourse("2021"));

let testDate = Math.trunc(new Date().getFullYear());
console.log("testDate:", typeof testDate);
