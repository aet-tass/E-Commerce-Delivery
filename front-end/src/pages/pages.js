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

export function ProductsLopgic(){
 // Add click event listeners to category buttons and search functionality
// document.addEventListener('DOMContentLoaded', () => {

    const filterButton = document.querySelector('.filter-button');
    filterButton.addEventListener('click', () => {
      const filterModal = document.createElement('div');
      filterModal.className = 'modal';
      filterModal.style.display = 'flex';

      if (document.querySelector('.modal')) {
        document.querySelector('.modal').remove();
      }
  
      filterModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
          <button class="close-modal" onClick="this.closest('.modal').remove()">×</button>
          <h2 style="color: var(--primary-shop); margin-bottom: 2rem;">Filter Products</h2>
  
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
  
          <button onClick="applyFilters()" 
                  style="width: 100%; padding: 1rem; background: var(--primary-shop); color: white; border: none; border-radius: 4px; cursor: pointer;">
            Apply Filters
          </button>
        </div>
      `;
  
      document.body.appendChild(filterModal);
    });

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


  const categoryButtons = document.querySelectorAll('.category-tag');
  const productCards = document.querySelectorAll('.product-card');

  // Add data-category attributes to existing product cards
  const categoryMap = {
    'Wireless Headphones': 'electronics',
    'Smart Fitness Watch': 'electronics',
    'Leather Laptop Bag': 'home',
    'Professional Camera': 'electronics',
    'Smart Security Camera': 'electronics',
    'Gaming Keyboard RGB': 'electronics'
  };

  // Set data-category attribute for each product card
  productCards.forEach(card => {
    const productTitle = card.querySelector('.product-title').textContent;
    card.setAttribute('data-category', categoryMap[productTitle] || 'electronics');
  });

  // Search functionality
  window.searchProducts = function(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    
    productCards.forEach(card => {
      const title = card.querySelector('.product-title').textContent.toLowerCase();
      const description = card.querySelector('.product-description').textContent.toLowerCase();
      const price = card.querySelector('.product-price').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || 
          description.includes(searchTerm) || 
          price.includes(searchTerm)) {
        card.style.display = 'block';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transition = 'opacity 0.3s ease';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  };

  // Category filter functionality
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
// });

// document.addEventListener('DOMContentLoaded', () => {
  // Add Product Button
  const addProductBtn = document.querySelector('.add-product-btn');
  addProductBtn.onclick = () => showProductForm(false);

  // Admin Functions
  function showProductForm(isEdit = false, productData = null) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';

    const formHTML = `
      <div class="modal-content">
        <button class="close-modal" onclick="this.closest('.modal').remove()">×</button>
        <h2 style="color: var(--primary-products); margin-bottom: 2rem;">
          ${isEdit ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form id="${isEdit ? 'editProductForm' : 'addProductForm'}" style="display: grid; gap: 1.5rem;">
          <div class="form-group">
            <label>Product Name</label>
            <input type="text" name="name" value="${productData?.title || ''}" required>
          </div>

          <div class="form-group">
            <label>Description</label>
            <textarea name="description" required>${productData?.description || ''}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Original Price</label>
              <input type="number" name="originalPrice" step="0.01" value="${productData?.originalPrice || ''}" required>
            </div>
            
            <div class="form-group">
              <label>Reduced Price</label>
              <input type="number" name="reducedPrice" step="0.01" value="${productData?.price || ''}">
            </div>

            <div class="form-group">
              <label>Discount Rate (%)</label>
              <input type="number" name="discount" min="0" max="100" value="${productData?.discount || ''}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Stock Status</label>
              <select name="stockStatus" required>
                <option value="in_stock">In Stock</option>
                <option value="low_stock">Low Stock</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </div>

            <div class="form-group">
              <label>Product Badge</label>
              <select name="badge">
                <option value="">None</option>
                <option value="hot">Hot</option>
                <option value="new">New</option>
                <option value="trending">Trending</option>
                <option value="best_seller">Best Seller</option>
              </select>
            </div>

            <div class="form-group">
              <label>Category</label>
              <select name="category" required>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="sports">Sports</option>
                <option value="home">Home & Living</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>Quantity</label>
            <input type="number" name="quantity" min="0" value="${productData?.quantity || '0'}" required>
          </div>

          <div class="form-group">
            <label>Product Image</label>
            <input type="file" name="image" accept="image/*" ${!isEdit ? 'required' : ''}>
          </div>
          
          <button type="submit" class="submit-btn">
            ${isEdit ? 'Save Changes' : 'Add Product'}
          </button>
        </form>
      </div>
    `;

    modal.innerHTML = formHTML;
    document.body.appendChild(modal);

    // Add form styles
    const style = document.createElement('style');
    style.textContent = `
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .form-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      
      .form-group input,
      .form-group select,
      .form-group textarea {
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 0.9rem;
      }
      
      .form-group textarea {
        min-height: 100px;
        resize: vertical;
      }
      
      .form-group label {
        font-weight: 500;
        color: var(--text-dark-products);
      }
      
      .submit-btn {
        padding: 1rem;
        background: var(--success-products);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      
      .submit-btn:hover {
        background: var(--primary-products);
        transform: translateY(-2px);
      }
    `;
    document.head.appendChild(style);

    // Handle form submission
    const form = modal.querySelector('form');
    form.onsubmit = (e) => {
      e.preventDefault();
      // Process form data here
      const formData = new FormData(form);
      console.log('Form data:', Object.fromEntries(formData));
      
      modal.remove();
      showToast(`Product ${isEdit ? 'updated' : 'added'} successfully!`);
    };
  }

  // Edit product handler
  document.querySelectorAll('.edit-product').forEach(btn => {
    btn.onclick = (e) => {
      const productCard = e.target.closest('.product-card');
      const productData = {
        title: productCard.querySelector('.product-title').textContent,
        description: productCard.querySelector('.product-description').textContent,
        originalPrice: productCard.querySelector('.original-price') ? productCard.querySelector('.original-price').textContent.replace('$', '') : '',
        price: productCard.querySelector('.product-price span').textContent.replace('$', ''),
        quantity: productCard.querySelector('.quantity-value').textContent || '0',
        // Add other existing product data here
      };
      showProductForm(true, productData);
    };
  });

  // Delete product handler
  document.querySelectorAll('.delete-product').forEach(btn => {
    btn.onclick = (e) => {
      if (confirm('Are you sure you want to delete this product?')) {
        const productCard = e.target.closest('.product-card');
        productCard.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
          productCard.remove();
          showToast('Product deleted successfully!');
        }, 300);
      }
    };
  });

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fas fa-check-circle toast-icon"></i>
      <span class="toast-message">${message}</span>
    `;
    document.body.appendChild(toast);
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }
// });
}

