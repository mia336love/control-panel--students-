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
      <td>${student.birthday.toDateString()}</td>
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
          <td>${student.birthday}</td>
          <td>${student.startYear}</td>
          <td>${student.faculty}</td>
        </tr>
        `;
  // tbody.insertAdjacentHTML("beforeend", display);

  document.querySelector("tbody").insertAdjacentHTML("beforeend", display);

  // let display = `;

  //           <tr>
  //             <td class="FIO">${FIO}</td>
  //             <td class="faculty">${student.faculty}</td>
  //             <td class="birthday">${student.birthday} (${age} лет)</td>
  //             <td class="educYears">${student.yearOfEntry}-${
  //     Number(year) + 4
  //   } (${course})</td>
  //           </tr>
  //     `;
  //   tbody.insertAdjacentHTML("beforeend", display);
}
enterBtn.addEventListener("click", addStudent);
function addData() {
  const birth = new Date(inpBirthday.value);
  const birthday = formatDate(birth);
  const birthdayX = new Date(inpBirthday.value).toLocaleDateString();

  const year = inpYearOfEntry.value;

  console.log(students);
  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    patronymic: inpPatronymic.value,
    birthday: birthdayX,
    yearOfEntry: year,
    faculty: inpFaculty.value,
  };

  // проверка дня рождения + возраст
  const todayDate = new Date();
  const today = formatDate(todayDate);

  if (birthday > today) {
    console.log("false");
    return;
  }

  let age = Math.floor((Date.now() - birth) / (1000 * 60 * 60 * 24 * 30 * 12));

  // курс
  let course = Math.trunc(new Date().getFullYear() - inpYearOfEntry.value);
  course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  students.push(student);
  // let FIO = student.surname + " " + student.name + " " + student.patronymic;

  //   let display = `

  //           <tr>
  //             <td class="FIO">${FIO}</td>
  //             <td class="faculty">${student.faculty}</td>
  //             <td class="birthday">${student.birthday} (${age} лет)</td>
  //             <td class="educYears">${student.yearOfEntry}-${
  //     Number(year) + 4
  //   } (${course})</td>
  //           </tr>
  //     `;
  //   tbody.insertAdjacentHTML("beforeend", display);

  //   inpSurname.value = "";
  //   inpName.value = "";
  //   inpPatronymic.value = "";
  //   inpBirthday.value = "";
  //   inpYearOfEntry.value = "";
  //   inpFaculty.value = "";
  // }
  // enterBtn.addEventListener("click", addData);
  // addData();

  function displayAge(date) {
    let studentAge = Math.floor(
      (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
    );
    return studentAge;
  }

  // let sortFIO = document.getElementById("sortFIO");

  // sortFIO.addEventListener("click", sortStudents(students, "faculty", false));
  // function test() {
  //   console.log("test works");
  // }
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
// console.log(sortStudents(students, "name", false));
