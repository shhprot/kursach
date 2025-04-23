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

        const slider = document.querySelector('.slider-container');
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.slider-indicators span');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        let slideInterval;
        const slideDelay = 7000;
        
        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }
        
        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, slideDelay);
        }
        
        function stopAutoSlide() {
            clearInterval(slideInterval);
        }
        
        startAutoSlide();
        
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
                stopAutoSlide();
                startAutoSlide();
            });
        });