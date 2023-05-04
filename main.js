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

// добавление студентов
let students = [];

const tbody = document.querySelector(".tbody");

function addData() {
  const birth = new Date(inpBirthday.value);
  const birthday = formatDate(birth);
  const birthdayX = new Date(inpBirthday.value).toLocaleDateString();

  const year = inpYearOfEntry.value;

  console.log(typeof year);
  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    patronymic: inpPatronymic.value,
    birthday: birthdayX,
    yearOfEntry: year,
    faculty: inpFaculty.value,
  };

  // function empty() {
  //   if ((inpName = "")) {
  //     console.log("empty");
  //     return;
  //   }
  // }
  // empty();

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
  let display = `
          
          <tr>
            <td class="FIO">${student.name} ${student.surname} ${
    student.patronymic
  }</td>
            <td class="faculty">${student.faculty}</td>
            <td class="birthday">${student.birthday} (${age} лет)</td>
            <td class="educYears">${student.yearOfEntry}-${
    Number(year) + 4
  } (${course})</td>
          </tr>
    `;
  tbody.insertAdjacentHTML("beforeend", display);

  inpSurname.value = "";
  inpName.value = "";
  inpPatronymic.value = "";
  inpBirthday.value = "";
  inpYearOfEntry.value = "";
  inpFaculty.value = "";
}
enterBtn.addEventListener("click", addData);
// addData();

function displayAge(date) {
  let studentAge = Math.floor(
    (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  return studentAge;
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

// function sortStudents(students) {
//   let newArr = [];
// }

// tbody.addEventListener("click", (e) => {
//   const el = e.target;
//   // const thead = document.querySelector(".thead");

//   if (e.nodeName !== "TH") return;
//   console.log("click th");
// });

// let sortName = document.getElementById()
let sortFIO = document.getElementById("sortFIO");

sortFIO.addEventListener("click", sortStudents(students, "surname", false));

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
