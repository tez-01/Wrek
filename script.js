let navbar =document.querySelector('.navbar');
        document.querySelector("#menu-btn").onclick=() =>{
            navbar.classList.toggle('active');
        };

//Hide navbar whwn scrolling

var scrollpre= window.pageYOffset;
window.onscroll = function(){
    var scrollNext = window.pageYOffset;
    if(scrollpre > scrollNext) {
        document.getElementById('header').style.top = "0";
        document.getElementById('header').style.backgroundColor = "red";
        document.getElementById('header').style.animationDelay = ".5";

    }else{
        document.getElementById('header').style.top = "-100px";
        
    }
    scrollpre = scrollNext;
}; 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("space");
  let dots = document.getElementsByClassName("dot");
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
    