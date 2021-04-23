const menuicon=document.querySelector(".h-menu");
const navebar =document.querySelector(".navebar-left-small");

const navebarl =document.querySelector(".navebar-left-large");

menuicon.addEventListener("click",() => { 
 navebar.classList.toggle("change");
});

menuicon.addEventListener("click",() => { 
    navebarl.classList.toggle("change");
   });