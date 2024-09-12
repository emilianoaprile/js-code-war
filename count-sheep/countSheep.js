console.log("ok");
const countSheep = function (num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    string += `${i}sheep...`;
  }
  return string;
};

console.log(countSheep(10));
