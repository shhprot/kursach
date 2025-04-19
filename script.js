'use strict'

const scrollTopBtn = document.getElementById('scrollTopBtn');
        
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        
        scrollTopBtn.addEventListener('click', function() {
            document.getElementById('header').scrollIntoView({
                behavior: 'smooth'
            });
        });