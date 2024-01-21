const header = document.querySelector("header"),
      menubtn = document.querySelector(".menu-button"),
      menubtnclose = document.querySelector(".close");

// Functie uitklappen menu
function toggleMenu(){
  header.classList.toggle("nav-open");
}

// als je klikt op dit element dan voer deze funtie uit.
menubtn.addEventListener("click", toggleMenu);

menubtnclose.addEventListener("click", toggleMenu);
