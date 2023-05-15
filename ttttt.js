почему этот фрагмент кода не работает?
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
...
let buttons = document.querySelectorAll(".button");
buttons.forEach((element) =>
  element.addEventListener("click", () => {
    if (element.innerHTML == "Full Name") {
      alert("click");
      sortStudents(students, "surname");
      return;
    }
  })
);
function sortStudents(students, elem) {
  let newStudents = [];
  let oldStudents = [];
  document.querySelectorAll(".tr_").forEach((item) => {
    newStudents.push(item.innerHTML.slice(0, item.innerHTML.indexOf(" ")));
  });
  students.forEach((item) => {
    oldStudents.push(item[elem]);
  });
  students = students.sort((a, b) => {
    a[elem] < b[elem] ? -1 : 1;
  });
  clearStudent();
  createTableBody(students);
}
function clearStudent() {
  document.querySelectorAll(".tr__rows").forEach((item) => {
    item.remove();
  });
}


//1980