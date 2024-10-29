// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import * as THREE from 'three';
import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';



export function Logic() {
    // Tab switching functionality
    const btn = document.querySelectorAll('.auth-tab');
    if (btn) {
        btn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                document.querySelector('.auth-tab.active').classList.remove('active');
                e.target.classList.add('active');
                document.querySelector('.auth-form.active').classList.remove('active');
                document.getElementById(`${tab}Form`).classList.add('active');
            });
        });
    }
}



export function dashboardLogic(){
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
      }
    });
}


export function pLogic(){
        // Active link handler
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
          }
        });
    
        // Edit button functionality
        document.querySelectorAll('.edit-button').forEach(button => {
          button.addEventListener('click', function() {
            const section = this.closest('.profile-section');
            const inputs = section.querySelectorAll('.form-input');
            inputs.forEach(input => {
              input.readOnly = !input.readOnly;
              input.focus();
            });
          });
        });
    
        // Save button functionality
        document.querySelector('.save-button').addEventListener('click', function(e) {
          e.preventDefault();
          // Add save logic here
          alert('Changes saved successfully!');
        });
}

export function settingsLogic() {
    // Active link handler for the current path
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        }
    });

    // Event listener for save button notifications
    document.querySelectorAll('.save-button').forEach(button => {
        button.addEventListener('click', function () {
            alert('Settings saved successfully!');
        });
    });

    // Toggle switch state persistence
    document.querySelectorAll('.toggle-switch input').forEach(toggle => {
        toggle.addEventListener('change', function () {
            const setting = this.closest('.setting-item').querySelector('.setting-name').textContent;
            console.log(`${setting} is now ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });
}

// Modal component
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

// Settings component with React hooks
const Settings = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Call the settings logic once on component mount
        settingsLogic();
    }, []);

    const handleDeleteButtonClick = () => {
        setModalOpen(true);
    };

    const handleConfirm = () => {
        setModalOpen(false);
        alert('Account deletion request submitted.');
    };

    const handleCancel = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className="danger-button" onClick={handleDeleteButtonClick}>
                Delete Account
            </button>
            <ConfirmationModal
                isOpen={isModalOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure you want to delete your account? This action cannot be undone."
            />
        </div>
    );
};

export default Settings;


export function myOrdersLogic(){
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href').endsWith(currentPath)) {
        link.classList.add('active');
      }
    });

    // Filter functionality
    document.querySelector('.filter-input').addEventListener('input', function(e) {
      // Add search filter logic here
    });

    document.querySelectorAll('.filter-select').forEach(select => {
      select.addEventListener('change', function(e) {
        // Add filter logic here
      });
    });

    // Pagination functionality
    document.querySelectorAll('.page-button').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelector('.page-button.active').classList.remove('active');
        this.classList.add('active');
        // Add pagination logic here
      });
    });
}

export function filterByCategory(category) {
    // Remove active class from all buttons
    document.querySelectorAll('.category-tag').forEach(tag => {
      tag.classList.remove('active');
    });
    
    // Add active class to clicked button
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      if (category === 'all') {
        // Show all products
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        // Check product category based on title or description
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        
        // Define category keywords
        const categoryKeywords = {
          'electronics': ['headphones', 'camera', 'drone', 'keyboard', 'smart', 'wireless'],
          'books': ['novel', 'book', 'mystery'],
          'sports': ['tennis', 'fitness', 'sports'],
          'home': ['coffee', 'maker', 'living']
        };
        
        // Check if product matches category
        const matches = categoryKeywords[category].some(keyword => 
          title.includes(keyword) || description.includes(keyword)
        );
        
        if (matches) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }


  export function shopLogic(){
    document.addEventListener('DOMContentLoaded', () => {
        const quickViewButtons = document.querySelectorAll('.quick-view');
        const quickViewModal = document.getElementById('quickView');
        const closeModals = document.querySelectorAll('.close-modal');
      
        const searchInput = document.querySelector('.search-input');
        searchInput.addEventListener('input', (e) => {
          const searchTerm = e.target.value.toLowerCase();
          const productCards = document.querySelectorAll('.product-card');
      
          productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            const matches = title.includes(searchTerm) || description.includes(searchTerm);
      
            if (matches) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
              card.style.display = 'none';
            }
          });
        });
      
        const filterButton = document.querySelector('.filter-button');
        filterButton.addEventListener('click', () => {
          const filterModal = document.createElement('div');
          filterModal.className = 'modal';
          filterModal.style.display = 'flex';
      
          filterModal.innerHTML = `
            <div class="modal-content" style="max-width: 500px;">
              <button class="close-modal" onclick="this.closest('.modal').remove()">×</button>
              <h2 style="color: var(--primary); margin-bottom: 2rem;">Filter Products</h2>
      
              <div class="filter-section" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Price Range</h3>
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                  <input type="number" placeholder="Min Price" id="minPrice" 
                         style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; width: 50%;">
                  <input type="number" placeholder="Max Price" id="maxPrice" 
                         style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; width: 50%;">
                </div>
              </div>
      
              <div class="filter-section" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Rating</h3>
                <select id="ratingFilter" style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                  <option value="all">All Ratings</option>
                  <option value="4.5">4.5 & Above</option>
                  <option value="4">4.0 & Above</option>
                  <option value="3.5">3.5 & Above</option>
                </select>
              </div>
      
              <div class="filter-section" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Stock Status</h3>
                <div style="display: flex; gap: 1rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox" id="inStockOnly" value="inStock">
                    In Stock Only
                  </label>
                </div>
              </div>
      
              <button onclick="applyFilters()" 
                      style="width: 100%; padding: 1rem; background: var(--primary); color: white; border: none; border-radius: 4px; cursor: pointer;">
                Apply Filters
              </button>
            </div>
          `;
      
          document.body.appendChild(filterModal);
        });
      
        window.applyFilters = function() {
          const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
          const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
          const minRating = parseFloat(document.getElementById('ratingFilter').value) || 0;
          const inStockOnly = document.getElementById('inStockOnly').checked;
      
          const productCards = document.querySelectorAll('.product-card');
      
          productCards.forEach(card => {
            const price = parseFloat(card.querySelector('.product-price span').textContent.replace('$', ''));
            const rating = parseFloat(card.querySelector('.rating span').textContent.replace(/[()]/g, ''));
            const isInStock = !card.querySelector('.stock-status').classList.contains('low');
      
            const matchesPrice = price >= minPrice && price <= maxPrice;
            const matchesRating = rating >= minRating;
            const matchesStock = !inStockOnly || isInStock;
      
            if (matchesPrice && matchesRating && matchesStock) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
              card.style.display = 'none';
            }
          });
      
          // Close the filter modal
          document.querySelector('.modal').remove();
        }
      
        window.addEventListener('click', (e) => {
          if (e.target.classList.contains('modal')) {
            e.target.remove();
          }
        });
      
        quickViewButtons.forEach(button => {
          button.addEventListener('click', () => {
            quickViewModal.style.display = 'flex';
          });
        });
      
        closeModals.forEach(button => {
          button.addEventListener('click', function() {
            this.closest('.modal, .cart-panel').style.display = 'none';
          });
        });
      
        window.addEventListener('click', (e) => {
          if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
          }
        });
      
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartPanel = document.querySelector('.cart-panel');
      
        addToCartButtons.forEach(button => {
          button.addEventListener('click', () => {
            showToast('Item added to cart successfully!');
            cartPanel.classList.add('active');
          });
        });
      
        function showToast(message) {
          const toast = document.querySelector('.toast');
          toast.querySelector('.toast-message').textContent = message;
          toast.classList.add('show');
      
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3000);
        }
      
        const categoryTags = document.querySelectorAll('.category-tag');
      
        categoryTags.forEach(tag => {
          tag.addEventListener('click', () => {
            categoryTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
          });
        });
      });
  }