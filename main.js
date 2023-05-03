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

  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    patronymic: inpPatronymic.value,
    birthday: birthdayX,
    yearOfEntry: inpYearOfEntry.value,
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
  let year = students.push(student);
  let display = `
          
          <tr>
            <td>${student.name} ${student.surname} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday} (${age} лет)</td>
            <td>${student.yearOfEntry}</td>
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

function validation() {}

function displayAge(date) {
  let studentAge = Math.floor(
    (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  return studentAge;

  // let timeDiff = Math.floor((now - birth) / (1000 * 3600 * 24));
  // return timeDiff;
}

// function ohLord() {
//   const today = new Date();

//   const birthday = new Date("2014-12-12");

//   //   function getToday() {
//   function zeroMonthToday(todayMonth) {
//     return todayMonth < 10 ? "0" + todayMonth : todayMonth;
//   }

//   function zeroDayToday(todayDay) {
//     return todayDay < 10 ? "0" + todayDay : todayDay;
//   }
//   const todayYear = today.getFullYear();
//   const todayMonth = zeroMonthToday(today.getMonth() + 1);
//   const todayDay = zeroDayToday(today.getDay());

//   const today02 = `${todayYear}.${todayMonth}.${todayDay}`;
//   console.log(today02);
//   //   }
//   //   getToday();

//   //   function getBirthday() {
//   function zeroMonth(birthMonth) {
//     return birthMonth < 10 ? "0" + birthMonth : birthMonth;
//   }

//   function zeroDay(birthDay) {
//     return birthDay < 10 ? "0" + birthDay : birthDay;
//   }
//   const birthYear = birthday.getFullYear();
//   const birthMonth = zeroMonth(birthday.getMonth() + 1);
//   const birthDay = zeroDay(birthday.getDay());

//   const birth = `${birthYear}.${birthMonth}.${birthDay}`;
//   console.log(birth);
//   //   }
//   //   getBirthday();

//   if (birth > today02) {
//     console.log("false");
//     return;
//   } else {
//     console.log("true");
//   }
// }

// ohLord();

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(".");
}
