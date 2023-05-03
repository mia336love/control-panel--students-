// // const today = new Date().toLocaleDateString();

// // console.log(today);
// // console.log(birthday);

// // if (birthday > today) {
// //   console.log("false");
// //   return;
// // } else {
// //   console.log("true");
// // }

// // const m = birthday.getMonth();
// // console.log(m);

// function ohLord() {
//   const today = new Date();

//   const birthday = new Date("2014-12-12");

//   function getToday() {
//     function zeroMonthToday(todayMonth) {
//       return todayMonth < 10 ? "0" + todayMonth : todayMonth;
//     }

//     function zeroDayToday(todayDay) {
//       return todayDay < 10 ? "0" + todayDay : todayDay;
//     }
//     const todayYear = today.getFullYear();
//     const todayMonth = zeroMonthToday(today.getMonth() + 1);
//     const todayDay = zeroDayToday(today.getDate());

//     const today02 = `${todayYear}.${todayMonth}.${todayDay}`;
//     console.log(today02);
//   }
//   getToday();

//   function getBirthday() {
//     function zeroMonth(birthMonth) {
//       return birthMonth < 10 ? "0" + birthMonth : birthMonth;
//     }

//     function zeroDay(birthDay) {
//       return birthDay < 10 ? "0" + birthDay : birthDay;
//     }
//     const birthYear = birthday.getFullYear();
//     const birthMonth = zeroMonth(birthday.getMonth() + 1);
//     const birthDay = zeroDay(birthday.getDate());

//     const birth = `${birthYear}.${birthMonth}.${birthDay}`;
//     console.log(birth);
//   }
//   getBirthday();

//   //   if (birth > today02) {
//   //     console.log("false");
//   //     return;
//   //   } else {
//   //     console.log("true");
//   //   }
//   // }
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
const today = new Date();
console.log(formatDate(today));
