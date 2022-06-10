// - write a function that add two inputs values and show them below of inputs and when the result is Odd the result color is Red and when it is Even the color is Blue.
function getAdd() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("val1").value);
  numTwo = parseInt(document.getElementById("val2").value);
  sum = numOne + numTwo;
  if (sum % 2 == 0) {
    const result = document.getElementById("answer");
    result.value = sum;
    result.style.backgroundColor = "blue";
  } else {
    const result = document.getElementById("answer");
    result.value = sum;
    result.style.backgroundColor = "red";
  }
}
