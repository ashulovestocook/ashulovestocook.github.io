// --- LOADING SCREEN FADE OUT ---
document.addEventListener("DOMContentLoaded", () => {
    const loaderWrapper = document.getElementById("loader-wrapper");
    
    // Wait for the 1.5s animation to finish, plus a tiny 100ms buffer, then fade out
    setTimeout(() => {
        loaderWrapper.classList.add("fade-out");
        
        // Optional: remove it from the DOM completely after fade out to keep things clean
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 400); // Wait for the 0.4s CSS opacity transition
        
    }, 1600); 
});

