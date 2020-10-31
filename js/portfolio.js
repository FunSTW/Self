var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.querySelectorAll("div.Slide"+"1");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

var slideIndex2 = 0;
showSlides2();
function showSlides2() {
    var i;
    var slides = document.querySelectorAll("div.Slide"+"2");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }

    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 3000);
}