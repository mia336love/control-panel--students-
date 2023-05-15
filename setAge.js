//-------------------------------------------------------------------------------------

function setAge(date) {
  let age = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24 * 30 * 12));
  console.log(typeof Date.now());
  console.log(typeof date);
  console.log(typeof age);

  return age;
}
let birthday = new Date(2006, 0, 29);

console.log(setAge(birthday));
