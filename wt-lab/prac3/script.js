// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate posts when they come into view
    const posts = document.querySelectorAll('.post');
    
    function checkScroll() {
        posts.forEach(post => {
            const postTop = post.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (postTop < windowHeight - 100) {
                post.classList.add('fade-in');
            }
        });
    }
    
    // Check scroll position
    window.addEventListener('scroll', checkScroll);
    
    // Check on load
    checkScroll();
    
    // Add hover effect to posts
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
});