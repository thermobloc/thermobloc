const sections = {
  concept: {
    title: "Notre concept",
    text: "Thermobloc propose une approche innovante pour simplifier les projets de construction, que ce soit en milieu urbain dense ou dans le cadre d’un projet d’autoconstruction. Notre solution vise à réduire les contraintes liées à l’utilisation d’équipements lourds, tout en offrant une mise en œuvre efficace et adaptée aux réalités du terrain.",
    cards: [
      {
        title: "Milieux urbains",
        text: "Une approche pensée pour les endroits où l’espace, l’accès et la circulation compliquent les travaux."
      },
      {
        title: "Moins de contraintes",
        text: "Réduire la dépendance à certains équipements lourds et limiter les impacts sur l’environnement immédiat."
      },
      {
        title: "Solution modulaire",
        text: "Un concept basé sur des éléments adaptés à une mise en œuvre plus souple et progressive. Notre objectif : simplifier le chantier et réduire autant que possible les coûts de construction."
      }
    ]
  },

  solutions: {
  title: "Nos solutions",
  text: "Thermobloc propose des solutions écoénergétiques pensées pour les projets où l’espace, l’accès, l’isolation et la logistique représentent un défi. Grâce à une approche modulaire, à des blocs de béton adaptés au climat canadien et à une méthode de pose mécanisée, Thermobloc vise à simplifier la construction dans les environnements exigeants.",
  cards: [
    {
      title: "Blocs adaptés au climat canadien",
      text: `
        Des éléments conçus pour faciliter la manipulation et l’installation dans des conditions réelles de chantier.
        <ul>
          <li>Valeur isolante supérieure R&#8209;25</li>
          <li>Sans pont thermique</li>
          <li>Résistance au feu de 4 h</li>
          <li>Transmission du son STC 64</li>
          <li>Mur de cisaillement naturel (shear wall)</li>
        </ul>
      `
    },
    {
      title: "Pose mécanisée",
      text: "Une méthode visant à rendre la mise en place plus efficace sans dépendre systématiquement d’une grue. Nous fournissons notre mini-grue, idéale pour la manutention aux étages sans forcer les planchers."
    },
    {
      title: "Projets ciblés",
      text: "Une solution pensée pour les projets de multilogements et les autoconstructeurs, particulièrement lorsque l’accès, l’espace ou la logistique exigent une approche plus simple et plus flexible."
    }
  ]
},

  partenariat: {
  title: "Projets et partenaires",
  text: "Thermobloc souhaite s’entourer de partenaires capables de contribuer au développement et au déploiement d’une nouvelle approche de construction. Le projet s’adresse notamment aux entreprises du domaine de la construction ainsi qu’aux autoconstructeurs qui souhaitent participer à la croissance d’une solution innovante, adaptée aux réalités des chantiers d’aujourd’hui et aux défis liés au manque de personnel qualifié.",
  cards: [
    {
      title: "Produire",
      text: "Développer un réseau de producteurs capables de fabriquer les éléments Thermobloc selon une approche structurée, fiable et adaptée aux besoins du marché."
    },
    {
      title: "Équiper",
      text: "Nous fournissons les moules, les équipements, les composantes et la formation nécessaires pour soutenir la production et la mise en œuvre de la solution Thermobloc."
    },
    {
      title: "Optimiser",
      text: "Une approche pensée pour offrir plus de qualité, une mise en œuvre plus rapide et une solution plus économique pour les projets de construction."
    }
  ]
},

  equipe: {
  title: "Équipe",
  text: "Thermobloc s’appuie sur une équipe cumulant 46 ans d’expérience, orientée vers l’innovation, la précision et la réalisation concrète de projets. Notre objectif est de réunir des gens compétents autour d’une vision simple : construire autrement.",
  cards: [
    {
      title: "Expérience terrain",
      text: "Une vision développée à partir de besoins réels observés dans le domaine de la construction, notamment les limites de certains matériaux traditionnels et la hausse importante des coûts de production."
    },
    {
      title: "Innovation pratique",
      text: "L’objectif n’est pas seulement d’innover, mais de proposer une solution utilisable et simple."
    },
    {
      title: "Vision commune",
      text: "Réunir des personnes sérieuses autour d’un projet structuré, utile et durable."
    }
  ]
},

  contact: {
    title: "Nous joindre",
    text: "Vous souhaitez discuter d’une collaboration, d’un partenariat ou obtenir plus d’information sur Thermobloc ? Communiquez avec nous. Nous vous répondrons rapidement.",
    cards: [
      {
        title: "Partenariat",
        text: "Vous êtes entrepreneur ou collaborateur potentiel ? Nous voulons vous connaître."
      },
      {
        title: "Information",
        text: "Alain Brouillard<br>Tél. : 450-531-2844<br>info@structurethermobloc.com"
      }
    ]
  }
};

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".menu button");

let hoverTimer = null;
let hoveredButton = null;
let previousScrollY = null;
let isCardCentered = false;

function centerContentTemporarily() {
  if (isCardCentered) return;

  previousScrollY = window.scrollY;
  isCardCentered = true;

  content.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function restorePreviousScroll() {
  if (previousScrollY === null) return;

  window.scrollTo({
    top: previousScrollY,
    behavior: "smooth"
  });

  previousScrollY = null;
  isCardCentered = false;
}

function activateCardAutoCenter() {
  const cards = document.querySelectorAll(".info-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", centerContentTemporarily);
    card.addEventListener("mouseleave", restorePreviousScroll);
  });
}

const hoverIndicator = document.createElement("div");
hoverIndicator.className = "hover-indicator";
hoverIndicator.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
document.body.appendChild(hoverIndicator);

function moveHoverIndicator(event) {
  hoverIndicator.style.left = `${event.clientX + 12}px`;
  hoverIndicator.style.top = `${event.clientY + 12}px`;
}

function hideHoverIndicator() {
  hoverIndicator.classList.remove("active", "completed");
  hoverIndicator.style.left = "-9999px";
  hoverIndicator.style.top = "-9999px";
}

function cancelHoverChange() {
  clearTimeout(hoverTimer);
  hoverTimer = null;
  hoveredButton = null;
  hideHoverIndicator();
}

function startHoverChange(button, event) {
  cancelHoverChange();

  hoveredButton = button;

  moveHoverIndicator(event);

  // Force le redémarrage complet de l'animation
  hoverIndicator.classList.remove("active", "completed");
  void hoverIndicator.offsetWidth;
  hoverIndicator.classList.add("active");

  hoverTimer = setTimeout(() => {
    if (hoveredButton === button) {
      showSection(button.dataset.section);

      // À 3 secondes : les points deviennent verts
      hoverIndicator.classList.add("completed");

      // Après 0,5 seconde : les points disparaissent
      setTimeout(() => {
        cancelHoverChange();
      }, 500);
    }
  }, 3000);
}

function showSection(section) {
  content.classList.remove("fade-in");

  setTimeout(() => {
    const cardsHtml = sections[section].cards.map(card => `
      <div class="info-card">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    `).join("");

    content.innerHTML = `
      <h2>${sections[section].title}</h2>
      <p class="intro-text">${sections[section].text}</p>
      <div class="cards">
        ${cardsHtml}
      </div>
    `;

    content.classList.add("fade-in");
    activateCardAutoCenter();
  }, 150);
  

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  const activeButton = document.querySelector(`[data-section="${section}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

buttons.forEach(button => {
  button.addEventListener("mouseenter", (event) => {
    startHoverChange(button, event);
  });

  button.addEventListener("mousemove", (event) => {
    if (hoveredButton === button) {
      moveHoverIndicator(event);
    }
  });

  button.addEventListener("mouseleave", () => {
    cancelHoverChange();
  });

  button.addEventListener("click", () => {
    cancelHoverChange();
    showSection(button.dataset.section);
  });
});

showSection("concept");