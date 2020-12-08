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


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}  
