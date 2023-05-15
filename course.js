// function course(age) {
//   if (age > 4) {
//     return "Study is complete";
//   } else {
//     return `${age} course`;
//   }
// }

//----------------------------------------------------------------------------------------------------------------

function setCourse(year) {
  // const year = date;
  let course = Math.trunc(new Date().getFullYear() - Number(year));
  course > 4 ? (course = "Завершил") : (course = `${course} курс`);

  console.log("course:", course, typeof course);
  console.log("year:", year, typeof year);
  return course;
}
console.log("func in action:", setCourse("2021"));
