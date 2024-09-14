// Function to handle language selection and redirect to the code generation page
function selectLanguage(language) {
    window.location.href = 'generate-code.html'; // Adjust to your actual path
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');
    const backButton = document.getElementById('back-button');
    const generatedCodeDiv = document.getElementById('generated-code');

    if (generateButton) {
        generateButton.addEventListener('click', () => {
            // Simulate code generation
            const generatedCode = 'jackson123ABC'; // Replace with your code generation logic
            generatedCodeDiv.textContent = generatedCode;

            // Show the copy button and hide the generate button
            copyButton.classList.remove('hidden');
            backButton.classList.remove('hidden');
            generateButton.classList.add('hidden');
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
            // Redirect to language selection or previous page
            window.location.href = 'index.html'; // Adjust to your actual path
        });
    }
});
