let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let carousel = document.querySelector(".carousel");
let SliderDom = carousel.querySelector(".carousel .list");
let thumbnailBorder = document.querySelector(".carousel .thumbnail");
let thumbnailItems = thumbnailBorder.querySelectorAll(".item");
let time = document.querySelector(".carousel .time");


thumbnailBorder.appendChild(thumbnailItems[0]);
let timeRunning = 2000;
let timeAutoNext = 4000;

nextBtn.onclick = function(){
    showSlider('next');
}

prevBtn.onclick = function(){
    showSlider('prev');

}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

function showSlider(type){
    let sliderItem = SliderDom.querySelectorAll(".carousel .list .item");
    let thumbnailItems = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        SliderDom.appendChild(sliderItem[0]);
        thumbnailBorder.appendChild(thumbnailItems[0]);
        carousel.classList.add('next');
    } else{
        SliderDom.prepend(sliderItem[sliderItem.length -1]);
        thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length -1]);
        carousel.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);
    
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click()
    }, timeAutoNext)
}

const menuBtn = document.querySelector('.menu-btn .bx-menu');
const menuBar = document.querySelector('.side-menu-bar');

menuBtn.onclick = function(){
    menuBar.classList.toggle('active-side-menu')
    menuBtn.classList.toggle('bx-x')
}

//  <!-- Typing Animation  -->


const animText = new Typed ('.animated-text',{
    strings:['Front-End Developer'],
    backSpeed: 200,
    typeSpeed:200,
    backDelay:200,
    loop:true
});
