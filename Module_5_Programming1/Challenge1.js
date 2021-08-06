//https://codepen.io/brandoturner/pen/WNjaROG

let names = ["Wesley Snipes", "Nicholas Cage","Nasir Jones","Sean Carter","Sean Combs","Michael Jordan","Patrick Ewing"]

let firstName = []
let lastName = []
let name = names.join(" ");
console.log(name);

let temp = name.split(" ");
console.log(temp);

temp.forEach(function (name, div) {
  div % 2 === 0 ? firstName.push(temp[div]) : lastName.push(temp[div]);
});

console.log(firstName);
console.log(lastName);