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
const p5_title = document.getElementById("p5_title");
const p5_text = document.getElementById("p5_text");
const p6_title = document.getElementById("p6_title");
const p6_text = document.getElementById("p6_text");

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
  introduction.innerHTML = "É un ecosistema basato su blockchain per lo sviluppo di applicazioni decentralizzate, concettualemente simile a Ethereum. É stato co-fondato da Dan Larimer, giá creatore di altri progetti come Bitshares e Steem. L'ecosistema EOS é composta da due elementi: il token EOS e la piattaforma EOS.IO. EOS.IO é una blockchain che utilizza il token EOS come criptovaluta nativa. Il token EOS garantisce al possessore una determinata porzione di risorse sul network, le quali se non utilizzate possono essere affittate ad altri utenti. EOS viene spesso considerato come il competitor pricipale di Ethereum.";
  p1_title.innerHTML = "OVERVIEW TECNICA";
  p1_text.innerHTML = "Ethereum è attualemente il progetto più conosciuto e utilizzato per la creazione di applicazioni decentralizzate, però soffre di diversi problemi come i limiti di scalabilità, un basso throughput e costi di transazione elevati, che ne stanno frenando l'adozione. EOS.IO ha come obiettivo quello di concentrare in un'unica piattaforma tutte le migliori caratteristiche di diverse blockchain, come la sicurezza del Bitcoin e la versalità dell'Ethereum.";
  p2_title.innerHTML = "TECNOLOGIA";
  p2_text.innerHTML = "EOS utilizza una variazione del Proof of Stake come protocollo di consenso, chiamato Delegated Proof of Stake (DPoS). In questo modello non ci sono miner, ma 21 block producer (produttori di blocchi), eletti dai possessori di token EOS e ricompensati con dei token EOS. Si può pensare al DPoS come una democrazia rappresentativa, mentre il PoS sarebbe una democrazia diretta. I block producer sono sottoposti a un continuo processo di voto da parte di tutti i possessori di token EOS, che possono eventualmente rimuovere uno specifico nodo se si comporta in maniera scorretta. Questo sistema permette la generazione di nuovi blocchi in maniera estremamente rapida, risolvendo gran parte dei problemi di scalabilità. Come però già discusso nel trilemma della scalabilità, non è possibile avere contemporaneamente sicurezza, scalabilità e decentralizzazione, ma bisogna trovare un compromesso. Ethereum ha scelto sicurezza e decntralizzazione, a costo di una scalabilità ridotta. EOS riduce la decentralizzazione, incaricando 21 rappresentanti dell'intero processo di consenso, e permettendo di ottenere una scalabilità superiore. Attualmente un nuovo blocco viene generato ogni 0,5 secondi con un throughput finale di circa 3.000 tps in media.";
  p3_title.innerHTML = "POLITICA MONETARIA";
  p3_text.innerHTML = "Al lancio di EOS sono stati generati 1 miliardo di token. Ogni anno la quantità totale viene incrementata del 5%. I nuovi token generati vengono utilizzati per esempio per ricompensare i nodi che contribuiscono alla verifica delle transazioni e alla produzione dei blocchi. Il token EOS ha superato i $15 miliardi di market cap a maggio 2018.";
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  introduction.innerHTML = "It is a blockchain-based ecosystem for developing decentralized applications, conceptually similar to Ethereum. It was co-founded by Dan Larimer, already creator of other projects such as Bitshares and Steem. The EOS ecosystem is composed of two elements: the EOS token and the EOS.IO platform. EOS.IO is a blockchain that uses the EOS token as a native cryptocurrency. The EOS token guarantees the owner a certain portion of resources on the network, which if not used can be rented to other users. EOS is often regarded as Ethereum's main competitor.";
  p1_title.innerHTML = "TECHNICAL OVERVIEW";
  p1_text.innerHTML = "Ethereum is currently the best known and most used project for creating decentralized applications, but it suffers from several problems such as scalability limits, low throughput and high transaction costs, which are holding back its adoption. EOS.IO aims to concentrate all the best features of different blockchains in a single platform, such as the security of Bitcoin and the versatility of Ethereum.";
  p2_title.innerHTML = "TECHNOLOGY";
  p2_text.innerHTML = "EOS uses a variation of Proof of Stake as a consensus protocol, called Delegated Proof of Stake (DPoS). In this model there are no miners, but 21 block producers, elected by EOS token holders and rewarded with EOS tokens. One can think of the DPoS as a representative democracy, while the PoS would be a direct democracy. The block producers are subjected to a continuous voting process by all EOS token holders, who can eventually remove a specific node if it behaves incorrectly. This system allows the generation of new blocks in extremely quickly, solving most of the scalability problems. However, as already discussed in the scalability trilemma, it is not possible to have security, scalability and decentralization at the same time, but a compromise must be found. Ethereum has chosen security and decntralization, at the cost of reduced scalability. EOS reduces decentralization, employing 21 representatives of the entire consensus process, and allowing for superior scalability. Currently a new block is generated every 0.5 seconds with a final throughput of approximately 3,000 tps on average. ";
  p3_title.innerHTML = "MONETARY POLICY";
  p3_text.innerHTML = "At the launch of EOS, 1 billion tokens were generated. Each year the total quantity is increased by 5%. The new tokens generated are used for example to reward nodes that contribute to the verification of transactions and the production of blocks. The EOS token surpassed the $ 15 billion market cap in May 2018.";
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

   crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=585&pref_coin_id=1505";

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

    crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=585&pref_coin_id=1505";


}
