// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "#background", // Apply effect to background div
        color: 0xffffff, // White net color
        backgroundColor: 0x000000, // Black background
        points: 12.0, // Density of points
        maxDistance: 20.0, // Distance between lines
        spacing: 15.0 // Spacing effect
    });
});
