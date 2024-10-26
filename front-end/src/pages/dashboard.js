import React, { useEffect } from "react";
import "./dashboard.css";
import { dashboardLogic } from "./pages";
import { Sidebar } from "../components/sidebar";

export function Dashboard(){
    useEffect(() => {
        dashboardLogic();
    }, []);
    
    return (
        <div className="dashboard-container">
        <Sidebar />
  {/* <aside className="dashboard-sidebar">
    <div className="logo-container">
      <div className="logo">Delivee Express</div>
    </div>
    <ul className="nav-menu">
      <li className="nav-item">
        <a
          href="https://delivee.express.com/dashboard"
          className="nav-link active"
        >
          <i className="fas fa-chart-line" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://delivee.express.com/shop" className="nav-link">
          <i className="fas fa-store" />
          <span>Shop</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://delivee.express.com/orders" className="nav-link">
          <i className="fas fa-box" />
          <span>My Orders</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://delivee.express.com/profile" className="nav-link">
          <i className="fas fa-user" />
          <span>Profile</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://delivee.express.com/settings" className="nav-link">
          <i className="fas fa-cog" />
          <span>Settings</span>
        </a>
      </li>
    </ul>
  </aside> */}
  <main className="dashboard-main">
    <div className="dashboard-header">
      <h1 className="welcome-text">Welcome back, John!</h1>
      <div className="quick-actions">
        <button className="action-btn">
          <i className="fas fa-plus" />
          New Order
        </button>
        <div className="notifications">
          <button className="action-btn">
            <i className="fas fa-bell" />
          </button>
          <span className="notification-badge">3</span>
        </div>
      </div>
    </div>
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-value">25</div>
            <div className="stat-label">Total Orders</div>
          </div>
          <div
            className="stat-icon"
            style={{ background: "var(--primary-color-dashboard)" }}
          >
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-value">$2,459</div>
            <div className="stat-label">Total Spent</div>
          </div>
          <div
            className="stat-icon"
            style={{ background: "var(--secondary-color-dashboard)" }}
          >
            <i className="fas fa-dollar-sign" />
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-value">18</div>
            <div className="stat-label">Delivered</div>
          </div>
          <div
            className="stat-icon"
            style={{ background: "var(--accent-color-1)" }}
          >
            <i className="fas fa-check-circle" />
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <div>
            <div className="stat-value">7</div>
            <div className="stat-label">Pending</div>
          </div>
          <div
            className="stat-icon"
            style={{ background: "var(--accent-color-2)" }}
          >
            <i className="fas fa-clock" />
          </div>
        </div>
      </div>
    </div>
    <div className="charts-container">
      <div className="chart-card">
        <h3>Monthly Performance</h3>
        <div className="simple-stats">
          <div className="stat-bar-container">
            <div className="stat-label">January</div>
            <div className="stat-bar" style={{ width: "65%" }}>
              65 orders
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-label">February</div>
            <div className="stat-bar" style={{ width: "80%" }}>
              80 orders
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-label">March</div>
            <div className="stat-bar" style={{ width: "45%" }}>
              45 orders
            </div>
          </div>
          <div className="stat-bar-container">
            <div className="stat-label">April</div>
            <div className="stat-bar" style={{ width: "90%" }}>
              90 orders
            </div>
          </div>
        </div>
      </div>
      <div className="chart-card">
        <h3>Categories Distribution</h3>
        <div className="category-stats">
          <div className="category-item">
            <div className="category-label">Electronics</div>
            <div className="category-progress">
              <div className="progress-bar" style={{ width: "40%" }}>
                40%
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-label">Fashion</div>
            <div className="category-progress">
              <div className="progress-bar" style={{ width: "25%" }}>
                25%
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-label">Home</div>
            <div className="category-progress">
              <div className="progress-bar" style={{ width: "20%" }}>
                20%
              </div>
            </div>
          </div>
          <div className="category-item">
            <div className="category-label">Beauty</div>
            <div className="category-progress">
              <div className="progress-bar" style={{ width: "15%" }}>
                15%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#ORD-001</td>
            <td>iPhone 13 Pro Max</td>
            <td>2024-02-20</td>
            <td>$1,099</td>
            <td>
              <span className="status-badge status-delivered">Delivered</span>
            </td>
          </tr>
          <tr>
            <td>#ORD-002</td>
            <td>Nike Air Max 2024</td>
            <td>2024-02-19</td>
            <td>$179</td>
            <td>
              <span className="status-badge status-processing">Processing</span>
            </td>
          </tr>
          <tr>
            <td>#ORD-003</td>
            <td>Modern Comfort Sofa</td>
            <td>2024-02-18</td>
            <td>$899</td>
            <td>
              <span className="status-badge status-pending">Pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</div>
    );
}

