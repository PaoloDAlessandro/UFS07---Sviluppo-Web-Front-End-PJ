"use strict";

const path = window.location.pathname;
const mobile_nav = document.getElementById("mobile-nav");
const mobile_nav_link = document.querySelector("#hamburgher");
const curtain_nav = document.querySelector(".curtain-nav");
const mobile_a = document.querySelectorAll(".curtain-nav ul li a");
const mode_icon = document.querySelectorAll("#mode_icon, #mode_icon_mobile");
const header = document.getElementById("header");
const body = document.body;
const logo = document.getElementById("site_logo");
const footer = document.getElementById("footer");
const lang_icon = document.getElementById("lang_icon");
const lang_icon_mobile = document.getElementById("lang_icon_mobile");
const crypto_subtitle = document.querySelectorAll(".crypto-container-box-text_sub-title");
const crypto_p = document.querySelectorAll(".crypto-container-box-text_paragraph");
const crypto_name = document.querySelector(".crypto-container-box-text h1");
const crypto_iframe = document.querySelector("#crypto_iframe");
const introduction = document.getElementById("introduction");
const p1_title = document.getElementById("p1_title");
const p1_text = document.getElementById("p1_text");
const p2_title = document.getElementById("p2_title");
const p2_text = document.getElementById("p2_text");


if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode", 0);
}

if (localStorage.getItem("mode") == 0) {
  lightMode();
} else {
  darkMode();
}

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", 0);
}

if (localStorage.getItem("lang") == 0) {
  enLang();
} else {
  itLang();
}

function openmobilenav() {
  mobile_nav_link.href = "javascript:closemobilenav()";
  curtain_nav.style.display = "block";
  mobile_nav_link.style.transform = "rotate(90deg)";
}

function closemobilenav() {
  mobile_nav_link.href = "javascript:openmobilenav()";
  curtain_nav.style.display = "none";
  mobile_nav_link.style.transform = "rotate(0deg)";
}

function changeLang() {
  if (localStorage.getItem("lang") == 0) {
    itLang();
  } else {
    enLang();
  }
}

function changeMode() {
  if (localStorage.getItem("mode") == 0) {
    darkMode();
  } else {
    lightMode();
  }
}

function itLang() {
  localStorage.setItem("lang", 1);
  lang_icon.src = "assets/img/en.png";
  lang_icon_mobile.src = "assets/img/en.png";
  introduction.innerHTML = "É una piattaforma per l'esecuzione di smart contract rilasciata nel 2017, concettualmente simile a Ethereum ma strutturata su diversi livelli, ognuno incentrato su particolari caratteristiche come scalabilitá o sicurezza. Cardano é sviluppato da IOHK, una societá che si occupa dello sviluppo di tecnologie peer-to-peer diretta da Charles Hoskinson, giá membro fondatore di Ethereum. Per il design della propria piattaforma, Cardano ha utilizzato un approccio scientifico, sottoponendo le diverse componenti del sistema a ricerche accademiche peer-reviewed. Puó essere quindi visto come un progetto guidato da un rigoroso approccio scientifico.";
  p1_title.innerHTML = "OVERVIEW TECNICA";
  p1_text.innerHTML = "Cardano si inserisce tra i progetti che cercano di risolvere alcuni problemi intrinsechi della prima generazione di blockchain, come per esempio la scalabilitá e la velocitá delle transazioni. Il focus é quindi quello di costruire un ecosistema blockchain piú sostenibile e bilanciato. É composto principalmente da due livelli: il Cardano Settlement Layes (CSL), utilizzato per regolare le transazioni che usano ADA, e il Control Layer, utilizzato per eseguire smart contract. Il protocollo di consenso utilizzato si chiama Ouroboros ed é basato sul Proof of Stake.";
  p2_title.innerHTML = "POLITICA MONETARIA";
  p2_text.innerHTML = "ADA é una criptovaluta minabile con una quantitá massima di 45 miliardi, una quantitá circolante di circa 31 miliardi. Attualmente a toccato il suo picco storico con un market cap di 56 miliardi di dollari.";
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  introduction.innerHTML = "It is a platform for the execution of smart contracts released in 2017, conceptually similar to Ethereum but structured on different levels, each one focused on particular characteristics such as scalability or security. Cardano is developed by IOHK, a peer-to-peer technology development company headed by Charles Hoskinson, former founding member of Ethereum. For the design of its platform, Cardano used a scientific approach, subjecting the different components of the system to peer-reviewed academic research. It can therefore be seen as a project guided by a rigorous scientific approach.  ";
  p1_title.innerHTML = "TECHNICAL OVERVIEW";
  p1_text.innerHTML = "Cardano is part of the projects that try to solve some intrinsic problems of the first generation of blockchains, such as the scalability and speed of transactions. The focus is therefore on building a more sustainable and balanced blockchain ecosystem. It is mainly composed of two layers: the Cardano Settlement Layes (CSL), used to settle transactions that use ADA, and the Control Layer, used to execute smart contracts. The consensus protocol used is called Ouroboros and is based on the Proof of Stake.  ";
  p2_title.innerHTML = "MONETARY POLICY";
  p2_text.innerHTML = "ADA is a mineable cryptocurrency with a maximum amount of 45 billion, a circulating amount of approximately 31 billion. It currently reaches its historic peak with a market cap of $ 56 billion.  ";
}



function lightMode() {
  localStorage.setItem("mode", 0);
  header.style.backgroundColor = "#FFFFFF";
  header.style.boxShadow = "rgb(99 99 99 / 20%) 0px 2px 8px 0px";
  body.style.backgroundColor = "rgb(255, 255, 255)";
  logo.src = "assets/img/logo.png";
  curtain_nav.style.backgroundColor = "#FFFFFF";
  footer.style.backgroundColor = "#171924";
  mode_icon.forEach(function (element) {
    element.innerHTML = '<i class="fa-solid fa-moon"></i>';
});

   crypto_p.forEach(el => {
   el.style.color = "#5C6771";
   });

   crypto_subtitle.forEach(el => {
    el.style.color = "#343352";
   });

   crypto_name.style.color = "#343352";

   crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=122882&pref_coin_id=1505";

}

function darkMode() {
    localStorage.setItem("mode", 1);
    logo.src = "assets/img/logo-white.png";
    header.style.backgroundColor = "#292C33";
    header.style.boxShadow = "none";
    body.style.backgroundColor = "#171924";
    curtain_nav.style.backgroundColor = "#292C33";
    footer.style.backgroundColor = "#17171A";
    mode_icon.forEach(function (element) {
        element.innerHTML = '<i class="fa-solid fa-sun"></i>';
    });
    
    crypto_p.forEach(el => {
      el.style.color = "#8b95a3";
    });

    crypto_subtitle.forEach(el => {
        el.style.color = "#f0eded";
       });

    crypto_name.style.color = " #f0eded";

    crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=122882&pref_coin_id=1505";


}
