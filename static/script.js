console.log('hi visitor :3')
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
    
    const profilePic = document.querySelector('.profile-picture img');
    let floatDirection = 1;
    let floatPosition = 0;
    
    function floatAnimation() {
        floatPosition += 0.05 * floatDirection;
        
        if (floatPosition > 3) {
            floatDirection = -1;
        } else if (floatPosition < 0) {
            floatDirection = 1;
        }
        
        profilePic.style.transform = `translateY(${floatPosition}px)`;
        requestAnimationFrame(floatAnimation);
    }
    
    floatAnimation();
    
    const backgroundGlow = document.querySelector('.background-glow');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        backgroundGlow.style.top = `${y - 250}px`;
        backgroundGlow.style.left = `${x - 250}px`;
    });
    
    const akaNames = document.querySelectorAll('.aka-name');
    akaNames.forEach(name => {
        name.addEventListener('mouseover', () => {
            name.style.textShadow = '0 0 8px rgba(245, 194, 231, 0.6)';
        });
        
        name.addEventListener('mouseout', () => {
            name.style.textShadow = 'none';
        });
    });
    
    const projectLinks = document.querySelectorAll('.tag.project');
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = '0 0 10px rgba(203, 166, 247, 0.3)';
        });
        
        link.addEventListener('mouseout', () => {
            link.style.boxShadow = 'none';
        });
        
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            link.appendChild(ripple);
            
            const x = e.clientX - link.getBoundingClientRect().left;
            const y = e.clientY - link.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});