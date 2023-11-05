const footerVisible = document.querySelector('.nav-link3');
// console.log(footerVisible);
const footer = document.querySelector('footer');
// console.log(footer);

footerVisible.addEventListener("click", ()=> {
    console.log('click');
    footer.classList.toggle("footer-toggle");
    
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

const menu = document.getElementById('menu');
console.log(menu);
const bar = document.querySelector(".fa-bars");
// console.log(bar);
const cross = document.querySelector(".fa-xmark");
// console.log(cross);




// bar.addEventListener("click",()=> {
//     console.log('click')
//     menu.classList.add('show');
//     bar.classList.add('barDi');
//     cross.classList.add('crossVi');
  
 
// })

// cross.addEventListener("click", ()=> {
//     console.log('click2')
//     menu.classList.toggle('disapear');
        
//     cross.classList.toggle('crossDi')
//     bar.classList.toggle('barVi')
    
// })

bar.addEventListener("click",()=> {
    console.log('click')
    menu.style.display ='inline-block';
    bar.style.display = 'none';
    cross.style.display = "inline-block";
  
 
})

cross.addEventListener("click", ()=> {
    console.log('click2')
    menu.style.display ='none';
    bar.style.display = 'inline-block';
    cross.style.display= 'none';
})



