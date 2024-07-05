
    function animateValue(id, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let obj = document.getElementById(id);
        let timer = setInterval(function() {
            current += increment;
            obj.textContent = current.toLocaleString(); // Format number with commas
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    function startCounters() {
        animateValue('emails-processed', 0, 100000000, 8000); // Adjusted duration and larger end value
        animateValue('emails-segmented', 0, 50000000, 10000); // Adjusted duration and larger end value
        animateValue('duplicates-removed', 0, 20000000, 12000); // Adjusted duration and larger end value
    }

    function cycleTexts() {
        const texts = ["Email", "URL", "List"];
        let index = 0;
        setInterval(() => {
            document.getElementById('dynamic-text').textContent = texts[index];
            index = (index + 1) % texts.length;
        }, 3000);
    }

    window.onload = function() {
        startCounters();
        cycleTexts();
    };

        function toggleMenu() {
            document.getElementById('overlay-menu').classList.toggle('active');
        }
 
 
 // Automatically slide testimonials
function slideTestimonials() {
  const testimonials = document.querySelectorAll('.carousel-item');
  let currentSlide = 0;

  function nextSlide() {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 5000); // Adjust interval as per your requirement (in milliseconds)
}

slideTestimonials();
   