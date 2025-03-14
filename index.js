document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link a");
    const sections = document.querySelectorAll("section");
  
  // Function to remove 'active' class from all links
  function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove("active"));
    }
  
  // Function to add 'active' class to the link corresponding to the section in view
  function addActiveClass(sectionId) {
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
            }
        });
    }
  
  // Smooth scrolling
  navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
  
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
  
            if (targetElement) {
                const offset = 30; // Adjust this value to match navbar height
  
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
  
                removeActiveClass();
                this.classList.add("active");
            }
        });
    });
  
  // Scroll event to update active class
  window.addEventListener("scroll", function() {
        let currentSection = "";
  
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 110; // Adjust this value to match navbar height on scrolling
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });
  
        removeActiveClass();
        addActiveClass(currentSection);
    });
  });
  
  
  //menu 
  document.querySelector(".menu-icon").addEventListener("click", function() {
      document.querySelector(".nav-link").classList.toggle("active");
      this.classList.toggle("change");
    });
    
    document.querySelectorAll(".nav-link a").forEach(function(link) {
      link.addEventListener("click", function() {
        document.querySelector(".nav-link").classList.remove("active");
        document.querySelector(".menu-icon").classList.remove("change");
      });
    });
  
  //ouverture cv 
  document.getElementById('btn-cv').addEventListener('click', ouvrirCV);
    
    function ouvrirCV() {
      
      var cheminVersCV = 'assets/images/Hichem Boutemen CV AVS.pdf';
      window.open(cheminVersCV, '_blank');
  }