import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.addEventListener('DOMContentLoaded', () => {
  // Create animated particles
  const particlesContainer = document.querySelector('.animated-particles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    if (!particlesContainer) return;
    particlesContainer.appendChild(particle);
  }
  
  // Add intersection observer for animation triggers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
    
    // Add hover effect for 3D rotation
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const trackButton = document.getElementById('track-button');
  const trackingResult = document.getElementById('tracking-result');
  const trackingDot = document.querySelector('.tracking-dot');
  const statusProgress = document.querySelector('.status-progress');
  
  // Add ripple effect to button
  if (!trackButton) return;
  trackButton.addEventListener('click', function(e) {
    const effect = document.createElement('div');
    effect.className = 'button-effect';
    
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    
    this.appendChild(effect);
    
    setTimeout(() => effect.remove(), 600);
    
    // Show tracking result
    trackingResult.style.display = 'block';
    
    // Animate tracking dot along path
    const path = document.querySelector('.tracking-path');
    const length = path.getTotalLength();
    let progress = 0;
    
    function animateDot() {
      progress += 0.5;
      const point = path.getPointAtLength(length * (progress / 100));
      trackingDot.setAttribute('cx', point.x);
      trackingDot.setAttribute('cy', point.y);
      
      if (progress < 100) {
        requestAnimationFrame(animateDot);
      }
    }
    
    animateDot();
    
    // Animate status progress
    statusProgress.style.width = '75%';
    
    // Start countdown timer
    startCountdown();
  });
  
  function startCountdown() {
    const hoursEl = document.querySelector('.hours');
    const minutesEl = document.querySelector('.minutes');
    const secondsEl = document.querySelector('.seconds');
    
    let timeLeft = 7200; // 2 hours in seconds
    
    const timer = setInterval(() => {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
      
      if (timeLeft === 0) {
        clearInterval(timer);
      } else {
        timeLeft--;
      }
    }, 1000);
  }
  
  // Add input focus animation
  const input = document.querySelector('.tracking-input');
  input.addEventListener('focus', () => {
    input.style.borderColor = '#8A4FFF';
    input.style.boxShadow = '0 0 0 3px rgba(138, 79, 255, 0.2)';
  });
  
  input.addEventListener('blur', () => {
    input.style.borderColor = '#e1e1e1';
    input.style.boxShadow = 'none';
  });
  
  // Activate stages progressively
  const stages = document.querySelectorAll('.stage');
  let currentStage = 0;
  
  function activateNextStage() {
    if (currentStage < stages.length) {
      stages[currentStage].classList.add('active');
      const icon = stages[currentStage].querySelector('.stage-icon');
      icon.style.backgroundColor = '#8A4FFF';
      icon.style.color = 'white';
      currentStage++;
      setTimeout(activateNextStage, 1500);
    }
  }
  
  trackButton.addEventListener('click', () => {
    currentStage = 0;
    stages.forEach(stage => {
      stage.classList.remove('active');
      const icon = stage.querySelector('.stage-icon');
      icon.style.backgroundColor = 'white';
      icon.style.color = '#8A4FFF';
    });
    setTimeout(activateNextStage, 1000);
  });
});

function createFeatureCards() {
  const featuresGrid = document.querySelector('.features-grid');
  const featureData = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
      title: 'Lightning Speed',
      description: 'Our cutting-edge logistics network ensures your packages arrive faster than ever before.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      title: 'Secure Handling',
      description: 'State-of-the-art tracking and handling procedures keep your items safe throughout their journey.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      title: 'Nationwide Coverage',
      description: 'From bustling cities to remote areas, we deliver to every corner of the country.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z"></path></svg>`,
      title: 'Eco-Friendly',
      description: 'We\'re committed to reducing our carbon footprint with sustainable practices and green initiatives.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is always ready to assist you, any time of day or night.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>`,
      title: 'Mobile App',
      description: 'Track your packages, schedule pickups, and manage your deliveries on-the-go with our user-friendly app.',
    }
  ];
  if (!featuresGrid) return;
  featuresGrid.innerHTML = ''; // Clear existing content

  featureData.forEach((feature, index) => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
      <div class="feature-number">${index + 1}</div>
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;
    featuresGrid.appendChild(card);
  });
}

function createConnectingLines() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "connecting-lines");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 800 600");

  const paths = [
    "M100,100 L700,100", // Top row
    "M100,300 L700,300", // Middle row
    "M100,500 L700,500", // Bottom row

    // Vertical connections
    "M100,100 L100,500", // Left column
    "M400,100 L400,500", // Middle column
    "M700,100 L700,500", // Right column

    // Diagonal connections
    "M100,100 L400,300", // Top-left to middle-center
    "M400,300 L700,500", // Middle-center to bottom-right
    "M700,100 L400,300", // Top-right to middle-center
    "M400,300 L100,500"  // Middle-center to bottom-left
  ];

  paths.forEach(d => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    svg.appendChild(path);
  });

  const featuresGrid = document.querySelector('.features-grid');
  if (!featuresGrid) return;
  featuresGrid.appendChild(svg);
}

function animateFeatureCards() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('animate__animated', 'animate__fadeInUp');
    
    card.addEventListener('mouseenter', () => {
      card.classList.add('animate__pulse');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('animate__pulse');
    });
  });
}

function handleServiceCardAnimations() {
  const serviceItems = document.querySelectorAll('.service-item');
  const windowHeight = window.innerHeight;

  function animateCards() {
    serviceItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;

      if (elementCenter < windowHeight * 0.8 && elementCenter > windowHeight * 0.2) {
        item.classList.add('focus', 'animate-in');
        item.classList.remove('animate-out');
      } else {
        item.classList.remove('focus', 'animate-in');
        if (item.classList.contains('animate-in')) {
          item.classList.add('animate-out');
        }
      }
    });
  }

  window.addEventListener('scroll', animateCards);
  animateCards(); // Initial check
}

function animateTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const triggerBottom = window.innerHeight / 5 * 4;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('animate');
    } else {
      item.classList.remove('animate');
    }
  });
}

// Animated counter
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2500; // 2.5 seconds
  const start = performance.now();
  
  function updateCounter(currentTime) {
    const elapsedTime = currentTime - start;
    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const current = Math.round(target * progress);
      el.textContent = current.toLocaleString();
      
      // Add pulsing effect
      const scale = 1 + Math.sin(elapsedTime * 0.01) * 0.05;
      el.style.transform = `scale(${scale})`;
      
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = target.toLocaleString();
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Three.js background animation
function initThreeJsBackground() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  const aboutBackground = document.getElementById('about-background');
  if (!aboutBackground) return;
  aboutBackground.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const numPoints = 1000; // Increased number of points

  for (let i = 0; i < numPoints; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    vertices.push(x, y, z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({ color: 0x8A4FFF, size: 3 });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Add lines connecting points
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8A4FFF, opacity: 0.3, transparent: true });
  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = [];

  for (let i = 0; i < numPoints; i++) {
    const x = vertices[i * 3];
    const y = vertices[i * 3 + 1];
    const z = vertices[i * 3 + 2];

    for (let j = i + 1; j < numPoints; j++) {
      const x2 = vertices[j * 3];
      const y2 = vertices[j * 3 + 1];
      const z2 = vertices[j * 3 + 2];

      const distance = Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2 + (z2 - z) ** 2);

      if (distance < 200) {
        linePositions.push(x, y, z, x2, y2, z2);
      }
    }
  }

  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  camera.position.z = 1000;

  function animate() {
    requestAnimationFrame(animate);
    points.rotation.x += 0.0005;
    points.rotation.y += 0.001;
    lines.rotation.x += 0.0005;
    lines.rotation.y += 0.001;
    
    // Add dynamic movement to points
    const positions = points.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.1;
      positions[i + 1] += Math.cos(Date.now() * 0.002 + i) * 0.1;
    }
    points.geometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize animations when the about section is in view
function initAboutAnimations() {
  const aboutSection = document.querySelector('#about');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        statNumbers.forEach(animateCounter);
        animated = true;
      }
    });
  }, { threshold: 0.5 });
  if (!aboutSection) return;
  observer.observe(aboutSection);
}

// Add parallax effect
function addParallaxEffect() {
  const aboutSection = document.querySelector('#about');
  const aboutContent = document.querySelector('.about-content');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (!aboutSection) return;
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    
    if (scrollPosition > sectionTop - window.innerHeight && scrollPosition < sectionTop + sectionHeight) {
      const parallaxValue = (scrollPosition - sectionTop) * 0.3;
      aboutContent.style.transform = `translateY(${parallaxValue}px)`;
    }
  });
}

window.addEventListener('scroll', animateTimelineItems);
window.addEventListener('resize', animateTimelineItems);
window.addEventListener('load', animateTimelineItems);

document.addEventListener('DOMContentLoaded', () => {
  createFeatureCards();
  createConnectingLines();
  animateFeatureCards();
  handleServiceCardAnimations();
  initThreeJsBackground();
  initAboutAnimations();
  addParallaxEffect();
  AOS.init({
    duration: 1000,
    once: true,
    mirror: true,
    anchorPlacement: 'top-bottom'
  });

  const trackButton = document.getElementById('track-button');
  const trackingResult = document.getElementById('tracking-result');
  const trackingStatus = document.getElementById('tracking-status');
  const estimatedDelivery = document.getElementById('estimated-delivery');
  const trackingStages = document.querySelectorAll('.tracking-stage');
  if (!trackButton) return;
  trackButton.addEventListener('click', () => {
    // Simulating tracking result
    trackingResult.style.display = 'block';
    
    // Animate stages
    trackingStages.forEach((stage, index) => {
      setTimeout(() => {
        stage.classList.add('active');
        stage.querySelector('.stage-icon').style.transform = 'scale(1.2)';
      }, index * 500);
    });

    // Update tracking details
    trackingStatus.textContent = 'Your package is out for delivery.';
    estimatedDelivery.textContent = 'Estimated delivery: Today by 8:00 PM';

    // Scroll to tracking result
    trackingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const testimonialCards = document.querySelectorAll('.testimonial-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
      }
    });
  }, { threshold: 0.1 });

  testimonialCards.forEach(card => {
    observer.observe(card);
  });
});


