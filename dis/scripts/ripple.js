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
  introduction.innerHTML = "è un protocollo peer-to-peer creato da Ripple Labs nel 2012 per il trasferimento globale di fondi in maniera sicura, istantanea e a basso costo. Concepito per essere utilizzato da banche e istituzioni finanziarie, viene definito da Ripple come una tecnologia infrastrutturale per le transazioni interbancarie. La valuta nativa utilizzata nel protocollo è il toke XRP. Tra le principali partnership di Ripple vi sono Accenture, American Express, Deloitte, Santander, UBS e Unicredit.";
  p1_title.innerHTML = "OVERVIEW TECNICA";
  p1_text.innerHTML = "Ripple punta a risolvere alcuni dei maggiori problemi che si trovano ad affrontare banche e istituzioni finanziari nel trasferire globalmente denaro, in particolare per i pagamenti transfrontalieri. Questo scenario richiede infatti che le banche mantengano costi in giurisdizioni estere in valuta locale (processo Nostro-Vostro). Il processo Nostro-Vostro per le transazioni internazionali con valuta fiat é lungo e costoso, richiedendo diversi giorni prima di sapere se sia andato a buon fine. Questo solitamente crea numerosi problemi ed elevati costi per chi ha la necessitá di trasferire denaro tra nazioni differenti, uno scenario in netto contrasto con un mondo nel quale le informazioni viaggiano istantaneamente in tutto il mondo grazie a Internet. Ripple ha perció creato un network di servizi, chiamato RippleNet, per interconnettere banche e istituti finanziari e ridurre drasticamente tempi e costi necessari per questo tipo di operazioni, diventando di fatto una soluzione alternativa al correntemente utilizzato circuito Swift.";
  p2_title.innerHTML = "TECNOLOGIA";
  p2_text.innerHTML = "Ripple utilizza una ledger distribuita pubblica, dove vengono salvate tutte le informazioni relative agli spostamenti di valore. Il consenso distribuito é raggiunto utilizzando un algoritmo di consenso distribuito chiamato RPCA (Ripple Protocol Consensus Algorithm). RPCA utilizza dei gruppi di nodi ritenuti affidabili dal network (UNL, Unique Node List). Almeno l'80% dei nodi dell'UNL deve considerare una transazione valida affinché venga inserita nella ledger. Questo algoritmo é molto efficiente e permette di generare un nuovo stato della ledger ogni 3-5 secondi, potendo raggiungere circa 1.500 tps. La ledger di XRP é collegata al mondo reale tramite i Gateway, che permettono al denaro e ad altre forme di valore di entrare e uscire dal network. I Gateway sono inoltre responsabili del rispetto di tutte le normative locali (KYC, AML, CFT) e di riportare alle autoritá eventuali casi sospetti.";
  p3_title.innerHTML = "XCURRENT";
  p3_text.innerHTML = "un servizio che consente alle banche di scambiare messaggi istantaneamente e facilitare le riconciliazioni bancarie nei pagamenti internazionali. Il servizio xCurrent non preve l'utilizzo di XRP.";
  p4_title.innerHTML = "XRAPID";
  p4_text.innerHTML = "aggiunge la possibilitá di regolare istantaneamente i conti tra due banche tramite l'utilizzo di XRP come moneta di scambio. La riconciliazioni avviene istantaneamente da parte di entrambe le banche e viene regolata dal servizio xRapid, perció gli scambi non influiscono in alcun modo sul prezzo di mercato della valuta XRP.";  
  p5_title.innerHTML = "XVIA";
  p5_text.innerHTML = "un servizio che consente agli utenti (societa e istituzioni) di sfruttare la tecnologia blockchain per monitorare gli spostamenti di denaro e accedere alle stesse informazioni a cui solitamente ha accesso una banca, cosí come inviare pagamenti su scala globale assieme ad altre informazioni (per esempio fatture).";
  p5_title.innerHTML = "POLITICA MONETARIA";
  p5_text.innerHTML = "XRP rientra tra le criptovalute non-minabili e tutti i token sono stati generati nel momento della creazione della ledger (pre-mined). XRP ha una quantitá massima di 100 miliardi di unitá e una quantitá circolante di circa 40. Ripple Labs é attualmente in possesso di oltre 50 miliardi di XRP in un deposito di garanzia. Ogni mese vengono rilasciati 1 miliardo di XRP, che Ripple utilizza per estendere l'adozione dei propri servizi.";
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  introduction.innerHTML = "is a peer-to-peer protocol created by Ripple Labs in 2012 for the global transfer of funds in a secure, instant and low-cost manner. Conceived to be used by banks and financial institutions, it is defined by Ripple as 'an infrastructure technology for interbank transactions'. The native currency used in the protocol is the XRP toke. Ripple's main partnerships include Accenture, American Express, Deloitte, Santander, UBS and Unicredit.";
  p1_title.innerHTML = "TECHNICAL OVERVIEW";
  p1_text.innerHTML = "Ripple aims to solve some of the biggest problems facing banks and financial institutions in transferring money globally, especially for cross-border payments. This scenario requires banks to maintain costs in foreign jurisdictions in local currency (Nostro-Vostro process). The Nostro-Vostro process for international fiat currency transactions is long and expensive, taking several days to know if it is successful. This usually creates numerous problems and high costs for those who need to transfer money between different countries, a scenario in stark contrast to a world in which information travels instantly all over the world thanks to the Internet. Ripple has therefore created a network of services, called RippleNet, to interconnect banks and financial institutions and drastically reduce the time and costs required for this type of operation, effectively becoming an alternative solution to the currently used Swift circuit.";
  p2_title.innerHTML = "TECHNOLOGY";
  p2_text.innerHTML = "Ripple uses a public distributed ledger, where all information relating to value shifts is saved. Distributed consensus is achieved using a distributed consensus algorithm called RPCA (Ripple Protocol Consensus Algorithm). RPCA uses groups of nodes considered reliable by the network (UNL, Unique Node List). At least 80% of the UNL nodes must consider a valid transaction to be inserted into the ledger. This algorithm is very efficient and allows to generate a new state of the ledger every 3-5 seconds, being able to reach about 1,500 tps. The XRP ledger is connected to the real world via Gateways, which allow money and other forms of value to enter and exit the network. The Gateways are also responsible for complying with all local regulations (KYC, AML, CFT) and for reporting any suspected cases to the authorities.";
  p3_title.innerHTML = "XCURRENT";
  p3_text.innerHTML = "a service that allows banks to exchange messages instantly and facilitate bank reconciliations in international payments. The xCurrent service does not require the use of XRP.";
  p4_title.innerHTML = "XRAPID";
  p4_text.innerHTML = "adds the ability to instantly settle accounts between two banks using XRP as a bargaining chip. The reconciliation happens instantly by both banks and is settled by the xRapid service, because the exchanges do not affect the market price of the XRP currency in any way.";  
  p5_title.innerHTML = "XVIA";
  p5_text.innerHTML = "a service that allows users (companies and institutions) to exploit blockchain technology to monitor the movement of money and access the same information that a bank usually has access to, as well as send payments on a global scale together with other information (for example invoices ).";
  p6_title.innerHTML = "MONETARY POLICY";
  p6_text.innerHTML = "XRP is one of the non-minable cryptocurrencies and all tokens were generated when the ledger was created (pre-mined). XRP has a maximum amount of 100 billion units and an outstanding amount of approximately 40. Ripple Labs currently holds over 50 billion XRP in escrow. 1 billion XRPs are released each month, which Ripple uses to extend the adoption of its services.";
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

   crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=619&pref_coin_id=1505";

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

    crypto_iframe.src = "https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=619&pref_coin_id=1505";


}
