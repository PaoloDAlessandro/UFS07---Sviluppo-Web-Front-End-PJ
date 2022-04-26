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
const p3_title = document.getElementById("p3_title");
const p3_text = document.getElementById("p3_text");
const p4_title = document.getElementById("p4_title");
const p4_text = document.getElementById("p4_text");

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
  introduction.innerHTML = "Una versione puramente peer-to-peer di denaro elettronico consentirebbe di inviare i pagamenti online direttamente da una entità all'altra senza passare attraverso un istituto finanziario.";
  p1_title.innerHTML = "OVERVIEW TECNICA";
  p1_text.innerHTML = "Il bitcoin é una criptovaluta minabile con un protocollo di consenso basato sul Proof of Work. Ogni volta che un nuovo blocco viene creato, il sistema genera anche una quantitá definita di bitcoin che viene usata come ricompensa per il miner che crea il blocco. I miner generano un nuovo blocco mediamente ogni 10 minuti, e ricevano una ricompensa in forma di bitcoin e commissioni di transazione.";
  p2_title.innerHTML = "POLITICA MONETARIA";
  p2_text.innerHTML = "Inizialmente il premio per la generazione di un blocco era di 50 BTC. Ogni 210.000 blocchi (4 anni) la ricompensa del blocco viene dimezzata (attualmente é 6,25 BTC). La quantitá massima di bitcoin che potrá mai essere in circolazione é fissata a 21 milioni. L'inflazione nel Bitcoin é definita matematicamente. Fino ad oggi sono stati creati circa 18 milioni di bitcoin, su un totale di 21 milioni. Ció significa che il bitcoin raggiungerá asintoticamente la quantitá massima intorno al 2140. Per questa particolare politica monetaria, il Bitcoin é quindi da molti definito un sistema deflazionario.";
  p3_text.innerHTML = "Nel Bitcoin il mining utilizza il Proof of Work che si basa sulal risoluzione di un problema complesso per il quale é necessaria molta potenza computazionale. A causa della bassa probablitá di trovare un blocco, i miner hanno realizzato che era piú conveniente raggrupparsi e suddividere il problema del mining in piú parti, assegnando ciascuna parte a un miner differente. Al momento la maggior parte del mining di Bitcoin é raggruppata in grandi mining pool, e le prime cinque mining pool controllano oltre il 50% dell'hashrate totale.";
  p4_title.innerHTML = "INDIRIZZI E PRIVACY";
  p4_text.innerHTML = "Bitcoin utilizza una blockchain pubblica (le transazioni sono accessibili e analizzabili da chiunque). É possibile quindi visionare tutte le transazioni in cui é stato coinvolto un indirizzo specifico. Tuttavia, l'indirizzo pubblico non fornice alcuna informazione diretta sul proprietario di quell'indirizzo. Questo é considerato un modello pseudo-anonimo, il che significa che i fondi non sono legati a delle entitá del mondo reale ma piuttosto a degli indirizzi che sono pubblici ma allo stesso tempo anonimi.";
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  introduction.innerHTML = "A purely peer-to-peer version of electronic money would allow online payments to be sent directly from one entity to another without going through a financial institution.";
  p1_title.innerHTML = "TECHNICAL OVERVIEW";
  p1_text.innerHTML = "Bitcoin is a mineable cryptocurrency with a consensus protocol based on the Proof of Work. Each time a new block is created, the system also generates a defined amount of bitcoins which is used as a reward for the miner who creates the block. Miners generate a new block every 10 minutes on average, and receive a reward in the form of bitcoin and transaction fees.";
  p2_title.innerHTML = "MONETARY POLICY";
  p2_text.innerHTML = "The initial block generation premium was 50 BTC. Every 210,000 blocks (4 years) the block reward is halved (currently 6.25 BTC). The maximum amount of bitcoins that can ever be in circulation is set at 21 million. Inflation in Bitcoin is mathematically defined. To date, around 18 million bitcoins have been created, out of a total of 21 million. This means that bitcoin will reach its maximum asymptotically around 2140. For this particular monetary policy, Bitcoin is therefore defined by many as a deflationary system.";
  p3_text.innerHTML = "In Bitcoin mining uses the Proof of Work which is based on the resolution of a complex problem that requires a lot of computational power. Due to the low probability of finding a block, miners realized that it was more convenient to group and divide the mining problem into several parts, assigning each part to a different miner. At the moment most Bitcoin mining is grouped into large mining pools, and the top five mining pools control over 50% of the total hashrate.";
  p4_title.innerHTML = "ADDRESSES AND PRIVACY";
  p4_text.innerHTML = "Bitcoin uses a public blockchain (transactions are accessible and can be analyzed by anyone). It is therefore possible to view all the transactions in which a specific address has been involved. However, the public address does not provide any direct information about the owner of that address. This is considered a pseudo-anonymous model, which means that the funds are not tied to real world entities but rather to addresses that are public but at the same time anonymous.";  
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

   crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=859&pref_coin_id=1505";

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

    crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=859&pref_coin_id=1505";


}
