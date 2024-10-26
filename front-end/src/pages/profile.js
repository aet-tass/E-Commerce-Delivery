import React, { useEffect } from 'react';
import { pLogic } from './pages';
import { Sidebar } from '../components/sidebar';
import './profile.css';


export function Profile(){
    useEffect(() => {
        pLogic();
    }, []);
    return(
<div className="dashboard-container">
<Sidebar />
  {/* Main Content */}
  <main className="profile-main">
    <div className="profile-header">
      <div className="profile-avatar">
        JD
        <div className="avatar-upload">
          <i className="fas fa-camera" />
        </div>
      </div>
      <div className="profile-info">
        <h1 className="profile-name">John Doe</h1>
        <div className="profile-email">john.doe@example.com</div>
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">24</div>
            <div className="stat-label">Orders</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">$2.4k</div>
            <div className="stat-label">Spent</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4</div>
            <div className="stat-label">Reviews</div>
          </div>
        </div>
      </div>
    </div>
    <div className="profile-content">
      <div className="profile-section">
        <div className="section-title">
          Personal Information
          <button className="edit-button">Edit</button>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" defaultValue="John Doe" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              defaultValue="john.doe@example.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-input"
              defaultValue="+1 234 567 890"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-input"
              defaultValue="1990-01-01"
            />
          </div>
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
      <div className="profile-section">
        <div className="section-title">
          Delivery Addresses
          <button className="edit-button">+ Add New</button>
        </div>
        <div className="address-card">
          <div className="address-type">Home</div>
          <div className="address-text">
            123 Main Street, Apt 4B
            <br />
            New York, NY 10001
            <br />
            United States
          </div>
          <div className="address-actions">
            <button className="action-btn edit">Edit</button>
            <button className="action-btn delete">Delete</button>
          </div>
        </div>
        <div className="address-card">
          <div className="address-type">Office</div>
          <div className="address-text">
            456 Business Ave
            <br />
            New York, NY 10002
            <br />
            United States
          </div>
          <div className="address-actions">
            <button className="action-btn edit">Edit</button>
            <button className="action-btn delete">Delete</button>
          </div>
        </div>
      </div>
      <div className="profile-section">
        <div className="section-title">Recent Notifications</div>
        <div className="notification-item">
          <div className="notification-icon">
            <i className="fas fa-box" />
          </div>
          <div className="notification-content">
            <div className="notification-title">Order Delivered</div>
            <div className="notification-text">
              Your order #ORD-001 has been delivered successfully.
            </div>
            <div className="notification-time">2 hours ago</div>
          </div>
        </div>
        <div className="notification-item">
          <div className="notification-icon">
            <i className="fas fa-tag" />
          </div>
          <div className="notification-content">
            <div className="notification-title">Special Offer</div>
            <div className="notification-text">
              Get 20% off on your next purchase using code SAVE20.
            </div>
            <div className="notification-time">1 day ago</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
    )
}