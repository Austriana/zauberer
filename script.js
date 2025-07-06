let menuImage = document.getElementById("menuImage");
menuImage.addEventListener("click", () => {
    menu();
})
function menu(){
    let menuFenster = document.getElementById("menuFenster").style;
    if(menuFenster.display === "none"){
        menuFenster.display = "inline-block";
    } else menuFenster.display = "none";
};