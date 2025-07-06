let menuImage = document.getElementById("menuImage");
menuImage.addEventListener("click", () => {
    menu();
})
function menu(){
    let menuFenster = document.getElementById("menuFenster").style;
    if(menuFenster.display === "inline-block"){
        menuFenster.display = "none";
    } else menuFenster.display = "inline-block";
};