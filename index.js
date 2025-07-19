let burgerContainer = document.getElementById('burgerContainer');
burgerContainer.addEventListener('click', () => {
    burgerContainer.classList.toggle('active');
    siteMenu();
});
let mainContainer = document.getElementById('mainContainer');
mainContainer.addEventListener('click', () => {
    if(burgerContainer.className === 'active'){
        burgerContainer.classList.toggle('active');
        siteMenu();
    };
});
let siteMenuHome = document.getElementById("siteMenuHome");
siteMenuHome.addEventListener("click", () => {
    burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuTeam = document.getElementById("siteMenuTeam");
siteMenuTeam.addEventListener("click", () => {
    burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuGutschein = document.getElementById("siteMenuGutschein");
siteMenuGutschein.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuLeistungen = document.getElementById("siteMenuLeistungen");
siteMenuLeistungen.addEventListener("click", () => {
    burgerContainer.classList.toggle('active');
    siteMenu();
});

let siteMenuKontakt = document.getElementById("siteMenuKontakt");
siteMenuKontakt.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuAgb = document.getElementById("siteMenuAgb");
siteMenuAgb.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuVersandRichtlinie = document.getElementById("siteMenuVersandRichtlinie");
siteMenuVersandRichtlinie.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuRückgabeRichtlinie = document.getElementById("siteMenuRückgabeRichtlinie");
siteMenuRückgabeRichtlinie.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});
let siteMenuImpressum = document.getElementById("siteMenuImpressum");
siteMenuImpressum.addEventListener("click", () => {
        burgerContainer.classList.toggle('active');
    siteMenu();
});

let senden = document.getElementById('senden');
senden.addEventListener('click', () => {
    sendEmail();
});

function siteMenu(){
    let siteMenuContainer = document.getElementById('siteMenuContainer')
    if(siteMenuContainer.style.visibility === 'visible'){
        siteMenuContainer.style.visibility = 'hidden';
        siteMenuContainer.classList.toggle('deactive');
        siteMenuContainer.classList.remove('active');
    } else{
        siteMenuContainer.style.visibility = 'visible';
        siteMenuContainer.classList.toggle('active');
        siteMenuContainer.classList.remove('deactive');
    }
};

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
        alert("Bitte alle Pflichtfelder ausfüllen damit wir uns besser vorbereiten können! Vielen Dank 💜");
    };
};