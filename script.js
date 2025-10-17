const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('.nav-item');

function toggleMenu() {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .promotion-card, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);
