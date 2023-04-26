// таблица с массивами из объектов, отрисовка
// создать массив из 3-ех объектов
// отрисовать таблицу
// дата за сегодня и годы обучения
// let inpName = document.getElementById("#nameId");
// let inpSurame = document.getElementById("#surnameId");
// let inpPatronymic = document.getElementById("#patronymicId");
// let inpBirthday = document.getElementById("#birthdayId");
// let inpYearOfEntry = document.getElementById("#yearOfEntryId");
// let inpFaculty = document.getElementById("#facultyId");

// let enterBtn = document.getElementById("#enterData");

// import { students } from "./form.js";

const tbody = document.querySelector(".tbody");
let students = [];

// let student = { name: "", surname: "", patronymic: "", birthday:,
// yearOfEntry: "", faculty: ""};

// везде строки (только для теста)
function addData() {
  let student = {
    name: "few",
    surname: "fews",
    patronymic: "fewss",
    birthday: new Date(2000, 12, 03),
    yearOfEntry: new Date(2017, 07, 12),
    faculty: inpFaculty.value,
  };

  // students.push(student);
  // объединить раздельные инициалы на фио
  let display = `
          <tr>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.patronymic}</td>
            <td>${student.birthday}</td>
            <td>${student.yearOfEntry}</td>
            <td>${student.faculty}</td>
          </tr>
    `;
  tbody.insertAdjacentHTML("beforeend", display);
  console.log(students);
}
enterBtn.addEventListener("click", addData);
// addData();

console.log(students);
