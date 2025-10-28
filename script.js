
     menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links-menu');

   
    menuToggle.addEventListener('click', () =>{
        
        navLinks.classList.toggle('active');
    });
