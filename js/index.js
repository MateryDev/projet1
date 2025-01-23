
var repetition = null;
var current = 0;
var myImages = [
  "../images/robot_cuisine-png.png",
  "../images/robot2.png",
  "../images/robot3.png",
  "../images/robot4.png",
  "../images/Designer.jpeg",
];

function changeImage() {
  var image = document.getElementById("image");
  image.src = "../images/" + myImages[current];

  current = (current + 1) % myImages.length;
  repetition = setTimeout(changeImage, 3000);
  setTimeout("stopImage()", 16000);
}

function stopImage() {
  clearTimeout(repetition);
}
