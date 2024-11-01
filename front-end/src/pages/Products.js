import React from 'react';
import { ProductsLopgic } from './pages';
import './Products.css';
import { useEffect } from 'react';
import { SidebarAdmin } from '../components/SideBarAdmin';



export function Products(){
  useEffect(() => {
    ProductsLopgic();
}, []);


    return (
        <div className="dashboard-container">
        <SidebarAdmin />
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
            <button className="category-tag active" data-category="all">
              All Products
            </button>
            <button className="category-tag" data-category="electronics">
              Electronics
            </button>
            <button className="category-tag" data-category="books">
              Books
            </button>
            <button className="category-tag" data-category="sports">
              Sports
            </button>
            <button className="category-tag" data-category="home">
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">25</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">30</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">15</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">8</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">20</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
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
                <div className="quantity-display">
                  <span className="quantity-label">Quantity:</span>
                  <span className="quantity-value">40</span>
                </div>
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
                <div
                  className="product-actions admin-actions"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <button className="action-button edit-product">
                    <i className="fas fa-edit" />
                    Edit
                  </button>
                  <button className="action-button delete-product">
                    <i className="fas fa-trash" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="add-product-btn">
            <i className="fas fa-plus" />
          </button>
        </main>
      </div>
    );

}