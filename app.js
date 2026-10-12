document.addEventListener('DOMContentLoaded', () => {
   
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('portfolio-theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️'; 
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙'; 
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('portfolio-theme', 'dark');
            createFlashEffect('#00e5ff'); 
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('portfolio-theme', 'light');
            createFlashEffect('#ff3377');
        }
    });


    const scrollMappings = [
        { btnId: 'scroll-to-home', targetId: 'home' },
        { btnId: 'scroll-to-about', targetId: 'about' },
        { btnId: 'scroll-to-skills', targetId: 'skills' },
        { btnId: 'scroll-to-projects', targetId: 'projects' },
        { btnId: 'scroll-to-contact', targetId: 'contact' },

        { btnId: 'scroll-to-projects-hero', targetId: 'projects' },
        { btnId: 'scroll-to-contact-hero', targetId: 'contact' },

        { btnId: 'scroll-to-projects-about', targetId: 'projects' },
        { btnId: 'scroll-to-contact-about', targetId: 'contact' }
    ];

    scrollMappings.forEach(mapping => {
        const button = document.getElementById(mapping.btnId);
        const target = document.getElementById(mapping.targetId);

        if (button && target) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const navOffset = 90; 
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        }
    });


    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const messageInput = document.getElementById('message').value.trim();

            if (!nameInput || !emailInput || !messageInput) {
                alert('Please ensure all validation boxes are complete before transmission.');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'SENDING...';
            submitBtn.style.opacity = '0.6';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you for your message, ${nameInput}! Sinikiwe will connect with you shortly.`);
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1200);
        });
    }


    function createFlashEffect(color) {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.inset = '0';
        flash.style.background = color;
        flash.style.opacity = '0.15';
        flash.style.zIndex = '99999';
        flash.style.pointerEvents = 'none';
        flash.style.transition = 'opacity 0.6s ease';
        
        document.body.appendChild(flash);
        
        requestAnimationFrame(() => {
            flash.style.opacity = '0';
            setTimeout(() => flash.remove(), 600);
        });
    }


    const footerLines = [
        "Fuelled by coffee and console.log() ☕",
        "It works on my machine. 💻",
        "99 little bugs in the code... take one down, patch it around... 🐛",
        "Built with curiosity, semicolons and a lot of Googling. 🔍",
        "There are 10 kinds of people: those who get binary and those who don't.",
        "Currently compiling my next big idea... ⚙️",
        "Powered by load-shedding-proof determination. 🔌",
        "Debugging is just being a detective in a crime you committed. 🕵️‍♀️"
    ];

    const footerFun = document.getElementById('footer-fun');
    let lastFooterIndex = -1;

    function showFooterLine() {
        let index;
        do {
            index = Math.floor(Math.random() * footerLines.length);
        } while (index === lastFooterIndex);

        lastFooterIndex = index;
        footerFun.textContent = footerLines[index];
    }

    if (footerFun) {
        showFooterLine();
        footerFun.addEventListener('click', showFooterLine);
        footerFun.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showFooterLine();
            }
        });
    }
});