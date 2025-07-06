let menuImage = document.getElementById("menuImage");
menuImage.addEventListener("click", () => {
    menu();
})
let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    menu();
})

function menu(){
    let menuFenster = document.getElementById("menuFenster").style;
    if(menuFenster.display === "inline-block"){
        menuFenster.display = "none";
        menuImage.style.display = "inline-block";
    } else {
        menuFenster.display = "inline-block"
        menuImage.style.display = "none";
    };
};