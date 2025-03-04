// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true
});

// Project Data
const projectsData = [
    {
        id: 1,
        title: "Car Price Prediction",
        category: "ml",
        image: "Projects\\car price prediction.png",
        description: "Machine learning model to predict Used Car Price with 0.95 of R^2 Score.",
        technologies: ["Python, ", "Seaborn, ", "Scikit-learn"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Olympic Dashboard",
        category: "visualization",
        image: "Projects\\olympic.jpg",
        description: "Interactive dashboard for Olympic Games analysis 2000 - 2016",
        technologies: ["SQL, ", "PowerBI"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Iris Flower Classification",
        category: "ml",
        image: "Projects\\iris flower classification.jpg",
        description: "Machine learning model to predict type of iris folower with 100% accuracy.",
        technologies: ["Python", "K-means", "Matplotlib"],
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "Crimes Dashboard",
        category: "visualization",
        image: "Projects\\Dashboard.PNG",
        description: "Interactive dashboard for Crimes in metropoliton police Area",
        technologies: [ "SQL, ", "Power BI"],
        github: "#",
        demo: "#"
    },
    {
        id: 5,
        title: "Sales Prediction Model",
        category: "ml",
        image: "Projects\\sales prediction.jfif",
        description: "Machine learning model to predict with 1.00 of Root Mean Squared Error.",
        technologies: [ "SQL, ", "Power BI"],
        github: "#",
        demo: "#"
    }
];

// Skills Data
const skillsData = [
    {
        category: "Languages",
        skills: [
            { name: "Python (90%)", level: 90, icon: "fa-python" },
            { name: "R (80%)", level: 80, icon: "fa-r-project" },
            { name: "SQL (75%)", level: 75, icon: "fa-database" },
            { name: "HTML (90%)", level: 90, icon: "fa fa-html5" },
            { name: "CSS (85)", level: 85, icon: "fa-css3" }
        ]
    },
    {
        category: "Frameworks & Tools",
        skills: [
            { name: "TensorFlow", level: 85, icon: "fa fa-brain" },
            { name: "PyTorch", level: 80, icon: "fa-fire" },
            { name: "Scikit-learn", level: 90, icon: "fa-cogs" },
            { name: "Docker", level: 75, icon: "fa-docker" }
        ]
    }
];

// DOM Elements
const preloader = document.querySelector('.preloader');
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.querySelector('.projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const skillsContent = document.querySelector('.skills-content');
const contactForm = document.getElementById('contactForm');
const scrollTopBtn = document.getElementById('scrollToTop');

// Preloader
window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 300);
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Navigation
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active Navigation Link
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Project Filtering and Rendering
function renderProjects(category = 'all') {
    const filteredProjects = category === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === category);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="btn btn-primary">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.demo}" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Projects
renderProjects();

// Project Filter Buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(category);
    });
});

// Render Skills
function renderSkills() {
    skillsContent.innerHTML = skillsData.map(category => `
        <div class="skills-category" data-aos="fade-up">
            <h3>${category.category}</h3>
            <div class="skills-grid">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-icon">
                            <i class="fab ${skill.icon}"></i>
                        </div>
                        <h4>${skill.name}</h4>
                        <div class="skill-progress">
                            <div class="progress" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize Skills
renderSkills();

// Contact Form
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);
    
    try {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formProps);
        
        // Simulate success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 3000);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again.');
    }
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize tooltips
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', e => {
        const tip = document.createElement('div');
        tip.className = 'tooltip';
        tip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tip);
        
        const rect = e.target.getBoundingClientRect();
        tip.style.top = rect.top - tip.offsetHeight - 10 + 'px';
        tip.style.left = rect.left + (rect.width - tip.offsetWidth) / 2 + 'px';
    });
    
    tooltip.addEventListener('mouseleave', () => {
        const tip = document.querySelector('.tooltip');
        if (tip) {
            tip.remove();
        }
    });
});
