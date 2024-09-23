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
let currentSlide = 0;

function moveSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide++;

    // Reset to the first slide if at the end
    if (currentSlide >= totalSlides) {
        currentSlide = 1; // Skip the duplicate
        slides.style.transition = 'none'; // Disable transition
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;

        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease'; // Re-enable transition
            currentSlide++;
        }, 50);
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(moveSlide, 4000);
