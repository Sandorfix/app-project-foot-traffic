/*
    Photon by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Store the selected language globally
let selectedLanguage = 'en'; // Default language

// Function to change the language
function changeLanguage() {
    const select = document.getElementById('language-select');
    selectedLanguage = select.value; // Get the selected language
    localStorage.setItem('selectedLanguage', selectedLanguage); // Store in localStorage
    updateContent(selectedLanguage); // Update the content
    updateLanguageLabel(selectedLanguage); // Update the label text
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
    const titleElement = document.querySelector('title');
    document.title = titleElement.getAttribute('data-' + language) || 'Default Title'; // Use a default title if needed
}

// Function to update the language label
function updateLanguageLabel(language) {
    const languageLabel = document.getElementById('language-label');
    switch (language) {
        case 'en':
            languageLabel.textContent = 'Choose your language:';
            break;
        case 'es':
            languageLabel.textContent = 'Elige tu idioma:';
            break;
        case 'de':
            languageLabel.textContent = 'Wählen Sie Ihre Sprache:';
            break;
        case 'fr':
            languageLabel.textContent = 'Choisissez votre langue:';
            break;
        case 'it':
            languageLabel.textContent = 'Scegli la tua lingua:';
            break;
        default:
            languageLabel.textContent = 'Choose your language:';
    }
}

// Load the selected language from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = savedLanguage;
    updateContent(savedLanguage); // Initialize content based on saved language
    updateLanguageLabel(savedLanguage); // Initialize label based on saved language
});


// Original Photon script
(function ($) {
    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 50);
    });

    // Scrolly.
    $('.scrolly').scrolly();
})(jQuery);

// Carousel section
document.addEventListener('DOMContentLoaded', function () {
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

    // Advance slide every 4 seconds
    setInterval(nextSlide, 4000);
});

// Images for larger screens 
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('#image-slider .slider img');
    const totalImages = images.length;
    let intervalId;

    function showImage(index) {
        images[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
    }

    function showNextImage() {
        showImage((currentIndex + 1) % totalImages);
    }

    function showPrevImage() {
        showImage((currentIndex - 1 + totalImages) % totalImages);
    }

    function startSlideshow() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(showNextImage, 3000);
    }

    function stopSlideshow() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Initialize the first image
    showImage(0);

    // Start the slideshow
    startSlideshow();

    // Optional: Add event listeners for user interaction
    const slider = document.querySelector('#image-slider');

    slider.addEventListener('mouseenter', stopSlideshow);
    slider.addEventListener('mouseleave', startSlideshow);

    slider.addEventListener('click', (e) => {
        const sliderRect = slider.getBoundingClientRect();
        const clickX = e.clientX - sliderRect.left;

        if (clickX < sliderRect.width / 2) {
            showPrevImage();
        } else {
            showNextImage();
        }

        // Restart the slideshow after user interaction
        startSlideshow();
    });
});

//************** Generate code feature ***************

const messages = {
    en: "Please take a screenshot of this code.",
    es: "Por favor, toma una captura de pantalla de este código.",
    de: "Bitte machen Sie einen Screenshot dieses Codes.",
    fr: "Veuillez prendre une capture d'écran de ce code.",
    it: "Per favore, fai uno screenshot di questo codice."
};

// Function to generate random code
function generateCode() {
    const code = 'Jackson ' + Math.floor(100 + Math.random() * 900);
    const codeModal = document.getElementById('codeModal');
    const codeDisplay = document.getElementById('generatedCode');
    const instructionDisplay = document.getElementById('screenshotInstruction');

    // Display generated code
    codeDisplay.innerHTML = `${code}`;

    // Set instruction message based on the selected language
    instructionDisplay.innerHTML = messages[selectedLanguage]; 

    // Show the modal
    codeModal.style.display = 'block';

    // Close the modal after 10 seconds (10000 milliseconds)
    setTimeout(() => {
        closeModal();
    }, 60000);
}

// Function to close the modal and go back to the main page
function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
}

// Ensure modal is hidden on page load
window.onload = function() {
    closeModal(); // Ensure modal is hidden on page load
};


// Initialize EmailJS
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("ZIwDQ1nnE0mh_XGLl"); // Replace with your public key
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Send form data using EmailJS
        emailjs.sendForm('service_i84ghgi', 'template_ymava9c', this)
            .then(() => {
                alert('Feedback sent successfully!'); // Notify success
                document.getElementById('contact-form').reset(); // Reset form
            }, (error) => {
                alert('Failed to send feedback. Please try again later.'); // Notify failure
                console.error('FAILED...', error); // Log error for debugging
            });
    });
}
