import { useEffect } from "react"
import { shopLogic, filterByCategory } from "./pages";
import './shop.css';

export function shop(){
    useEffect(() => {
        shopLogic();
        filterByCategory('all');
    }, []);
    return (<>
        <base href="https://delivee.express.com/shop?" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Delivee Express - Shop</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n:root {\n  --primary: #8E44AD;      /* Purple */\n  --primary-dark: #6C3483; /* Darker purple */\n  --secondary: #F39C12;    /* Orange */\n  --accent: #FFE066;       /* Soft yellow */\n  --success: #E67E22;      /* Deep orange */\n  --danger: #FF5E7D;       /* Soft pink */\n  --bg-light: #FDF9F3;     /* Very light warm background */\n  --text-dark: #2C3E50;    /* Deep blue-gray */\n  --text-light: #95A5A6;   /* Soft gray */\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Inter', sans-serif;\n}\n\nbody {\n  background: var(--bg-light);\n  color: var(--text-dark);\n}\n\n.container {\n  display: flex;\n  min-height: 100vh;\n}\n\n/* Enhanced Sidebar Styles */\n.sidebar {\n  width: 250px;\n  background: var(--primary);\n  color: white;\n  padding: 2rem 1rem;\n  position: fixed;\n  height: 100vh;\n  box-shadow: var(--shadow-md);\n  z-index: 100;\n  transition: all 0.3s ease;\n}\n\n.sidebar-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n  padding: 0 1rem;\n}\n\n.sidebar-logo img {\n  height: 40px;\n}\n\n.nav-menu {\n  list-style: none;\n}\n\n.nav-item {\n  margin-bottom: 0.5rem;\n}\n\n.nav-link {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  border-radius: var(--radius-sm);\n  transition: all 0.3s ease;\n}\n\n.nav-link:hover,\n.nav-link.active {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n\n.nav-link i {\n  margin-right: 1rem;\n  font-size: 1.2rem;\n  width: 20px;\n  text-align: center;\n}\n\n/* Enhanced Main Content */\n.main-content {\n  margin-left: 250px;\n  padding: 2rem;\n  width: calc(100% - 250px);\n}\n\n/* Improved Search and Filter Bar */\n.search-bar {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  background: var(--bg-light);\n  padding: 1rem 0;\n  z-index: 90;\n}\n\n.search-input {\n  flex: 1;\n  padding: 1rem 1.5rem;\n  background: white;\n  border: 1px solid #e0e0e0;\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n\n.search-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.1);\n}\n\n.filter-button {\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: var(--radius-md);\n  background: var(--primary);\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.filter-button:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n\n/* Category Filters */\n.category-filters {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n\n.category-tag {\n  background: white;\n  color: var(--primary);\n  border: 1px solid var(--primary);\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: var(--radius-md);\n  transition: all 0.3s ease;\n}\n\n.category-tag:hover,\n.category-tag.active {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-2px);\n}\n\n/* Enhanced Product Grid */\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 2rem;\n}\n\n.product-card {\n  background: white;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.product-card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n\n.product-image {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.product-card:hover .product-image {\n  transform: scale(1.05);\n}\n\n.product-badge {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: var(--secondary);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n\n.product-details {\n  padding: 1.5rem;\n}\n\n.product-title {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  color: var(--text-dark);\n}\n\n.product-description {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n\n.product-price {\n  color: var(--primary);\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.original-price {\n  color: var(--text-light);\n  text-decoration: line-through;\n  font-size: 1rem;\n}\n\n.discount-badge {\n  background: var(--success);\n  color: white;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.8rem;\n}\n\n.product-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: var(--accent);\n  border-radius: var(--radius-md);\n}\n\n.rating {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.stars {\n  color: var(--secondary);\n  display: flex;\n  gap: 0.2rem;\n}\n\n.stock-status {\n  font-size: 0.9rem;\n  color: var(--success);\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n.stock-status.low {\n  color: var(--danger);\n}\n\n.product-actions {\n  display: flex;\n  gap: 1rem;\n}\n\n.action-button {\n  background: var(--primary);\n  color: white;\n  font-weight: 500;\n  letter-spacing: 0.3px;\n  transition: all 0.4s ease;\n  flex: 1;\n  padding: 0.8rem;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n}\n\n.action-button:hover {\n  background: var(--secondary);\n  color: white;\n  transform: translateY(-2px);\n}\n\n/* Enhanced Quick View Modal */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.7);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  backdrop-filter: blur(5px);\n}\n\n.modal-content {\n  background: linear-gradient(135deg, var(--bg-light), white);\n  border-radius: var(--radius-lg);\n  width: 95%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n  position: relative;\n  padding: 2rem;\n}\n\n.modal-image-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-image {\n  width: 100%;\n  height: auto;\n  max-height: 400px;\n  object-fit: contain;\n  border-radius: var(--radius-md);\n}\n\n.modal-details {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.modal-title {\n  font-size: 1.8rem;\n  color: var(--text-dark);\n}\n\n.modal-price {\n  font-size: 2rem;\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.modal-description {\n  color: var(--text-light);\n  line-height: 1.6;\n}\n\n.modal-meta {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-md);\n}\n\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.meta-icon {\n  color: var(--primary);\n}\n\n.close-modal {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-light);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.close-modal:hover {\n  color: var(--text-dark);\n  transform: rotate(90deg);\n}\n\n/* Cart Preview Panel */\n.cart-panel {\n  position: fixed;\n  top: 0;\n  right: -400px;\n  width: 400px;\n  height: 100vh;\n  background: white;\n  box-shadow: -5px 0 15px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n}\n\n.cart-panel.active {\n  right: 0;\n}\n\n.cart-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--bg-light);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cart-items {\n  padding: 1rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 200px);\n}\n\n.cart-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  color: var(--text-light);\n  gap: 1rem;\n}\n\n.cart-item {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background: white;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n  animation: slideIn 0.3s ease;\n}\n\n.cart-item-image {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.cart-item-details {\n  flex: 1;\n}\n\n.cart-item-title {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n  color: var(--text-dark);\n}\n\n.cart-item-price {\n  color: var(--primary);\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n\n.cart-item-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: var(--bg-light);\n  padding: 0.3rem;\n  border-radius: 20px;\n}\n\n.quantity-btn {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: none;\n  background: white;\n  color: var(--text-dark);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.quantity-btn:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n\n.remove-item {\n  background: none;\n  border: none;\n  color: var(--danger);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\n.remove-item:hover {\n  transform: scale(1.1);\n}\n\n.cart-footer {\n  padding: 1.5rem;\n  border-top: 1px solid var(--bg-light);\n}\n\n.cart-total {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n\n.checkout-btn {\n  width: 100%;\n  padding: 1rem;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.checkout-btn:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n\n/* Toast Notification */\n.toast {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  background: white;\n  padding: 1rem 2rem;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transform: translateY(150%);\n  transition: transform 0.3s ease;\n  z-index: 1000;\n}\n\n.toast.show {\n  transform: translateY(0);\n}\n\n.toast-icon {\n  color: var(--success);\n  font-size: 1.5rem;\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes slideIn {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n@keyframes slideInRight {\n  from { transform: translateX(100%); }\n  to { transform: translateX(0); }\n}\n\n.animate-fade {\n  animation: fadeIn 0.3s ease;\n}\n\n.animate-slide {\n  animation: slideIn 0.3s ease;\n}\n\n.animate-slide-right {\n  animation: slideInRight 0.3s ease;\n}\n\n/* Responsive Design */\n@media (max-width: 1024px) {\n  .modal-content {\n    grid-template-columns: 1fr;\n    width: 90%;\n  }\n  \n  .modal-image {\n    max-height: 300px;\n  }\n}\n\n@media (max-width: 768px) {\n  .sidebar {\n    width: 80px;\n    padding: 1rem 0.5rem;\n  }\n  \n  .nav-link span {\n    display: none;\n  }\n  \n  .nav-link i {\n    margin-right: 0;\n  }\n  \n  .main-content {\n    margin-left: 80px;\n    width: calc(100% - 80px);\n  }\n  \n  .cart-panel {\n    width: 100%;\n    right: -100%;\n  }\n  \n  .products-grid {\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  }\n}\n"
          }}
        />
        <div className="container">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-logo">
              <img src="logo.png" alt="Delivee Express Logo" />
            </div>
            <nav>
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="dashboard" className="nav-link">
                    <i className="fas fa-home" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop" className="nav-link active">
                    <i className="fas fa-store" />
                    <span>Shop</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="orders" className="nav-link">
                    <i className="fas fa-box" />
                    <span>Orders</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="wishlist" className="nav-link">
                    <i className="fas fa-heart" />
                    <span>Wishlist</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="profile" className="nav-link">
                    <i className="fas fa-user" />
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          {/* Main Content */}
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
                onclick="filterByCategory('all')"
              >
                All Products
              </button>
              <button
                className="category-tag"
                data-category="electronics"
                onclick="filterByCategory('electronics')"
              >
                Electronics
              </button>
              <button
                className="category-tag"
                data-category="books"
                onclick="filterByCategory('books')"
              >
                Books
              </button>
              <button
                className="category-tag"
                data-category="sports"
                onclick="filterByCategory('sports')"
              >
                Sports
              </button>
              <button
                className="category-tag"
                data-category="home"
                onclick="filterByCategory('home')"
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
        {/* Quick View Modal */}
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
            <button className="checkout-btn" onclick="showCheckoutProcess()">
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
      )
}