document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.getElementById("animatedText");
    const animateButton = document.getElementById("animateButton");
    const animationSelect = document.getElementById("animationType");

    // Load saved preference from localStorage
    let savedAnimation = localStorage.getItem("selectedAnimation");
    if (savedAnimation) {
        animationSelect.value = savedAnimation;
    }

    // Function to apply animation
    function applyAnimation(animationType) {
        animatedText.className = ""; // Clear previous animation
        setTimeout(() => animatedText.classList.add(animationType), 50);
    }

    // Event listener for animation selection
    animationSelect.addEventListener("change", function() {
        let selectedAnimation = animationSelect.value;
        localStorage.setItem("selectedAnimation", selectedAnimation); // Save choice
    });

    // Event listener for button click to trigger animation
    animateButton.addEventListener("click", function() {
        applyAnimation(animationSelect.value);
    });

    // Apply stored animation on page load
    if (savedAnimation) {
        applyAnimation(savedAnimation);
    }
});
