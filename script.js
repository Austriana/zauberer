let menuImage = document.getElementById("menuImage");
menuImage.addEventListener("click", () => {
    menu();
})
let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
    menu();
})
let siteMenuImage = document.getElementById("siteMenuImage");
siteMenuImage.addEventListener("click", () => {
    siteMenu();
})
let siteMenuHome = document.getElementById("siteMenuHome");
siteMenuHome.addEventListener("click", () => {
    siteMenu();
})
let siteMenuLeistungen = document.getElementById("siteMenuLeistungen");
siteMenuLeistungen.addEventListener("click", () => {
    siteMenu();
})
let siteMenuTeam = document.getElementById("siteMenuTeam");
siteMenuTeam.addEventListener("click", () => {
    siteMenu();
})
let siteMenuKontakt = document.getElementById("siteMenuKontakt");
siteMenuKontakt.addEventListener("click", () => {
    siteMenu();
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

function siteMenu(){
    let headerContainer = document.getElementById('headerContainer').style;
    let mainContainer = document.getElementById('mainContainer').style;
    let siteMenuContainer = document.getElementById('siteMenuContainer').style
    if (mainContainer.display === 'none') {
        mainContainer.display = 'inline-block';
        headerContainer.display = "block"
        siteMenuContainer.display = 'none'
    } else {
        mainContainer.display = 'none';
        headerContainer.display = "none";
        siteMenuContainer.display = 'block'
    }
}