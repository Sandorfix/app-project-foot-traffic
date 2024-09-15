const translations = {
    en: {
        generateTitle: "Generate Your Code",
        generateButton: "Generate Code",
        copyButton: "Copy Code",
        backButton: "Go Back to Language Selection",
    },
    es: {
        generateTitle: "Genera Tu Código",
        generateButton: "Generar Código",
        copyButton: "Copiar Código",
        backButton: "Volver a la Selección de Idioma",
    },
    de: {
        generateTitle: "Erstellen Sie Ihren Code",
        generateButton: "Code Generieren",
        copyButton: "Code Kopieren",
        backButton: "Zurück zur Sprachauswahl",
    },
    fr: {
        generateTitle: "Générez Votre Code",
        generateButton: "Générer Code",
        copyButton: "Copier Code",
        backButton: "Retour à la Sélection de Langue",
    }
};

// Function to get the selected language from the URL parameters
function getSelectedLanguage() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || 'en'; // Default to English if no language is selected
}

// Function to update the text content dynamically based on the selected language
function updatePageLanguage() {
    const language = getSelectedLanguage();
    const translation = translations[language] || translations['en']; // Default to English if no language is selected

    document.getElementById('heading').textContent = translation.generateTitle;
    document.getElementById('generate-button').textContent = translation.generateButton;
    document.getElementById('copy-button').textContent = translation.copyButton;
    document.getElementById('back-button').textContent = translation.backButton;
}

document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();

    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');
    const backButton = document.getElementById('back-button');
    const generatedCodeDiv = document.getElementById('generated-code');

    if (generateButton) {
        generateButton.addEventListener('click', () => {
            // Generate a random code
            const generatedCode = generateRandomCode();
            generatedCodeDiv.textContent = generatedCode;

            // Show the copy button and back button, hide generate button
            copyButton.classList.remove('hidden');
            backButton.classList.remove('hidden');
            generateButton.classList.add('hidden');

            // Start the countdown to redirect
            startCountdown(60); // 60 seconds countdown
        });
    }

    if (copyButton) {
        copyButton.addEventListener('click', () => {
            // Copy code to clipboard
            navigator.clipboard.writeText(generatedCodeDiv.textContent).then(() => {
                alert('Code copied to clipboard');
            });
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            // Redirect to language selection page
            window.location.href = 'index.html'; // Adjust to your actual path
        });
    }
});

// Generate a random code
function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = 'jackson';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

// Countdown and redirect after time expires
function startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        if (counter > 0) {
            console.log(`Time left: ${counter}`);
            counter--;
        } else {
            clearInterval(interval);
            window.location.href = 'index.html'; // Redirect back to language selection
        }
    }, 1000);
}

// Function to handle language selection and redirect to the code generation page
function selectLanguage(language) {
    window.location.href = `generate-code.html?lang=${language}`; // Pass language as URL parameter
}
