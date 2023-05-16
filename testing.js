// // Проверка на пустые поля
// if (
//   inpSurname.value.trim() === "" ||
//   inpName.value.trim() === "" ||
//   inpPatronymic.value.trim() === "" ||
//   inpBirthday.value.trim() === "" ||
//   inpYearOfEntry.value.trim() === "" ||
//   inpFaculty.value.trim() === ""
// ) {
//   alert("Пожалуйста, заполните все поля");
//   return;
// }

// // Проверка на пустые поля и на соответствие регулярному выражению
// const nameRegex = /^[a-zA-Zа-яА-Я]+$/; // регулярное выражение для проверки только букв
// if (
//   !nameRegex.test(inpSurname.value.trim()) ||
//   !nameRegex.test(inpName.value.trim()) ||
//   !nameRegex.test(inpPatronymic.value.trim()) ||
//   inpBirthday.value.trim() === "" ||
//   inpYearOfEntry.value.trim() === "" ||
//   inpFaculty.value.trim() === ""
// ) {
//   alert("Пожалуйста, заполните все поля только буквами");
//   return;
// }

// Устанавливаем максимальную дату для поля birthday
const today = new Date().toISOString().split("T")[0];
const birthdayInput = document.getElementById("birthdayId");
birthdayInput.max = today;

console.log();
