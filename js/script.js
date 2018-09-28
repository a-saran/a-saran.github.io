const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container-c");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});


$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 250) {
            $('.navbar').removeClass('bg-transparent');
            $('.navbar').addClass('solid');
            $('.navbar').removeClass('navbar-dark');
            $('.navbar').addClass('navbar-light');
            //$('.navbar-nav').addClass('text-black');
        } else {
            $(".navbar").removeClass('solid');
            $('.navbar').addClass('bg-transparent');
            //$('.navbar').addClass('bg-transparent');
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('navbar-dark');
        }
    });
});




