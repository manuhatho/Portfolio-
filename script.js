
// const preloader = document.getElementById("preloader");
// // console.log(preloader);

// window.addEventListener("load",function(){
//     preloader.style.display = "none"
// } )








function exitContact() {
    const out = document.querySelectorAll("#out");
    const formulaire = document.querySelector("form");
    const body= document.querySelector('body');
    const form = document.querySelector(".form");

    out.forEach(function(index) {
        index.addEventListener("click", function(event) {
            event.stopPropagation();
            form.classList.toggle("active");
            formulaire.classList.toggle("active");

            // Ajout de l'overflow: hidden quand le formulaire est actif
            if (form.classList.contains("active") || formulaire.classList.contains("active")) {
                body.classList.add('active');
            } else {
                body.classList.remove('active');
            }
        });
    });
}

exitContact();

 function footer(){
    const footerVisible = document.querySelectorAll('.nav-link3');
    const footer = document.querySelector('.footer');
    const Mfooter = document.querySelector('footer');
    const blend = document.querySelector('.blend');
    const body= document.querySelector('body');
    


footerVisible.forEach((contact) => {

    contact.addEventListener("click", function (event) {
        event.stopPropagation(); 
        footer.classList.toggle('footer-toggle');
        Mfooter.classList.toggle('footer-toggle');
        blend.classList.toggle("active");
        body.classList.toggle('active');
    });

    blend.addEventListener("click", function () {
        body.classList.remove('active');
        footer.classList.remove('footer-toggle');
        Mfooter.classList.remove('footer-toggle');
        blend.classList.remove("active");
    });
});

 }

footer();








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











