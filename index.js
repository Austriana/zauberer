window.addEventListener('load', () => {
    let body = document.getElementById('body');
    body.classList.toggle('fadeIn');
});
let mainContainer = document.getElementById('mainContainer');
mainContainer.addEventListener('click', () => {
    if(burgerContainer.className === 'active'){
        burgerContainer.classList.toggle('active');
        siteMenu();
    };
});

const burgerContainer = document.getElementById('burgerContainer');
const siteMenuHome = document.getElementById("siteMenuHome");
const siteMenuTeam = document.getElementById("siteMenuTeam");
const siteMenuGutschein = document.getElementById("siteMenuGutschein");
const siteMenuLeistungen = document.getElementById("siteMenuLeistungen");
const siteMenuGeschäftsKunden = document.getElementById("siteMenuGeschäftsKunden");

const menuArray = [burgerContainer, siteMenuHome, siteMenuTeam, siteMenuLeistungen, siteMenuGeschäftsKunden, siteMenuGutschein];

menuArray.forEach( menu => {
    menu.addEventListener('click', () => {
        burgerContainer.classList.toggle('active');
        siteMenu();
    });
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
    };
};