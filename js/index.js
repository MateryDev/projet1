
var repetition = null;
var current = 0;
var myImages = [
  "https://materydev.github.io/projet1/images/robot_cuisine-png.png",
  "https://materydev.github.io/projet1/images/robot2.png",
  "https://materydev.github.io/projet1/images/robot3.png",
  "https://materydev.github.io/projet1/images/robot4.png",
  "https://materydev.github.io/projet1/images/Designer.jpeg",
];

function changeImage() {
  var image = document.getElementById("image");
  image.src = "https://materydev.github.io/projet1/images/" + myImages[current];

  current = (current + 1) % myImages.length;
  repetition = setTimeout(changeImage, 3000);
  setTimeout("stopImage()", 16000);
}

function stopImage() {
  setTimeout(repetition);
}
