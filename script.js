document.addEventListener('DOMContentLoaded', () => {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    // Add floating animation to each item with different durations
    floatingItems.forEach((item, index) => {
        const speed = item.dataset.speed;
        item.style.animation = `float ${3 + speed}s ease-in-out infinite`;
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Add parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        floatingItems.forEach(item => {
            const speed = item.dataset.speed;
            const x = (window.innerWidth - mouseX * speed) / 100;
            const y = (window.innerHeight - mouseY * speed) / 100;
            
            item.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});

// Add smooth scroll reveal effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.floating-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(item);
});
