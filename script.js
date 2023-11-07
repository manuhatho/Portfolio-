const footerVisible = document.querySelectorAll('.nav-link3');
console.log(footerVisible);
const footer = document.querySelector('footer');
// console.log(footer);

footerVisible.forEach((contact, index)=>{
    contact.addEventListener('click', function(){
        footer.classList.toggle('footer-toggle')
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
        image.style.boxShadow ="1px 1px 10px 5px rgb(255, 255, 255)";
    })
    button.addEventListener("mouseout", ()=> {
        console.log('out');
        const imageContainer = document.querySelectorAll(".img-btn");
        const image = imageContainer[index].querySelector('img');
        image.style.boxShadow = "none";
    })


})


const drop_menu = document.querySelector(".bar-menu");
// console.log(drop_menu);
const navlist = document.querySelector(".navdrop")
// console.log(navlist);

drop_menu.addEventListener("click",function() {
    console.log('click');
    drop_menu.classList.toggle('dropmenu');
    navlist.classList.toggle('drop');
})