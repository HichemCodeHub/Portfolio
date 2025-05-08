document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link a");
  const sections = document.querySelectorAll("section");

  // Fonction pour supprimer la classe 'active' de tous les liens
  function removeActiveClass() {
      navLinks.forEach(link => link.classList.remove("active"));
  }

  // Fonction pour ajouter la classe 'active' au lien correspondant à la section en cours d'affichage
  function addActiveClass(sectionId) {
      navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
          }
      });
  }

  // Défilement fluide lors du clic sur un lien du menu
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault(); // Empêche le comportement par défaut du lien

          const targetId = this.getAttribute('href'); // Récupère l'ID de la section cible
          const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

          if (targetElement) {
              const offset = 30; // Ajuste cette valeur en fonction de la hauteur du menu de navigation

              window.scrollTo({
                  top: targetElement.offsetTop - offset,
                  behavior: 'smooth' // Active un défilement fluide
              });

              removeActiveClass();
              this.classList.add("active");
          }
      });
  });

  // Événement de défilement pour mettre à jour la classe 'active' en fonction de la section affichée
  window.addEventListener("scroll", function() {
      let currentSection = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 110; // Ajuste cette valeur pour correspondre à la hauteur du menu lors du défilement
          if (scrollY >= sectionTop) {
              currentSection = section.getAttribute("id"); // Récupère l'ID de la section en cours
          }
      });

      removeActiveClass();
      addActiveClass(currentSection);
  });
});

// Gestion du menu mobile
document.querySelector(".menu-icon").addEventListener("click", function() {
  document.querySelector(".nav-link").classList.toggle("active"); // Affiche ou cache le menu
  this.classList.toggle("change"); // Change l'icône du menu 
});

// Ferme le menu mobile lorsqu'un lien est cliqué
document.querySelectorAll(".nav-link a").forEach(function(link) {
  link.addEventListener("click", function() {
      document.querySelector(".nav-link").classList.remove("active");
      document.querySelector(".menu-icon").classList.remove("change");
  });
});

// Fonction pour ouvrir le CV dans un nouvel onglet
document.getElementById('btn-cv').addEventListener('click', ouvrirCV);

function ouvrirCV() {
  var cheminVersCV = 'https://www.linkedin.com/company/airgos/posts/';
  window.open(cheminVersCV, '_blank'); // Ouvre le fichier PDF dans un nouvel onglet
}

// Fonction pour fermer toutes les modales
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
}

// Fonction pour ouvrir une modale spécifique
function openModal(modalId) {
    closeAllModals(); // Fermer toutes les modales avant d'en ouvrir une
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
}

// Fonction pour fermer une modale spécifique
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
}

// Attacher les événements de clic aux cartes pour ouvrir les modales
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner toutes les cartes
    const cards = document.querySelectorAll('.card');
    
    // Ajouter un événement de clic à chaque carte pour ouvrir la modale associée
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const module = card.getAttribute('data-module');
        const modalId = `modal-${module}`;
        openModal(modalId);
      });
    });

    // Fermer les modales quand on clique sur le bouton de fermeture
    const closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.closest('.modal').id;
        closeModal(modalId);
      });
    });

    // Fermer la modale quand on clique à côté de celle-ci (dans le background)
    const modals = document.querySelectorAll('.modal-container');
    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        // Si le clic est sur l'élément de fond et NON sur la modale elle-même
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });

      // Empêcher la propagation du clic à l'arrière-plan lorsqu'on clique à l'intérieur de la modale
      const modalContent = modal.querySelector('.modal');
      if (modalContent) {
        modalContent.addEventListener('click', (e) => {
          e.stopPropagation(); // Cela empêche la propagation du clic à l'élément parent (modal-container)
        });
      }
    });
});
