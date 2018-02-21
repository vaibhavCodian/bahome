// for navigation button
function opensidemenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
    }
        
    function closesidemenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginleft = '0';
    }
// for stick-navbar
window.onscroll = function() {navFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

// for slide-show
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// carousel
$(document).ready(function(){
  var carousel = $(".carousel").waterwheelcarousel({
    flankingItems: 3
  })

});
$('#prev-btn').bind('click', function(){
  carousel.prev();
  return false;
});

$('#next-btn').bind('click' , function(){
  carousel.next();
  return false;
});

// Get the modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("sub-btn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
