// var images = [];

// images[0] = [
//   (document.getElementById("screen").style.backgroundColor = "green"),
// ];
// images[1] = [(document.getElementById("screen").style.backgroundColor = "red")];
// images[2] = [
//   (document.getElementById("screen").style.backgroundColor = "blue"),
// ];
// var index = 0;

// function change() {
//   document.getElementById("screen").src = images[index];
//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setTimeout(change, 1000);
// }

// window.onload = change();

//.....

// var images = [];
// images[0] = ["./image/pic1.jpeg"];
// images[1] = ["./image/pic2.jpeg"];
// images[2] = ["./image/pic3.jpeg"];
// var index = 0;
// function change() {
//   document.mainPhoto.src = images[index];
//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }
//   setInterval(change(), 1000);
// }
// window.onload = change();

//.........................

// var i = 0;
// function change() {
//   var doc = document.getElementById("background");
//   var color = ["black", "blue", "brown", "green"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);

//.........................
// var color = ["black", "blue", "brown", "green"];
// var index = 0;
// function change() {
//   document.background.src = color[index];
//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setInterval(change(), 1000);
// }

// window.onload = change();

// var colors = [];
// colors[0] = ["blue"];
// colors[1] = ["black"];
// colors[2] = ["red"];
// var index = 0;
// function change() {
//   var doc = document.getElementById("background");
//   doc.style.backgroundColor = colors[i];
//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setInterval(change(), 1000);
// }

// window.onload = change();
//......

// var color = ["black", "blue", "brown", "green"];
// var index = 0;
// function change() {
//     document.background.src = color[index];
//    if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setInterval(change(), 1000);
// }

// window.onload = change();

//.......

// var color = ["black", "blue", "brown", "green"];
// var index = 0;
// function change() {
//   var doc = document.getElementById("background");
//   doc.style.backgroundColor = color[index];
//   if (index == 3) {
//     index = 0;
//   } else {
//     index++;
//   }
//   setInterval(change(), 1000);
// }

// window.onload = change();

// var colors = [];
// colors[0] = ["blue"];
// colors[1] = ["black"];
// colors[2] = ["red"];
// var index = 0;
// function change() {
//   var doc = document.getElementById("background");
//   doc.style.backgroundColor = colors[i];
//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setInterval(change(), 1000);
// }

// window.onload = change();

var images = [];

images[0] = ["./image/pic1.jpeg"];
images[1] = ["./image/pic2.jpg"];
images[2] = ["./image/pic3.jpg"];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 5000);
}

window.onload = change();
