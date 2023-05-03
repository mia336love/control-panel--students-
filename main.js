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
  const birthday = new Date(inpBirthday.value);
  const birth = birthday.toLocaleDateString();

  let student = {
    surname: inpSurname.value,
    name: inpName.value,
    patronymic: inpPatronymic.value,
    birthday: birth,
    yearOfEntry: inpYearOfEntry.value,
    faculty: inpFaculty.value,
  };

  // validation();
  const today = new Date();
  const now = today.toLocaleDateString();

  // const birthday = new Date(inpBirthday.value);
  // const birth = birthday.toLocaleDateString();

  console.log(now); //string
  // console.log(birthday); //string
  console.log(birth);

  if (birth > now) {
    alert("false");
    return;
  }

  // let timeDiff = Math.floor((now - birth) / (1000 * 3600 * 24));
  // return timeDiff;
  // console.log(timeDiff);

  // displayAge(birth);

  let studentAge = Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 30 * 12));
  students.push(student);
  let display = `
          
          <tr>
            <td>${student.name} ${student.surname} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday} (${studentAge} лет)</td>
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

function validation() {
  //проверка на дату рождения
  // const today = new Date();
  // const now = today.toLocaleDateString();
  // const birthday = new Date(inpBirthday.value);
  // const birth = birthday.toLocaleDateString();
  // console.log(now); //string
  // // console.log(birthday); //string
  // console.log(birth);
  // if (birth > now) {
  //   alert("false");
  //   return;
  // }
}

function displayAge(date) {
  let studentAge = Math.floor(
    (Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  return studentAge;

  // let timeDiff = Math.floor((now - birth) / (1000 * 3600 * 24));
  // return timeDiff;
}
