const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        function showSlide(n) {
            slider.style.transform = `translateX(-${n * 100}%)`;

             // Update active dot
             dots.forEach(dot => dot.classList.remove('active'));
             dots[n].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Handle negative indices
            showSlide(currentSlide);
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Dot click functionality
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Optional: Automatic slideshow
        let autoSlideInterval;

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 3000); // Change interval as needed
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

       // startAutoSlide(); // Uncomment to enable auto slide

        // Stop auto slide on hover (optional)
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);