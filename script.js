let container = document.getElementById('container');
container.addEventListener('click', ()=>{
    container.classList.toggle('active');
    siteMenu();
});
let siteMenuHome = document.getElementById("siteMenuHome");
siteMenuHome.addEventListener("click", () => {
    container.classList.toggle('active');
    siteMenu();
});
let siteMenuLeistungen = document.getElementById("siteMenuLeistungen");
siteMenuLeistungen.addEventListener("click", () => {
    container.classList.toggle('active');
    siteMenu();
});
let siteMenuTeam = document.getElementById("siteMenuTeam");
siteMenuTeam.addEventListener("click", () => {
    container.classList.toggle('active');
    siteMenu();
});
let siteMenuKontakt = document.getElementById("siteMenuKontakt");
siteMenuKontakt.addEventListener("click", () => {
        container.classList.toggle('active');
    siteMenu();
});
let senden = document.getElementById('senden');
senden.addEventListener('click', ()=>{
    sendEmail();
});

function siteMenu(){
    let siteMenuContainer = document.getElementById('siteMenuContainer')
    siteMenuContainer.classList.toggle('active')
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
        alert("Bitte alle Felder ausfüllen damit wir uns besser vorbereiten können!");
    }
};