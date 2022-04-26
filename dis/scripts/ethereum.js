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
  introduction.innerHTML = "Puó essere visto come un computer globale, nel quale i programmi (chiamati smart contract) sono eseguiti in modo decentralizzato, continuo e senza censure.";
  p1_title.innerHTML = "OVERVIEW TECNICA";
  p1_text.innerHTML = "Ethereum é una blockchain non specializzata, ovvero una blockchain che non ha uno scopo specifico ma puó essere programmata, tramite l'utilizzo di smart contract, per adattarsi a diversi scenari (blockchain generalizzata). La blockchain é pubblica, senza autorizzazioni e utilizza un algoritmo di consenso basato sul Proof of Work, con un tempo di blocco di circa 10-20 secondi. Tuttavia Ethereum sta pianificando la migrazione a un protocolo Proof of Stake chiamato Casper.";
  p2_title.innerHTML = "POLITICA MONETARIA";
  p2_text.innerHTML = "Ethereum utilizza una propria valuta, denominata Ether (ETH). Al momento non esiste una quantitá massima di ETH e il tasso di inflazione viene controllato limitando il numero di ETH generati ogni anno. Ci sono diverse proposte per l'imposizione di una quantitá massima in futuro.";
  p3_title.innerHTML = "GAS";
  p3_text.innerHTML = "il token ETH é utilizzato per pagare il gas, un'unitá di misura usata per determinare la quantitá di calcolo necessaria per eseguire un'operazione sulla blockchain. Il gas necessario per effettuare un'operazione viene spesso paragonato al carburante usato da un'automobile per compiere il tragitto. Ogni operazione sulla blockchain ha un costo definito. Il gas é un concetto esclusivamente collegato alle transazioni (non esiste un token gas in Ethereum). Ogni transazione effettuata su Ethereum ha due parametri: il prezzo del gas e il limite di gas. In Ethereum non esiste il concetto di dimensione massima di un blocco come nel Bitcoin, ma piuttosto si fa riferimento al limite di gas di un blocco, che definisce la massima quantitá di calcoli per ogni secondo.";
  p4_title.innerHTML = "ACCOUNT E INDIRIZZI";
  p4_text.innerHTML = "In Ethereum esistono due tipi di account: account non associati a smart contract e account associati a smart contract. Un account normale puó ricevere e inviare transazioni, ma non é associato a nessun smart contract e di solito é controllato da una persona. Un account associato a uno smart contract, invece, contiene al suo interno un programma che si attiva quando l'indirizzo a esso associato riceve una transazione, comportandosi come definito nello smart contract.";  
  p5_title.innerHTML = "EVM";
  p5_text.innerHTML = "L'Ethereum Virtual Machine (EVM) é l'ambiente all'interno del quale viene eseguito uno smart contract. Una Virtual Machine é un software che contiene al suo interno un sistema operativo completamente incapsulato. Per esempio é possibile utilizzare una macchina virtuale per utilizzare Windows all'interno di MacOs. Le macchine virtuali sono comode per separare due ambienti e far sí che siano completamente indipendenti. L'EVM garantisce che ogni contratto venga eseguito nello stesso modo su ogni (full) node, in un ambiente isolato e sicuro. Lo stato dell'EVM viene salvato sulla blockchain.";
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  introduction.innerHTML = "It can be seen as a global computer, in which programs (called smart contracts) are executed in a decentralized, continuous and uncensored way.";
  p1_title.innerHTML = "TECHNICAL OVERVIEW";
  p1_text.innerHTML = "Ethereum is a non-specialized blockchain, i.e. a blockchain that does not have a specific purpose but can be programmed, through the use of smart contracts, to adapt to different scenarios (generalized blockchain). The blockchain is public, without authorizations and uses a consensus algorithm based on the Proof of Work, with a block time of about 10-20 seconds. However Ethereum is planning to migrate to a Proof of Stake protocol called Casper.";
  p2_title.innerHTML = "MONETARY POLICY";
  p2_text.innerHTML = "Ethereum uses its own currency, called Ether (ETH). There is currently no maximum amount of ETH and the inflation rate is controlled by limiting the number of ETH generated each year. There are several proposals for the imposition of a maximum amount in the future.";
  p3_title.innerHTML = "GAS";
  p3_text.innerHTML = "the ETH token is used to pay for gas, a unit of measurement used to determine the amount of computation needed to perform an operation on the blockchain. The gas needed to carry out an operation is often compared to the fuel used by a car to make the journey. Each operation on the blockchain has a defined cost. Gas is a concept exclusively related to transactions (there is no gas token in Ethereum). Every transaction made on Ethereum has two parameters: the gas price and the gas limit. In Ethereum there is no concept of the maximum size of a block as in Bitcoin, but rather refers to the gas limit of a block, which defines the maximum amount of calculations per second.";
  p4_title.innerHTML = "ADDRESSES AND PRIVACY";
  p4_text.innerHTML = "There are two types of accounts in Ethereum: accounts not associated with smart contracts and accounts associated with smart contracts. A normal account can receive and send transactions, but it is not associated with any smart contract and is usually controlled by a person. An account associated with a smart contract, on the other hand, contains a program that is activated when the address associated with it receives a transaction, behaving as defined in the smart contract.";  
  p5_title.innerHTML = "EVM";
  p5_text.innerHTML = "The Ethereum Virtual Machine (EVM) is the environment within which a smart contract is executed. A Virtual Machine is software that contains a fully encapsulated operating system. For example it is possible to use a virtual machine to use Windows within MacOs. Virtual machines are convenient for separating two environments and making them completely independent. The EVM ensures that every contract is executed the same way on every (full) node, in an isolated and secure environment. The state of the EVM is saved on the blockchain.";
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

   crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=145&pref_coin_id=1505";

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

    crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=145&pref_coin_id=1505";


}
