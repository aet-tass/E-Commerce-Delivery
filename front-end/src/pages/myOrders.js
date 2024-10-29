import { useEffect } from "react";
import { Sidebar } from "../components/sidebar";
import { myOrdersLogic } from "./pages";
import './myOrders.css'


export function MyOrders(){
    useEffect( () =>{
        myOrdersLogic();
    }, []

    );

    return (
        <div className="dashboard-container">
  Sidebar
  <Sidebar />
  {/* Main Content */}
  <main className="orders-main">
    <div className="orders-header">
      <h1 className="page-title">My Orders</h1>
    </div>
    <div className="order-filters">
      <input
        type="text"
        placeholder="Search orders..."
        className="filter-input"
      />
      <select className="filter-select">
        <option value="all">All Status</option>
        <option value="delivered">Delivered</option>
        <option value="processing">Processing</option>
        <option value="pending">Pending</option>
      </select>
      <select className="filter-select">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
    <div className="orders-container">
      {/* Order 1 */}
      <div className="order-card">
        <div className="order-header">
          <span className="order-id">#ORD-001</span>
          <span className="order-date">Feb 20, 2024</span>
        </div>
        <div className="order-details">
          <div className="detail-group">
            <span className="detail-label">Product</span>
            <span className="detail-value">iPhone 13 Pro Max</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Amount</span>
            <span className="detail-value">$1,099</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Status</span>
            <span className="status-badge status-delivered">Delivered</span>
          </div>
        </div>
        <div className="tracking-timeline">
          <div className="timeline-item">
            <div className="timeline-date">Feb 20, 2024 - 15:30</div>
            <div className="timeline-status">Delivered to recipient</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Feb 19, 2024 - 10:15</div>
            <div className="timeline-status">Out for delivery</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Feb 18, 2024 - 18:45</div>
            <div className="timeline-status">Arrived at local facility</div>
          </div>
        </div>
        <div className="order-actions">
          <button className="action-button primary-button">
            <i className="fas fa-truck" />
            Track Order
          </button>
          <button className="action-button secondary-button">
            <i className="fas fa-receipt" />
            View Invoice
          </button>
        </div>
      </div>
      {/* Order 2 */}
      <div className="order-card">
        <div className="order-header">
          <span className="order-id">#ORD-002</span>
          <span className="order-date">Feb 19, 2024</span>
        </div>
        <div className="order-details">
          <div className="detail-group">
            <span className="detail-label">Product</span>
            <span className="detail-value">Nike Air Max 2024</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Amount</span>
            <span className="detail-value">$179</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Status</span>
            <span className="status-badge status-processing">Processing</span>
          </div>
        </div>
        <div className="tracking-timeline">
          <div className="timeline-item">
            <div className="timeline-date">Feb 19, 2024 - 09:30</div>
            <div className="timeline-status">Order confirmed</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">Feb 19, 2024 - 08:15</div>
            <div className="timeline-status">Payment received</div>
          </div>
        </div>
        <div className="order-actions">
          <button className="action-button primary-button">
            <i className="fas fa-truck" />
            Track Order
          </button>
          <button className="action-button secondary-button">
            <i className="fas fa-times" />
            Cancel Order
          </button>
        </div>
      </div>
      {/* Order 3 */}
      <div className="order-card">
        <div className="order-header">
          <span className="order-id">#ORD-003</span>
          <span className="order-date">Feb 18, 2024</span>
        </div>
        <div className="order-details">
          <div className="detail-group">
            <span className="detail-label">Product</span>
            <span className="detail-value">Modern Comfort Sofa</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Amount</span>
            <span className="detail-value">$899</span>
          </div>
          <div className="detail-group">
            <span className="detail-label">Status</span>
            <span className="status-badge status-pending">Pending</span>
          </div>
        </div>
        <div className="tracking-timeline">
          <div className="timeline-item">
            <div className="timeline-date">Feb 18, 2024 - 14:20</div>
            <div className="timeline-status">Order placed</div>
          </div>
        </div>
        <div className="order-actions">
          <button className="action-button primary-button">
            <i className="fas fa-credit-card" />
            Complete Payment
          </button>
          <button className="action-button secondary-button">
            <i className="fas fa-times" />
            Cancel Order
          </button>
        </div>
      </div>
    </div>
    <div className="pagination">
      <button className="page-button active">1</button>
      <button className="page-button">2</button>
      <button className="page-button">3</button>
      <button className="page-button">...</button>
      <button className="page-button">10</button>
    </div>
  </main>
</div>

    )

}
