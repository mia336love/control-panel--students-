// form
const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const form = document.querySelector(".form");

openForm.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("active");
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

console.log("type input:", inpYearOfEntry);
// добавление студентов
let students = [
  {
    name: "bbb",
    surname: "fffff",
    lastname: "aaaaa",
    birthday: new Date(2003, 2, 3),
    startYear: 2021,
    faculty: "kl",
  },
  {
    name: "qqqqqq",
    surname: "xxxxxx",
    lastname: "aaaaaa",
    birthday: new Date(2004, 3, 4),
    startYear: 2021,
    faculty: "kl",
  },
  {
    name: "iiiiiii",
    surname: "sssss",
    lastname: "mmmm",
    birthday: new Date(2005, 4, 5),
    startYear: 2020,
    faculty: "cdc",
  },
];

function renderTable(students) {
  const tableHeader = `
    <table id="table" data-type="unsorted">
      <thead>
        <tr>
          <th class='button'>Full Name</th>
          <th class='button'>Birthday and Age</th>
          <th class='button'>Years of Study</th>
          <th class='button'>Faculty</th>
        </tr>
      </thead>
      <tbody>
  `;
  const tableFooter = `
      </tbody>
    </table>
  `;
  const tableBody = createTableBody(students);
  const table = tableHeader + tableBody + tableFooter;
  document.querySelector("body").insertAdjacentHTML("beforeend", table);
}

function createTableBody(students) {
  let tableBody = "";
  students.forEach((student) => {
    const { surname, name, lastname, birthday, startYear, faculty } = student;
    tableBody += `
      <tr class="tr_">
        <td>${surname} ${name} ${lastname}</td>
        <td>${birthday.toLocaleDateString()} (${setAge(birthday)} years) </td>
        <td>${startYear}</td>
        <td>${faculty}</td>
      </tr>
    `;
  });
  return tableBody;
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

//====================================================================
function setCourse(year) {
  // const year = date;
  let course = Math.trunc(new Date().getFullYear() - Number(year));
  course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  console.log("course:", typeof course); // string
  console.log("year:", typeof year); // object
  return course;
}
console.log("func in action:", setCourse("2021"));
//====================================================================

// let testDate = Math.trunc(new Date().getFullYear());
// console.log("testDate:", typeof testDate);

// const trFullName
// const tr

// сортировка

// наход главных ячеек для сортировки по нажатию на них

// cellFullName.addEventListener("click", () => {
//   forEvent(snpFilter);
// });

function snpFilter(x, y) {
  if (x.surname < y.surname) {
    return -1;
  }
  if (x.surname > y.surname) {
    return 1;
  }
  return 0;
}

function forEvent(filter) {
  let newArray = students.sort(filter);
  let oldTables = document.querySelectorAll(".tr_");
  for (let k = 0; k < oldTables.length; k++) {
    oldTables[k].remove();
    renderTable(newArray[k]);
  }
}
