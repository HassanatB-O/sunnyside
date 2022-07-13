let hamburgerIcon = document.getElementById("icon-hamburger");
let hamburgerMenu = document.getElementById("hamburger")

let clicked = 0

hamburgerIcon.addEventListener('click', () =>{
    clicked++    
    if(clicked % 2 == 1){
        hamburgerMenu.style.display = "block"
    }
    else{
        hamburgerMenu.style.display = "none"
    }
})