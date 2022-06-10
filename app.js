const blue = document.getElementById("primary");
blue.style.backgroundColor = "#E1E8FF";
const purple = document.getElementById("purple");
purple.style.backgroundColor = "#F5E7FF";
const success = document.getElementById("success");
success.style.backgroundColor = "#E3F0E1";
const danger = document.getElementById("danger");
danger.style.backgroundColor = "#FFE0E1";
const warming = document.getElementById("warming");
warming.style.backgroundColor = "#FDF7BF";
const info = document.getElementById("info");
info.style.backgroundColor = "#E8EEFD";
const dark = document.getElementById("dark");
dark.style.backgroundColor = "#323E4C";
dark.style.color = "#fff";

//
var table = document.body.firstElementChild;
var rows = document.getElementsByTagName("tr");

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
document.body.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function () {
  for (var i = 0; i <= 5; i++) {
    let row = table.rows[i];
    row.remove();
  }
});

const addBtn = document.createElement("button");
addBtn.innerText = "add";
document.body.appendChild(addBtn);

addBtn.addEventListener("click", function () {
  var table = document.getElementById("myTable");
  //
  const tr = document.createElement("tr");
  const newC1 = document.createElement("td");
  const newC2 = document.createElement("td");
  const newC3 = document.createElement("td");
  table.appendChild(tr);
  tr.appendChild(newC1);
  tr.appendChild(newC2);
  tr.appendChild(newC3);
  newC1.textContent = "NEW1";
  newC2.textContent = "NEW1";
  newC3.textContent = "NEW1";
  tr.style.backgroundColor = "Yellow";
  tr.style.height = "4rem";
  tr.style.borderBottom = "1px solid #ESE7EB";

  //
  const tr2 = document.createElement("tr");
  const newC4 = document.createElement("td");
  const newC5 = document.createElement("td");
  const newC6 = document.createElement("td");
  table.appendChild(tr2);
  tr2.appendChild(newC4);
  tr2.appendChild(newC5);
  tr2.appendChild(newC6);
  newC4.textContent = "NEW2";
  newC5.textContent = "NEW2";
  newC6.textContent = "NEW2";
  tr2.style.backgroundColor = "Yellow";
  tr2.style.height = "4rem";
  tr2.style.borderBottom = "1px solid #ESE7EB";

  //
  const tr3 = document.createElement("tr");
  const newC7 = document.createElement("td");
  const newC8 = document.createElement("td");
  const newC9 = document.createElement("td");
  table.appendChild(tr3);
  tr3.appendChild(newC7);
  tr3.appendChild(newC8);
  tr3.appendChild(newC9);
  newC7.textContent = "NEW3";
  newC8.textContent = "NEW3";
  newC9.textContent = "NEW3";
  tr3.style.backgroundColor = "Yellow";
  tr3.style.height = "4rem";
  tr3.style.borderBottom = "1px solid #ESE7EB";
});
