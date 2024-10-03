document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Hej callum!",
        "Hej arizona!",
        "Hej Familjen!"
    ];
    const typingDelay = 100; // milliseconds
    const erasingDelay = 50; // milliseconds
    const newTextDelay = 1000; // milliseconds
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function typeWriter() {
        const typewriterElement = document.getElementById("typewriter");
        const currentText = texts[textIndex];

        if (!isErasing && charIndex < currentText.length) {
            typewriterElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingDelay);
        } else if (isErasing && charIndex >= 0) {
            typewriterElement.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeWriter, erasingDelay);
        } else if (charIndex < 0) {
            isErasing = false;
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            charIndex = 0;
            setTimeout(typeWriter, newTextDelay);
        } else {
            isErasing = true;
            setTimeout(typeWriter, newTextDelay);
        }
    }

    typeWriter();
});
