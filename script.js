const footerVisible = document.querySelectorAll('.nav-link3');
console.log(footerVisible);
const footer = document.querySelector('.footer');
const Mfooter = document.querySelector('footer');
// console.log(Mfooter);
// console.log(footer);

footerVisible.forEach((contact, index)=>{
    contact.addEventListener('click', function(){
        footer.classList.toggle('footer-toggle')
        Mfooter.classList.toggle('footer-toggle')
    })
})
    


const buttonV = document.querySelectorAll('#button-v');
// console.log(buttonV);

buttonV.forEach((button, index) => {
    button.addEventListener("mouseover", ()=>{
        // console.log("hover");
        let imageContenair = document.querySelectorAll("#imageContainer");
        let image = imageContenair[index].querySelector("img")
        image.style.boxShadow = "5px 5px 10px rgba(0, 0, 1, 0.5)";
    })

    button.addEventListener("mouseout", ()=>{
        // console.log("hover");
        let imageContainer = document.querySelectorAll("#imageContainer");
        let image = imageContainer[index].querySelector("img")
        image.style.boxShadow = "none";
    })
})

const buttonV2 = document.querySelectorAll('.d-voir');
// console.log(buttonV2);

buttonV2.forEach((button, index) => {
    button.addEventListener("mouseover", ()=> {
        console.log('over');
        const imageContainer = document.querySelectorAll(".img-btn");
        const image = imageContainer[index].querySelector('img');
        image.style.boxShadow ="1px 1px 10px 5px rgb(237, 60, 99)";
    })
    button.addEventListener("mouseout", ()=> {
        console.log('out');
        const imageContainer = document.querySelectorAll(".img-btn");
        const image = imageContainer[index].querySelector('img');
        image.style.boxShadow = "none";
    })


})


const bar = document.querySelector(".barmenu");
// console.log(bar);
const nav = document.querySelector(".nav2");
// console.log(nav);
const header = document.querySelector("header");

var scroolTopValue = 400;

nav.scrollTop = scroolTopValue;

bar.addEventListener("click", function() {
    // console.log('click');
    bar.classList.toggle("active");
    nav.classList.toggle("active");
    header.classList.toggle("active");

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
 
 arrow.addEventListener("click", function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
 });

 window.addEventListener("scroll", function(){
    if (window.scrollY>200){
        arrow.style.display = "block"

    } else {
        arrow.style.display = "none"
    }
 })

 