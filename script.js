let index = 0;
showSlide();

function showSlide() {
  let i;
  let slides = document.getElementsByClassName("hero");
  let circles = document.getElementsByClassName("circle");
  for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {index = 1}
  for (i=0; i<circles.length;i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "flex";
  circles[index-1].className += " active";
  setTimeout(showSlide, 4000);
}