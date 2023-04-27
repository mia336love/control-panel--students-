// export let students = [];
let inpName = document.getElementById("nameId");
let inpSurname = document.getElementById("surnameId");
let inpPatronymic = document.getElementById("patronymicId");
let inpBirthday = document.getElementById("birthdayId");
let inpYearOfEntry = document.getElementById("yearOfEntryId");
let inpFaculty = document.getElementById("facultyId");

let enterBtn = document.getElementById("enterData");

export let students = [];

function addStudent() {
  let student = {
    name: inpName.value,
    surname: inpSurname.value,
    patronymic: inpPatronymic.value,
    birthday: inpBirthday.value,
    yearOfEntry: inpYearOfEntry.value,
    faculty: inpFaculty.value,
  };

  //   console.log(student);
  students.push(student);
  console.log(students);
  //   console.log("works");

  inpName.value = "";
  inpSurname.value = "";
  inpPatronymic.value = "";
  inpFaculty.value = "";
}

if (enterBtn != null) {
  enterBtn.addEventListener("click", addStudent);
}
