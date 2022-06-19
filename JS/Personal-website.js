// ---navbar---
var navbar = document.getElementById("nav-desktop");
var menu = document.getElementById("nav-ul");
var buttonLetsTalk = document.getElementById("home-title");
var upsite = document.getElementById("upsite");
var btnLetsTalkNav = document.getElementById("letstalk-btn")
var body = document.getElementById("body");
var imgHomeText = document.getElementById("Home-text-right-img");
window.onscroll = function(){
    if(window.pageYOffset > imgHomeText.offsetTop){
      navbar.classList.add("navbar-sticky");
      upsite.style.display="block";
    } 
    else{
      navbar.classList.remove("navbar-sticky");
      upsite.style.display="none";
    }
};

// menu

const navPhoneUl = document.querySelector(".nav-phone-ul");
const navPhoneTabsClick = document.querySelector(".nav-phone-tabs-click");
const navPhoneTabs = document.querySelector(".nav-phone-tabs");

const menuIcon3 = document.querySelector(".menu-icon-3");
const menuIcon2 = document.querySelector(".menu-icon-2");
const menuIcon1 = document.querySelector(".menu-icon-1");

const navDesktopBack = document.querySelector(".nav-desktop-back");
const navPhone = document.querySelector(".nav-phone");
const menuIcon = document.querySelector("#menu-icon");


menuIcon.addEventListener("click",openMenu);
navPhoneTabsClick.addEventListener("click",closeMenu);
navPhoneUl.addEventListener("click",closeMenu);

function openMenu (){
  navPhone.classList.toggle("nav-phone-click")
  navDesktopBack.classList.toggle("nav-desktop-back-click");
  menuIcon3.classList.toggle("menu-icon-3-click");
  menuIcon2.classList.toggle("menu-icon-2-click");
  menuIcon1.classList.toggle("menu-icon-1-click");
}
function closeMenu (){
  navPhone.classList.remove("nav-phone-click")
  navDesktopBack.classList.remove("nav-desktop-back-click");
  menuIcon3.classList.remove("menu-icon-3-click");
  menuIcon2.classList.remove("menu-icon-2-click");
  menuIcon1.classList.remove("menu-icon-1-click");
}

// contact email

var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
    status.classList.add("status-sub");
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.classList.add("status-error");
  });
}
form.addEventListener("submit", handleSubmit)

// letsTalk page

const letsTalkBtn = document.querySelector(".home-text-button");
const letsTalkBtn2 = document.querySelector(".letstalk-btn-media");
const letsTalkBtn3 = document.querySelector(".letstalk-btn");
const letsTalkPage = document.querySelector("#letstalk-page");

const letsTalkPageBack = document.querySelector(".letstalk-page-back");
const closeLetsTalk = document.querySelector(".close-letstalk-page");

function openTalkPage (){
  letsTalkPage.style.opacity=1;
  letsTalkPage.style.top="50%";
  letsTalkPageBack.style.opacity=1;
  letsTalkPageBack.style.display="block";
}
function closeTalkPage (){
  letsTalkPage.style.opacity=0;
  letsTalkPage.style.top="-100vh";
  letsTalkPageBack.style.opacity=0;
  letsTalkPageBack.style.display="none";
};

letsTalkBtn.addEventListener("click",openTalkPage);
letsTalkBtn2.addEventListener("click",openTalkPage);
letsTalkBtn3.addEventListener("click",openTalkPage);
letsTalkPageBack.addEventListener("click",closeTalkPage);
closeLetsTalk.addEventListener("click",closeTalkPage);

// date
function setInputDate(_id){
  var _dat = document.querySelector(_id);
  var hoy = new Date(),
      d = hoy.getDate(),
      m = hoy.getMonth()+1, 
      y = hoy.getFullYear(),
      data;

  if(d < 10){
      d = "0"+d;
  };
  if(m < 10){
      m = "0"+m;
  };

  data = y+"-"+m+"-"+d;
  console.log(data);
  _dat.value = data;
};

setInputDate("#dateDefault");



//---------------     Services  page     --------------
const servicesBack = document.querySelector(".service-text-back");
const services = document.querySelectorAll(".service-text-web");

const servicesWeb = document.querySelector("#service-text-web");
const servicesUser = document.querySelector("#service-text-user");
const servicesVisual = document.querySelector("#service-text-visual");
const servicesMobile = document.querySelector("#service-text-mobile");
const servicesLogo = document.querySelector("#service-text-logo");
const servicesPrint = document.querySelector("#service-text-print");
 
const servicesBlur = document.querySelector(".service-text-blur");

// btns
const btnWeb = document.querySelector("#Services-btn-web");
const btnUser = document.querySelector("#Services-btn-user");
const btnVisual = document.querySelector("#Services-btn-visual");
const btnMobile = document.querySelector("#Services-btn-mobile");
const btnLogo = document.querySelector("#Services-btn-logo");
const btnPrint = document.querySelector("#Services-btn-print");
const closeBtnServces = document.querySelector(".service-close-btn");
// listener
servicesBlur.addEventListener("click",closeServices);

btnWeb.addEventListener("click",addWeb);
btnUser.addEventListener("click",addUser);
btnVisual.addEventListener("click",addVisual);
btnMobile.addEventListener("click",addMobile);
btnLogo.addEventListener("click",addLogo);
btnPrint.addEventListener("click",addPrint);


closeBtnServces.addEventListener("click",closeServices);

// functions

function closeServices (){
  servicesBack.style.display="none";
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
}


function addWeb (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesWeb.style.display="block";
}
function addUser (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesUser.style.display="block";
}
function addVisual (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesVisual.style.display="block";
}
function addMobile (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesMobile.style.display="block";
}
function addLogo (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesLogo.style.display="block";
}
function addPrint (){
  // services.style.display="none"
  servicesWeb.style.display="none";
  servicesUser.style.display="none";
  servicesVisual.style.display="none";
  servicesMobile.style.display="none";
  servicesLogo.style.display="none";
  servicesPrint.style.display="none";
  servicesBack.style.display="unset";
  servicesPrint.style.display="block";
}