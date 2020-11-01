/*
	program heading: Photoshop gallery
	author name: Mike Kline
	version: 0.5
	description: a gallery to display my photoshop images
	*/

var imageSlide = ["../assets/My890Jframed.jpg", "../assets/MadnessInTheRockiesframed.jpg", "../assets/InTimeAndSpaceframed.jpg"]
var index = 0;

function next() {
  if (index < 2) { //stops next function at the end
    index++;
    let defaultImg = document.getElementById("slide")
    defaultImg.src = imageSlide[index];
  }
}

function Previous() {
  if (index > 0) { //stops previous function at the beginning
    index--;
    let defaultImg = document.getElementById("slide")
    defaultImg.src = imageSlide[index];
  }
}
