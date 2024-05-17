// [ Slider ] //
TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
// t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
// t1.to("#js-slideContainer", 0.5, { xPercent: -80 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "300%",
}).setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);


// [SCROLL TO TOP] //
const nav = document.querySelector("nav")
const btn = document.querySelector(".scrollToTop")

window.onscroll = function() {scrollFunction()}

// La fonction "scrollFunction" Verifie si l'utilisateur a assez scroll vers le bas afin :
// d'afficher le bouton "scroll to top" et faire disparaitre la navbar si les conditions sont replies
// d'afficher la navbar et faire disparaitre le bouton "scroll to top" si l'utilisateur revient en haut de la page
scrollFunction = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        btn.style.display = "block"
        nav.style.top = "-100px"
    } else {
        btn.style.display = "none"
        nav.style.top = "0px"
    }
}

// La fonction "topFunction" permet de remonter en haut de la page, celui-ci est activé lorsque l'utilisateur cliquer sur le bouton "scroll to top"
topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}


// [ MENU HAMBURGER ] //
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
})

