window.addEventListener('load', () => {
    let body = document.getElementById('body');
    body.classList.toggle('fadeIn');
})
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
let siteMenuGeschäftsKunden = document.getElementById("siteMenuGeschäftsKunden");
siteMenuGeschäftsKunden.addEventListener("click", () => {
    burgerContainer.classList.toggle('active');
    siteMenu();
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