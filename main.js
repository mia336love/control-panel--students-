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

// if (closeForm != null) {
//   closeForm.addEventListener("click", () => {
//     form.classList.remove("active");
//     console.log("close");
//   });
// }

// добавление студентов
let students = [];

// function addStudent() {
//   let student = {
//     name: inpName.value,
//     surname: inpSurname.value,
//     patronymic: inpPatronymic.value,
//     birthday: inpBirthday.value,
//     yearOfEntry: inpYearOfEntry.value,
//     faculty: inpFaculty.value,
//   };

//   // console.log(student);
//   students.push(student);
//   console.log(students);
//   // console.log("works");

//   inpName.value = "";
//   inpSurname.value = "";
//   inpPatronymic.value = "";
//   inpFaculty.value = "";

//   let display = `
//           <tr>
//             <td>${student.name}</td>
//             <td>${student.surname}</td>
//             <td>${student.patronymic}</td>
//             <td>${student.birthday}</td>
//             <td>${student.yearOfEntry}</td>
//             <td>${student.faculty}</td>
//           </tr>
//     `;
//   tbody.insertAdjacentHTML("beforeend", display);
//   console.log(students);
// }

// if (enterBtn != null) {
//   enterBtn.addEventListener("click", addStudent);
// }
const tbody = document.querySelector(".tbody");

function addData() {
  let student = {
    name: inpName.value,
    surname: inpSurname.value,
    patronymic: inpPatronymic.value,
    birthday: inpBirthday.value,
    yearOfEntry: inpYearOfEntry.value,
    faculty: inpFaculty.value,
  };

  students.push(student);
  let display = `
          
          <tr>
            <td>${student.name} ${student.surname} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday}</td>
            <td>${student.yearOfEntry}</td>
          </tr>
    `;
  tbody.insertAdjacentHTML("beforeend", display);
}
enterBtn.addEventListener("click", addData);
// addData();
