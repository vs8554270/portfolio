document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const content = targetSection.querySelector('.card, .stats-grid, .project-card');

                if (content) {
                    // 1. Remove the class if it's already there (to reset the animation)
                    content.classList.remove('active-glow');
                    
                    // 2. Trigger a "reflow" so the browser recognizes the class removal
                    void content.offsetWidth; 
                    
                    // 3. Add the glow class
                    content.classList.add('active-glow');
                    
                    // 4. Clean up: Remove the class after animation completes (1.5s)
                    setTimeout(() => {
                        content.classList.remove('active-glow');
                    }, 1500);
                }
            }
        });
    });
});

// Add this inside your existing DOMContentLoaded block
const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    
    // Optional: Toggle icon between "bars" and "X"
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (so it doesn't block the screen)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});