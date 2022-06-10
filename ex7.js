const list = [
  { name: "James", age: 9, country: "United States" },
  { name: "Ronny", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];
const names = document.querySelectorAll(".name");
const ages = document.querySelectorAll(".age");
const countries = document.querySelectorAll(".country");

for (var i = 0; i < list.length; i++) {
  names[i].textContent = list[i].name;
  ages[i].textContent = list[i].age;
  countries[i].textContent = list[i].country;

  if (ages[i].textContent < 10) {
    ages[i].parentElement.style.backgroundColor = "yellow";
  } else if (ages[i].textContent >= 10 && ages[i].textContent < 40) {
    ages[i].parentElement.style.backgroundColor = "green";
  } else if (ages[i].textContent >= 40 && ages[i].textContent < 80) {
    ages[i].parentElement.style.backgroundColor = "red";
  } else if (ages[i].textContent >= 80) {
    ages[i].parentElement.style.backgroundColor = "red";
  }
}
