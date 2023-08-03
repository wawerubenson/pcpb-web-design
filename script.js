

(() => {

    const openNav = document.querySelector(".open_nav_menu"),
    closeNav = document.querySelector(".close_menu"),
    navMenu = document.querySelector(".main_menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 1000; 

    openNav.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);
    menuOverlay.addEventListener("click", toggleMenu);

     // Add keydown event listener to the document to listen for the "o" key
  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is "o" (case insensitive)
    if (event.key.toLowerCase() === "o") {
      toggleMenu(); // Open the menu
    }
  });

    function toggleMenu() {
        // console.log("hello");
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if(event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            const menuHasChildren = event.target.parentElement;

            menuHasChildren.classList.add("active");
        }
    })
    
}) ();