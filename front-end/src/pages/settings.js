import React, { useEffect } from "react";
import { settingsLogic } from "./pages";
import { Sidebar } from "../components/sidebar";
import './settings.css';


export function Settings(){
    useEffect(() => {
        settingsLogic();
    }, []);
    return (
<div className="dashboard-container">
    <Sidebar />
  {/* Main Content */}
  <main className="settings-main">
    <div className="settings-header">
      <h1 className="settings-title">Settings</h1>
      <p className="settings-subtitle">
        Manage your account settings and preferences
      </p>
    </div>
    <div className="settings-grid">
      {/* Security Section */}
      <div className="settings-section">
        <div className="section-header">
          <div className="section-icon security-icon">
            <i className="fas fa-shield-alt" />
          </div>
          <h2 className="section-title">Security</h2>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Two-Factor Authentication</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked="" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Add an extra layer of security to your account
          </p>
        </div>
        <div className="form-group">
          <label className="form-label">Change Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Current Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="New Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            placeholder="Confirm New Password"
          />
        </div>
      </div>
      {/* Notifications Section */}
      <div className="settings-section">
        <div className="section-header">
          <div className="section-icon notifications-icon">
            <i className="fas fa-bell" />
          </div>
          <h2 className="section-title">Notifications</h2>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Push Notifications</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked="" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Get notified about order updates
          </p>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Email Notifications</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked="" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Receive order confirmations and updates via email
          </p>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Marketing Emails</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Receive promotional offers and newsletters
          </p>
        </div>
      </div>
      {/* Preferences Section */}
      <div className="settings-section">
        <div className="section-header">
          <div className="section-icon preferences-icon">
            <i className="fas fa-sliders-h" />
          </div>
          <h2 className="section-title">Preferences</h2>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Dark Mode</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Switch between light and dark themes
          </p>
        </div>
        <div className="form-group">
          <label className="form-label">Language</label>
          <select className="form-input">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Currency</label>
          <select className="form-input">
            <option>USD ($)</option>
            <option>EUR (€)</option>
            <option>GBP (£)</option>
            <option>JPY (¥)</option>
          </select>
        </div>
      </div>
      {/* Privacy Section */}
      <div className="settings-section">
        <div className="section-header">
          <div className="section-icon privacy-icon">
            <i className="fas fa-user-shield" />
          </div>
          <h2 className="section-title">Privacy</h2>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Profile Visibility</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked="" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Make your profile visible to other users
          </p>
        </div>
        <div className="setting-item">
          <div className="setting-label">
            <span className="setting-name">Activity Status</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked="" />
              <span className="toggle-slider" />
            </label>
          </div>
          <p className="setting-description">
            Show when you're active on the platform
          </p>
        </div>
        <div className="danger-zone">
          <h3 className="danger-title">Danger Zone</h3>
          <p className="setting-description">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button className="danger-button">Delete Account</button>
        </div>
      </div>
    </div>
  </main>
</div> )
}