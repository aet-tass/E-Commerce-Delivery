import React from "react";
import { Sidebar } from "../components/sidebar";
import "./shop.css";
import { useEffect } from "react";

export function Shop() {

    useEffect(() => {
        ShopScript();
    }, []);

    function filterByCategory(category) {
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

    function showCheckoutProcess() {
        // Create and show checkout modal
        const modal = document.createElement('div');
        modal.className = 'modal checkout-modal';
        modal.style.display = 'flex';

        modal.innerHTML = `
          <div class="modal-content checkout-content" style="max-width: 600px;">
            <button class="close-modal" onClick="this.closest('.modal').remove()">×</button>
            <h2 style="color: var(--primary-shop); margin-bottom: 2rem;">Checkout</h2>

            <div class="payment-methods" style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
              <h3 style="color: var(--text-dark-shop);">Select Payment Method</h3>

              <div class="payment-option" style="padding: 1rem; border: 1px solid #eee; border-radius: 8px; cursor: not-allowed; opacity: 0.7;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <input type="radio" disabled>
                  <div>
                    <h4 style="color: var(--text-dark-shop);">Credit/Debit Card</h4>
                    <p style="color: var(--text-light-shop); font-size: 0.9rem;">Visa/Mastercard (Coming Soon)</p>
                  </div>
                  <i class="fas fa-credit-card" style="margin-left: auto; color: var(--text-light-shop);"></i>
                </div>
              </div>

              <div class="payment-option" style="padding: 1rem; border: 1px solid var(--primary-shop); border-radius: 8px; cursor: pointer; background: var(--bg-light-shop);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <input type="radio" checked>
                  <div>
                    <h4 style="color: var(--text-dark-shop);">Cash on Delivery</h4>
                    <p style="color: var(--text-light-shop); font-size: 0.9rem;">Pay when you receive your order</p>
                  </div>
                  <i class="fas fa-money-bill-wave" style="margin-left: auto; color: var(--success-shop);"></i>
                </div>
              </div>
            </div>

            <div class="delivery-address" style="margin-bottom: 2rem;">
              <h3 style="color: var(--text-dark-shop); margin-bottom: 1rem;">Delivery Address</h3>
              <form style="display: grid; gap: 1rem;">
                <input type="text" placeholder="Full Name" required 
                       style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                <input type="tel" placeholder="Phone Number" required 
                       style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px;">
                <textarea placeholder="Delivery Address" required 
                          style="padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></textarea>
              </form>
            </div>

            <div class="order-summary" style="background: var(--bg-light-shop); padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
              <h3 style="color: var(--text-dark-shop); margin-bottom: 1rem;">Order Summary</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Subtotal:</span>
                <span class="cart-subtotal">$${calculateTotal().toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Delivery Fee:</span>
                <span>$5.00</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #ddd;">
                <span>Total:</span>
                <span class="cart-final-total">$${(calculateTotal() + 5).toFixed(2)}</span>
              </div>
            </div>

            <button onClick="processOrder()" 
                    style="width: 100%; padding: 1rem; background: var(--success-shop); color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">
              Place Order
            </button>
          </div>
        `;

        document.body.appendChild(modal);
    }

    function calculateTotal() {
        const total = Array.from(window.cart.items.values()).reduce((sum, item) => {
          return sum + (item.product.price * item.quantity);
        }, 0);
        return total;
    }

    return (
        <>
            <div className="container">
                <Sidebar />
                <main className="main-content">
                <div className="search-bar">
                    <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                    />
                    <button className="filter-button">
                    <i className="fas fa-sliders-h" />
                    Filters
                    </button>
                </div>
                <div className="category-filters">
                    <button
                    className="category-tag active"
                    data-category="all"
                    onClick={() => filterByCategory('all')}
                    >
                    All Products
                    </button>
                    <button
                    className="category-tag"
                    data-category="electronics"
                    onClick={() => filterByCategory('electronics')}
                    >
                    Electronics
                    </button>
                    <button
                    className="category-tag"
                    data-category="books"
                    onClick={() => filterByCategory('books')}
                    >
                    Books
                    </button>
                    <button
                    className="category-tag"
                    data-category="sports"
                    onClick={() => filterByCategory('sports')}
                    >
                    Sports
                    </button>
                    <button
                    className="category-tag"
                    data-category="home"
                    onClick={() => filterByCategory('home')}
                    >
                    Home &amp; Living
                    </button>
                </div>
                <div className="products-grid">
                    {/* Existing Product Card 1 */}
                    <div className="product-card">
                    <span className="product-badge">NEW</span>
                    <img
                        src="product1.jpg"
                        alt="Premium wireless headphones with noise cancellation"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Wireless Headphones</h3>
                        <p className="product-description">
                        Premium wireless headphones with noise cancellation.
                        </p>
                        <div className="product-price">
                        <span>$199.99</span>
                        <span className="original-price">$249.99</span>
                        <span className="discount-badge">-20%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            </div>
                            <span>(4.5)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Existing Product Card 2 */}
                    <div className="product-card">
                    <span className="product-badge">HOT</span>
                    <img
                        src="product2.jpg"
                        alt="Smart fitness watch with heart rate monitor"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Smart Fitness Watch</h3>
                        <p className="product-description">
                        Track your fitness with this advanced smartwatch.
                        </p>
                        <div className="product-price">
                        <span>$149.99</span>
                        <span className="original-price">$179.99</span>
                        <span className="discount-badge">-15%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </div>
                            <span>(5.0)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Existing Product Card 3 */}
                    <div className="product-card">
                    <img
                        src="product3.jpg"
                        alt="Premium leather laptop bag"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Leather Laptop Bag</h3>
                        <p className="product-description">
                        Elegant and spacious laptop bag made from genuine leather.
                        </p>
                        <div className="product-price">
                        <span>$89.99</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                            </div>
                            <span>(4.0)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Existing Product Card 4 */}
                    <div className="product-card">
                    <span className="product-badge">SALE</span>
                    <img
                        src="product4.jpg"
                        alt="Professional camera with zoom lens"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Professional Camera</h3>
                        <p className="product-description">
                        High-quality digital camera with 4K video capabilities.
                        </p>
                        <div className="product-price">
                        <span>$899.99</span>
                        <span className="original-price">$1099.99</span>
                        <span className="discount-badge">-18%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            </div>
                            <span>(4.7)</span>
                        </div>
                        <div className="stock-status low">
                            <i className="fas fa-exclamation-circle" />
                            Low Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Existing Product Card 5 */}
                    <div className="product-card">
                    <img
                        src="product5.jpg"
                        alt="Smart home security camera system"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Smart Security Camera</h3>
                        <p className="product-description">
                        HD security camera with night vision and motion detection.
                        </p>
                        <div className="product-price">
                        <span>$129.99</span>
                        <span className="original-price">$159.99</span>
                        <span className="discount-badge">-19%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                            </div>
                            <span>(4.2)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* Existing Product Card 6 */}
                    <div className="product-card">
                    <span className="product-badge">TRENDING</span>
                    <img
                        src="product6.jpg"
                        alt="Wireless gaming keyboard with RGB lighting"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Gaming Keyboard RGB</h3>
                        <p className="product-description">
                        Mechanical gaming keyboard with customizable RGB lighting.
                        </p>
                        <div className="product-price">
                        <span>$79.99</span>
                        <span className="original-price">$99.99</span>
                        <span className="discount-badge">-20%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            </div>
                            <span>(4.6)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* New Product Card 1 (Books Category) */}
                    <div className="product-card">
                    <span className="product-badge">BESTSELLER</span>
                    <img
                        src="novel.jpg"
                        alt="Mystery novel with embossed cover"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Mystery of the Ages</h3>
                        <p className="product-description">
                        Gripping mystery novel with unexpected twists.
                        </p>
                        <div className="product-price">
                        <span>$19.99</span>
                        <span className="original-price">$24.99</span>
                        <span className="discount-badge">-20%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            </div>
                            <span>(4.5)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* New Product Card 2 (Sports Category) */}
                    <div className="product-card">
                    <img
                        src="tennis.jpg"
                        alt="Professional tennis racket"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Pro Tennis Racket</h3>
                        <p className="product-description">
                        Tournament-grade tennis racket with carrying case.
                        </p>
                        <div className="product-price">
                        <span>$159.99</span>
                        <span className="original-price">$189.99</span>
                        <span className="discount-badge">-16%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                            </div>
                            <span>(4.0)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* New Product Card 3 (Home Category) */}
                    <div className="product-card">
                    <span className="product-badge">NEW</span>
                    <img
                        src="coffeemaker.jpg"
                        alt="Smart coffee maker with timer"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">Smart Coffee Maker</h3>
                        <p className="product-description">
                        WiFi-enabled coffee maker with scheduling.
                        </p>
                        <div className="product-price">
                        <span>$129.99</span>
                        <span className="original-price">$149.99</span>
                        <span className="discount-badge">-13%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </div>
                            <span>(5.0)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                    {/* New Product Card 4 (Electronics Category) */}
                    <div className="product-card">
                    <span className="product-badge">PREMIUM</span>
                    <img
                        src="drone.jpg"
                        alt="Professional camera drone with 4K recording"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-title">4K Camera Drone</h3>
                        <p className="product-description">
                        Professional drone with stabilized 4K camera.
                        </p>
                        <div className="product-price">
                        <span>$799.99</span>
                        <span className="original-price">$999.99</span>
                        <span className="discount-badge">-20%</span>
                        </div>
                        <div className="product-meta">
                        <div className="rating">
                            <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            </div>
                            <span>(4.7)</span>
                        </div>
                        <div className="stock-status">
                            <i className="fas fa-check-circle" />
                            In Stock
                        </div>
                        </div>
                        <div className="product-actions">
                        <button className="action-button add-to-cart">
                            <i className="fas fa-shopping-cart" />
                            Add to Cart
                        </button>
                        <button className="action-button quick-view">
                            <i className="fas fa-eye" />
                            Quick View
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </main>

            </div>

            <div className="modal" id="quickView">
                <div className="modal-content">
                <button className="close-modal">×</button>
                <div className="modal-image-section">
                    <img src="product1.jpg" alt="Product" className="modal-image" />
                </div>
                <div className="modal-details">
                    <h2 className="modal-title">Wireless Headphones</h2>
                    <div className="modal-price">
                    $199.99
                    <span className="original-price">$249.99</span>
                    <span className="discount-badge">-20%</span>
                    </div>
                    <p className="modal-description">
                    Premium wireless headphones with active noise cancellation, delivering
                    crystal-clear sound quality and exceptional comfort for extended
                    listening sessions.
                    </p>
                    <div className="modal-meta">
                    <div className="meta-item">
                        <i className="fas fa-truck meta-icon" />
                        Free Shipping
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-undo meta-icon" />
                        30-Day Returns
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-shield-alt meta-icon" />2 Year Warranty
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-clock meta-icon" />
                        Same Day Delivery
                    </div>
                    </div>
                    <button className="action-button add-to-cart">
                    <i className="fas fa-shopping-cart" />
                    Add to Cart
                    </button>
                </div>
                </div>
            </div>
            {/* Cart Panel */}
            <div className="cart-panel">
                <div className="cart-header">
                <h3>Shopping Cart</h3>
                <button className="close-modal">×</button>
                </div>
                <div className="cart-items">
                <div className="cart-empty-state">
                    <i className="fas fa-shopping-cart fa-3x" />
                    <p>Your cart is empty</p>
                </div>
                <template id="cart-item-template" />
                </div>
                <div className="cart-footer">
                <div className="cart-total">
                    <span>Total:</span>
                    <span>$0.00</span>
                </div>
                <button className="checkout-btn" onClick={ () => showCheckoutProcess()}>
                    Proceed to Checkout
                </button>
                </div>
            </div>
            {/* Toast Notification */}
            <div className="toast">
                <i className="fas fa-check-circle toast-icon" />
                <span className="toast-message">Item added to cart successfully!</span>
            </div>
        </>
    );
}

function ShopScript() {
    // Add event listener to prevent crashes
    const quickViewAddToCart = document.querySelector('[w-tid="325"]');
    if (quickViewAddToCart) {
        quickViewAddToCart.addEventListener('click', (e) => {
          e.preventDefault();
          // Get product details from the modal
          const modalContent = e.target.closest('.modal-content');
          const product = {
            id: Math.random().toString(36).substr(2, 9), // Generate unique ID
            title: modalContent.querySelector('.modal-title').textContent,
            price: parseFloat(modalContent.querySelector('.modal-price').textContent.replace('$', '')),
            image: modalContent.querySelector('.modal-image').src
          };

          // Add to cart safely
          if (window.cart) {
            window.cart.addItem(product);

            // Show toast
            const toast = document.querySelector('.toast');
            if (toast) {
              toast.classList.add('show');
              setTimeout(() => toast.classList.remove('show'), 3000);
            }

            // Close modal
            const modal = document.querySelector('#quickView');
            if (modal) {
              modal.style.display = 'none';
            }

            // Show cart panel
            const cartPanel = document.querySelector('.cart-panel');
            if (cartPanel) {
              cartPanel.classList.add('active');
            }
          }
        });
    }

    class ShoppingCart {
        constructor() {
          this.items = new Map();
          this.container = document.querySelector('.cart-items');
          this.template = document.getElementById('cart-item-template');
          this.emptyState = document.querySelector('.cart-empty-state');
          this.totalElement = document.querySelector('.cart-total span:last-child');

          this.init();
        }

        init() {
          const savedCart = localStorage.getItem('cart');
          if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            parsedCart.forEach(item => this.addItem(item));
          }
          this.updateEmptyState();
        }

        addItem(product) {
          if (this.items.has(product.id)) {
            this.updateQuantity(product.id, 1);
            return;
          }

          const itemElement = this.template.content.cloneNode(true).querySelector('.cart-item');
          itemElement.querySelector('img').src = product.image;
          itemElement.querySelector('img').alt = product.title;
          itemElement.querySelector('.cart-item-title').textContent = product.title;
          itemElement.querySelector('.cart-item-price').textContent = `$${product.price.toFixed(2)}`;

          const quantityControls = itemElement.querySelector('.quantity-controls');
          const quantityDisplay = quantityControls.querySelector('.quantity');

          quantityControls.querySelector('.minus').addEventListener('click', () => {
            this.updateQuantity(product.id, -1);
          });

          quantityControls.querySelector('.plus').addEventListener('click', () => {
            this.updateQuantity(product.id, 1);
          });

          itemElement.querySelector('.remove-item').addEventListener('click', () => {
            this.removeItem(product.id);
          });

          this.items.set(product.id, {
            element: itemElement,
            product,
            quantity: 1
          });

          this.container.appendChild(itemElement);
          this.updateEmptyState();
          this.saveCart();
          this.updateTotal();
        }

        updateQuantity(productId, delta) {
          const item = this.items.get(productId);
          if (!item) return;

          const newQuantity = item.quantity + delta;
          if (newQuantity < 1) return;

          item.quantity = newQuantity;
          item.element.querySelector('.quantity').textContent = newQuantity;

          this.updateTotal();
          this.saveCart();
        }

        removeItem(productId) {
          const item = this.items.get(productId);
          if (!item) return;

          item.element.classList.add('removing');

          setTimeout(() => {
            item.element.remove();
            this.items.delete(productId);
            this.updateEmptyState();
            this.updateTotal();
            this.saveCart();
          }, 500);
        }

        updateEmptyState() {
          this.emptyState.style.display = this.items.size === 0 ? 'flex' : 'none';
        }

        updateTotal() {
          const total = Array.from(this.items.values()).reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
          }, 0);

          this.totalElement.textContent = `$${total.toFixed(2)}`;
        }

        saveCart() {
          const cartData = Array.from(this.items.values()).map(item => ({
            ...item.product,
            quantity: item.quantity
          }));
          localStorage.setItem('cart', JSON.stringify(cartData));
        }

        clear() {
          this.items.clear();
          while (this.container.firstChild) {
            this.container.firstChild.remove();
          }
          this.updateEmptyState();
          this.updateTotal();
          this.saveCart();
        }
    }

    
    window.cart = new ShoppingCart();
    function processOrder() {
        const checkoutModal = document.querySelector('.checkout-modal');
        const form = checkoutModal.querySelector('form');

        if (form.checkValidity()) {
          // Show success message
          const successModal = document.createElement('div');
          successModal.className = 'modal';
          successModal.style.display = 'flex';

          successModal.innerHTML = `
            <div class="modal-content" style="text-align: center; padding: 2rem;">
              <i class="fas fa-check-circle" style="color: var(--success-shop); font-size: 4rem; margin-bottom: 1rem;"></i>
              <h2 style="color: var(--success-shop); margin-bottom: 1rem;">Order Placed Successfully!</h2>
              <p style="color: var(--text-light-shop); margin-bottom: 2rem;">Thank you for your order. We will contact you shortly to confirm delivery.</p>
              <button onClick="location.reload()" 
                      style="padding: 1rem 2rem; background: var(--primary-shop); color: white; border: none; border-radius: 4px; cursor: pointer;">
                Continue Shopping
              </button>
            </div>
          `;

          checkoutModal.remove();
          document.body.appendChild(successModal);

          // Clear cart
          window.cart.clear();

        } else {
          // Show error for invalid form
          alert('Please fill in all required fields');
        }
    }


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
}

export default Shop;
