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
// let senden = document.getElementById('senden');
// senden.addEventListener('click', ()=>{
//     sendEmail();
// })

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
        mainContainer.display = 'block';
        headerContainer.display = "block"
        siteMenuContainer.display = 'none'
    } else {
        mainContainer.display = 'none';
        headerContainer.display = "none";
        siteMenuContainer.display = 'block'
    }
}

function sendEmail(){
    let vorName = document.getElementById('vorName').value;
    let nachName = document.getElementById('nachName').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('telefon').value;
    let nachricht = document.getElementById('nachricht').value;
    if(vorName !== '' && nachName !== '' && email !== '' && nachricht !== ''){
        alert(` Hallo ${vorName} ${nachName},\n
                Email: ${email}\n
                Nachricht: ${nachricht}\n                
                Telefon Nummer: ${telefon||'-'}\n
                Vielen Dank! 💜`);
    } else{
        alert("Bitte alle Felder ausfüllen damit wir uns besser vorbereiten können!");
    }
}