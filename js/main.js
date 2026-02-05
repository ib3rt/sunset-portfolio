/**
 * Sunset Portfolio - Main JavaScript
 * Handles all interactivity, animations, and functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  ThemeManager.init();
  Navigation.init();
  ScrollReveal.init();
  LazyLoader.init();
  ProjectFilter.init();
  ContactForm.init();
  FAQ.init();
});

/**
 * Theme Management - Dark/Light Mode Toggle
 */
const ThemeManager = {
  init() {
    this.toggle = document.getElementById('themeToggle');
    this.html = document.documentElement;
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (systemPrefersDark) {
      this.setTheme('dark');
    }
    
    this.toggle.addEventListener('click', () => this.toggleTheme());
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },
  
  toggleTheme() {
    const currentTheme = this.html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },
  
  setTheme(theme) {
    this.html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
};

/**
 * Navigation Module - Mobile menu and scroll effects
 */
const Navigation = {
  init() {
    this.header = document.getElementById('header');
    this.mobileToggle = document.getElementById('mobileToggle');
    this.navLinks = document.getElementById('navLinks');
    
    this.setupScrollEffect();
    this.setupMobileMenu();
    this.setupDropdownToggle();
  },
  
  setupScrollEffect() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  },
  
  setupMobileMenu() {
    if (!this.mobileToggle || !this.navLinks) return;
    
    this.mobileToggle.addEventListener('click', () => {
      const isExpanded = this.mobileToggle.getAttribute('aria-expanded') === 'true';
      
      this.mobileToggle.setAttribute('aria-expanded', !isExpanded);
      this.navLinks.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = this.mobileToggle.querySelectorAll('span');
      spans.forEach((span, i) => {
        if (i === 0) span.style.transform = isExpanded ? '' : 'rotate(45deg) translate(5px, 5px)';
        if (i === 1) span.style.opacity = isExpanded ? '' : '0';
        if (i === 2) span.style.transform = isExpanded ? '' : 'rotate(-45deg) translate(5px, -5px)';
      });
    });
    
    // Close menu when clicking a link
    this.navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.navLinks.classList.remove('active');
        this.mobileToggle.setAttribute('aria-expanded', 'false');
        const spans = this.mobileToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      });
    });
  },
  
  setupDropdownToggle() {
    const dropdowns = document.querySelectorAll('.has-dropdown');
    
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      const menu = dropdown.querySelector('.nav-dropdown');
      
      // Only add toggle on mobile
      const isMobile = window.innerWidth < 992;
      
      if (isMobile && link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          dropdown.classList.toggle('active');
        });
      }
    });
  }
};

/**
 * Scroll Reveal Animation Module
 */
const ScrollReveal = {
  init() {
    this.elements = document.querySelectorAll('.reveal-on-scroll');
    
    if (!this.elements.length) return;
    
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
    
    this.elements.forEach(el => this.observer.observe(el));
  }
};

/**
 * Lazy Loading Module
 */
const LazyLoader = {
  init() {
    this.images = document.querySelectorAll('img.lazy');
    
    if (!this.images.length) return;
    
    const options = {
      threshold: 0,
      rootMargin: '100px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          img.classList.add('loaded');
          this.observer.unobserve(img);
        }
      });
    }, options);
    
    this.images.forEach(img => this.observer.observe(img));
  }
};

/**
 * Project Filter Module
 */
const ProjectFilter = {
  init() {
    this.buttons = document.querySelectorAll('.filter-btn');
    this.projects = document.querySelectorAll('.project-card[data-category]');
    
    if (!this.buttons.length) return;
    
    // Check URL for initial filter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      this.filter(category);
      this.buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
          btn.classList.add('active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
    }
    
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        this.buttons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        
        // Filter projects
        this.filter(btn.dataset.filter);
      });
    });
  },
  
  filter(category) {
    this.projects.forEach(project => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = '';
        project.style.animation = 'fadeUp 0.5s ease forwards';
      } else {
        project.style.display = 'none';
      }
    });
  }
};

/**
 * Contact Form Module
 */
const ContactForm = {
  init() {
    this.form = document.getElementById('contactForm');
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Real-time validation
    this.form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });
  },
  
  handleSubmit(e) {
    e.preventDefault();
    
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      // Show success message
      this.form.innerHTML = `
        <div style="text-align: center; padding: var(--space-3xl);">
          <div style="font-size: 4rem; margin-bottom: var(--space-lg);">✓</div>
          <h3 style="color: var(--sunset-orange); margin-bottom: var(--space-md);">Message Sent!</h3>
          <p style="color: var(--warm-gray-600);">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
        </div>
      `;
    }, 1500);
  },
  
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Required validation
    if (field.required && !value) {
      this.setFieldError(field, 'This field is required');
      isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.setFieldError(field, 'Please enter a valid email address');
        isValid = false;
      }
    }
    
    return isValid;
  },
  
  setFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = 'var(--sunset-orange)';
    
    // Remove existing error
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) existingError.remove();
    
    // Add error message
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = message;
    error.style.cssText = 'color: var(--sunset-orange); font-size: 0.85rem; margin-top: var(--space-xs); display: block;';
    field.parentElement.appendChild(error);
  },
  
  clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    const error = field.parentElement.querySelector('.field-error');
    if (error) error.remove();
  }
};

/**
 * FAQ Accordion Module
 */
const FAQ = {
  init() {
    this.items = document.querySelectorAll('details');
    
    this.items.forEach(item => {
      item.addEventListener('toggle', () => {
        const summary = item.querySelector('summary');
        const svg = summary.querySelector('svg');
        
        if (item.open && svg) {
          svg.style.transform = 'rotate(180deg)';
        } else if (svg) {
          svg.style.transform = '';
        }
      });
    });
  }
};

/**
 * Smooth Scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/**
 * Parallax effect for hero orbs
 */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll('.floating-orb');
  
  orbs.forEach((orb, i) => {
    const speed = 0.05 * (i + 1);
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/**
 * Counter animation for stats (if added)
 */
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
};

/**
 * Initialize counters when they come into view
 */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.dataset.target);
      animateCounter(counter, target);
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter[data-target]').forEach(counter => {
  counterObserver.observe(counter);
});

/**
 * Copy to clipboard functionality
 */
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * Social share functionality
 */
const ShareManager = {
  share(url, title, text) {
    if (navigator.share) {
      navigator.share({ url, title, text });
    } else {
      copyToClipboard(url);
    }
  },
  
  shareTwitter(url, title) {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  },
  
  shareLinkedIn(url, title) {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  }
};

/**
 * Print functionality for project pages
 */
const printPage = () => {
  window.print();
};

/**
 * Add loading state to page transitions
 */
window.addEventListener('beforeunload', () => {
  document.body.classList.add('page-loading');
});

window.addEventListener('load', () => {
  document.body.classList.remove('page-loading');
});
