
// const preloader = document.getElementById("preloader");
// // console.log(preloader);

// window.addEventListener("load",function(){
//     preloader.style.display = "none"
// } )















const footerVisible = document.querySelectorAll('.nav-link3');
// console.log(footerVisible);
const footer = document.querySelector('.footer');
const Mfooter = document.querySelector('footer');
// console.log(Mfooter);
// console.log(footer);
const nav = document.querySelector(".nav2");
// console.log(nav);


 
function exitContact(){
    const out = document.querySelectorAll("#out");
    const formulaire = document.querySelector("form")
    out.forEach(function(index){
        const form = document.querySelector(".form");
        index.addEventListener("click",function(){
            console.log('click');
            form.classList.toggle("active");
            formulaire.classList.toggle("active");
        })
    })

 }
 exitContact();

footerVisible.forEach((contact, index) => {
    if (index === 2 || index === 0) {
        contact.addEventListener("click", function () {
            console.log('je click sur index 2');
            event.stopPropagation(); 
            footer.classList.toggle('footer-toggle');
            Mfooter.classList.toggle('footer-toggle');
        });
    }

    if (index === 1) {
        contact.addEventListener("click", function () {
            console.log('je click sur index 1');
            footer.classList.remove('footer-toggle');
            Mfooter.classList.remove('footer-toggle');
        });
    }
});

document.querySelector("body").addEventListener("click",function(){
    footer.classList.remove('footer-toggle');
    Mfooter.classList.remove('footer-toggle');
})










const buttonV = document.querySelectorAll('#button-v');
// console.log(buttonV);

buttonV.forEach((button, index) => {
    button.addEventListener("mouseover", ()=>{
        // console.log(buttonV);
        let imageContainer = document.querySelectorAll(".img");
        let image = imageContainer[index].querySelector("img")
        image.style.boxShadow = "5px 5px 10px rgba(0, 0, 1, 0.5)";
        image.style.transform = "scale(0.9)";
        
    })

    button.addEventListener("mouseout", ()=>{
        // console.log("hover");
        let imageContainer = document.querySelectorAll(".img");
        // console.log(imageContainer);
        let image = imageContainer[index].querySelector("img")
        image.style.boxShadow = "none";
        image.style.transform = "scale(1)";
    })
})

const buttonV2 = document.querySelectorAll('.d-voir');
// console.log(buttonV2);

buttonV2.forEach((button, index) => {
    button.addEventListener("mouseover", ()=> {
        // console.log('over');
        const imageContainer = document.querySelectorAll(".img-btn");
        const image = imageContainer[index].querySelector('img');
        image.style.boxShadow ="5px 5px 10px rgba(0, 0, 1, 0.5)";
        image.style.transform = "scale(0.9)";
    })
    button.addEventListener("mouseout", ()=> {
        // console.log('out');
        const imageContainer = document.querySelectorAll(".img-btn");
        const image = imageContainer[index].querySelector('img');
        image.style.boxShadow = "none";
        image.style.transform = "scale(1)";
    })


})


const bar = document.querySelector(".barmenu");
// console.log(bar);

const header = document.querySelector("header");

const white= document.getElementById("white");
const body = document.querySelector("body");

var scroolTopValue = 400;

nav.scrollTop = scroolTopValue;

bar.addEventListener("click", function() {
    // console.log('click');
    body.classList.toggle("active");
    bar.classList.toggle("active");
    nav.classList.toggle("active");
    header.classList.toggle("active");
    white.classList.toggle("active");

});





window.addEventListener("scroll", function() {
    // console.log('scroll');
    if (window.scrollY > 0) {
        header.style.background = "white";
    }
    else {
        header.style.background = "transparent";
    }

})


//  document.oncontextmenu = function(){
//      return false;
//  }

 const arrow = document.querySelector(".arrow");
 
 arrow.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
 })

 window.addEventListener("scroll", function(){
    if (window.scrollY>200){
        arrow.style.display = "block"

    } else {
        arrow.style.display = "none"
    }
 })


