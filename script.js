let slider = 1;
dispSlide(slider);

function dispSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // console.log(slides.length);
    if(n > slides.length) {
        slider = 1
    }
    if(n < 1){
        slider = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slider - 1].style.display = "block";
}

function plusSlides(n) {
    dispSlide(slider += n);
}

// function scrollWindow(){
//     window.scrollTo({top: 0, behavior:"smooth"});
// }
// document.getElementById("btn").addEventListener("click", scrollWindow);

// function scrollHome(){
//     window.scrollTo({top:0, behavior:"smooth"})
// }
// document.getElementById("home").addEventListener("click", scrollHome);

// function scrollImages(){
//     window.scrollTo({top:860, behavior:"smooth"})
// }
// document.getElementById("imgslider").addEventListener("click", scrollImages);

// function scrollService(){
//     window.scrollTo({top:1800, behavior:"smooth"})
// }
// document.getElementById("services").addEventListener("click", scrollService);

// function scrollAbout(){
//     window.scrollTo({top:2900, behavior:"smooth"})
// }
// document.getElementById("about").addEventListener("click", scrollAbout);


function scrollHome(){
    location.href = "#home";
}

function scrollImages(){
    location.href = "#imgslider";
}

function scrollService(){
    location.href = "#services";
}

function scrollAbout(){
    location.href = "#about";
}