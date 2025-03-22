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
    
    function createGridAlignedSquares() {
        const body = document.querySelector('body');
        const gridSize = 30; 
        
        for (let i = 0; i < 30; i++) {
            createSquare();
        }
        
        setInterval(() => {
            if (Math.random() > 0.7) { 
                createSquare();
            }
        }, 2000); 
        
        function createSquare() {
            const square = document.createElement('div');
            square.className = 'grid-square';
            
            square.style.width = `${gridSize}px`;
            square.style.height = `${gridSize}px`;
            
            const maxX = Math.floor(window.innerWidth / gridSize);
            const maxY = Math.floor(window.innerHeight / gridSize);
            const gridX = Math.floor(Math.random() * maxX);
            const gridY = Math.floor(Math.random() * maxY);
            
            square.style.left = `${gridX * gridSize}px`;
            square.style.top = `${gridY * gridSize}px`;
            
            const hue = 210 + (Math.random() * 30 - 15); 
            const saturation = 80 + (Math.random() * 20);
            const lightness = 50 + (Math.random() * 20);
            square.style.borderColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
            
            const opacity = 0.1 + Math.random() * 0.3;
            
            body.appendChild(square);
            
            setTimeout(() => {
                square.style.opacity = opacity;
            }, 100);
            
            const duration = 4000 + Math.random() * 6000;
            setTimeout(() => {
                square.style.opacity = '0';
                setTimeout(() => {
                    square.remove();
                }, 1500);
            }, duration);
        }
    }
    
    createGridAlignedSquares();
    
    function pulseGlow() {
        const highlights = document.querySelectorAll('.highlight, .aka-name, .github-link');
        const intensity = (Math.sin(Date.now() * 0.001) + 1) * 0.5;
        const blurRadius = 3 + (intensity * 5);
        
        highlights.forEach(highlight => {
            if (highlight.classList.contains('highlight')) {
                highlight.style.textShadow = `0 0 ${blurRadius}px rgba(0, 102, 255, ${0.3 + (intensity * 0.2)})`;
            }
            else if (highlight.classList.contains('aka-name')) {
                highlight.style.textShadow = `0 0 ${blurRadius - 2}px rgba(0, 102, 255, ${0.2 + (intensity * 0.2)})`;
            }
        });
        
        requestAnimationFrame(pulseGlow);
    }
    
    pulseGlow();
    
    const projectLinks = document.querySelectorAll('.tag.project');
    projectLinks.forEach(link => {
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