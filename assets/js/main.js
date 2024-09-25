/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Function to change the language
function changeLanguage() {
    const language = document.getElementById('language-select').value;
    localStorage.setItem('selectedLanguage', language);
    updateContent(language);
}

// Function to update content based on selected language
function updateContent(language) {
    // Update all elements with data-* attributes
    document.querySelectorAll('[data-' + language + ']').forEach(element => {
        const key = 'data-' + language;
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(key);
        } else {
            element.innerHTML = element.getAttribute(key);
        }
    });

    // Update the page title
    document.title = document.querySelector('title').getAttribute('data-' + language);
}

// Load the selected language from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = savedLanguage;
    updateContent(savedLanguage);
});

// Original Photon script
(function($) {
    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge:   [ '1141px',  '1680px' ],
        large:    [ '981px',   '1140px' ],
        medium:   [ '737px',   '980px'  ],
        small:    [ '481px',   '736px'  ],
        xsmall:   [ '321px',   '480px'  ],
        xxsmall:  [ null,      '320px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();
})(jQuery);


// Carousel section
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    
    // Duplicate images for seamless looping
    images.forEach(img => {
        const clone = img.cloneNode(true);
        slides.appendChild(clone);
    });

    let currentIndex = 0;
    const totalImages = slides.children.length;
    const imageWidth = carousel.clientWidth;

    function nextSlide() {
        currentIndex++;
        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        // If we've reached the cloned set, quickly reset to the start without transition
        if (currentIndex === totalImages / 2) {
            setTimeout(() => {
                slides.style.transition = 'none';
                currentIndex = 0;
                slides.style.transform = `translateX(0)`;
            }, 500);
        }
    }

    // Advance slide every 3 seconds
    setInterval(nextSlide, 3000);
});

