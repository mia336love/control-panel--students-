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

// import { students } from "./form.js";

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
    faculty: "123",
  };

  students.push(student);
  let display = `
          <tr>
          <th>ФИО</th>
          <th>Факультет</th>
          <th>Дата рождения</th>
          <th>Год зачисления</th>
          </tr>
          <tr>
            <td>${student.name} ${student.surname} ${student.patronymic}</td>
            <td>${student.faculty}</td>
            <td>${student.birthday}</td>
            <td>${student.yearOfEntry}</td>
          </tr>
    `;
  tbody.insertAdjacentHTML("beforeend", display);
}
// enterBtn.addEventListener("click", addData);
addData();

console.log(students);
