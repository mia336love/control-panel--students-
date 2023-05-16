// форма
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

// массив студентов
let students = [
  {
    surname: "Волошина",
    name: "Алена",
    lastname: "Николаевна",
    birthday: new Date(2003, 2, 3),
    startYear: 2021,
    faculty: "Философия",
  },
  {
    surname: "Пережогин",
    name: "Иннокентий",
    lastname: "Валерианович",
    birthday: new Date(2005, 4, 5),
    startYear: 2020,
    faculty: "Биология",
  },
  {
    surname: "Лунин",
    name: "Степан",
    lastname: "Трофимович",
    birthday: new Date(2004, 3, 4),
    startYear: 2021,
    faculty: "Программирование",
  },
];

// отрисовка таблицы
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
  document.querySelector(".table_body").insertAdjacentHTML("beforeend", table);
}

// заполнение таблицы значениями
function createTableBody(students) {
  let tableBody = "";
  students.forEach((student) => {
    const { surname, name, lastname, birthday, startYear, faculty } = student;
    tableBody += `
      <tr class="tr_">
        <td>${surname} ${name} ${lastname}</td>
        <td>${birthday.toLocaleDateString()} (${setAge(birthday)} лет) </td>
        <td>${setCourse(startYear)}</td>
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
  const today = new Date();

  if (birthday > today) {
    console.log(birthday);
    alert("Некорректная дата рождения");
    return;
  }

  //
  const startYear = Number(inpYearOfEntry.value);

  if (startYear < 2000 || startYear > new Date().getFullYear()) {
    alert("Некорректный год начала обучения");
    return;
  }

  // Проверка на пустые поля
  if (
    inpSurname.value.trim() === "" ||
    inpName.value.trim() === "" ||
    inpPatronymic.value.trim() === "" ||
    inpBirthday.value.trim() === "" ||
    inpYearOfEntry.value.trim() === "" ||
    inpFaculty.value.trim() === ""
  ) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  let student = {
    surname: uppercase(inpSurname.value.trim()),
    name: uppercase(inpName.value.trim()),
    lastname: uppercase(inpPatronymic.value.trim()),
    birthday: new Date(inpBirthday.value),
    startYear: inpYearOfEntry.value,
    faculty: uppercase(inpFaculty.value.trim()),
  };

  students.push(student);

  let display = `
        <tr>
          <td>${student.surname} ${student.name} ${student.lastname}</td>
          <td>${new Date(inpBirthday.value).toLocaleDateString()} (${setAge(
    student.birthday
  )} лет)</td>
          <td>${setCourse(Number(student.startYear))}</td>
          <td>${student.faculty}</td>
        </tr>
        `;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", display);

  // очищение ввода
  inpBirthday.value = "";
  inpFaculty.value = "";
  inpName.value = "";
  inpPatronymic.value = "";
  inpSurname.value = "";
  inpYearOfEntry.value = "";

  form.classList.remove("active");
}
enterBtn.addEventListener("click", addStudent);

// определение возраста
function setAge(date) {
  let age = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12));
  return age;
}

// определение курса
function setCourse(startYear) {
  const currentYear = new Date().getFullYear();
  const endYear = startYear + 4;
  const course = currentYear - startYear;
  const courseNum = course > 4 ? "закончил" : `${course} курс`;
  return `${startYear}-${endYear} (${courseNum})`;
}

// ивенты на заголовки
let buttons = document.querySelectorAll(".button");
buttons.forEach((element) =>
  element.addEventListener("click", () => {
    if (element.innerHTML == "Full Name") {
      sortStudents(students, "surname");
      return;
    }
    if (element.innerHTML == "Faculty") {
      sortStudents(students, "faculty");
    }
    if (element.innerHTML == "Birthday and Age") {
      sortStudents(students, "birthday");
    }
    if (element.innerHTML == "Years of Study") {
      sortStudents(students, "startYear");
    }
  })
);

// сортировка
function sortStudents(students, elem) {
  // elem имя свойства объекта, по которому сортировать
  let newStudents = [];
  let oldStudents = [];

  // найти имя студента, добавить в массив
  document.querySelectorAll(".tr_").forEach((item) => {
    newStudents.push(item.innerHTML.slice(0, item.innerHTML.indexOf(" ")));
  });
  students.forEach((item) => {
    oldStudents.push(item[elem]);
  });

  // проверка, сортировались ли студенты
  if (document.getElementById("table").dataset.type !== "sorted") {
    students = students.sort((a, b) => (a[elem] > b[elem] ? 1 : -1));
    document.getElementById("table").dataset.type = "sorted"; // в порядке убывания
  } else {
    students = students.sort((a, b) => (a[elem] > b[elem] ? -1 : 1));
    document.getElementById("table").dataset.type = "unsorted"; // в порядке возрастания
  }
  const newTableBody = createTableBody(students); // создать новые значения
  document.querySelector("tbody").innerHTML = newTableBody; // замена html таблицы новыми значениями
}

// все с заглавной
function uppercase(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
