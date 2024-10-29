import React, { useEffect } from "react";
import "./dashboard.css";
import { dashboardLogic } from "./pages";
import { AdminSidebar } from "../components/adminSideBar";
export function Admin(){
    useEffect(() => {
        dashboardLogic();
    }, []);
    
    return (
        <div className="dashboard-container">
        <AdminSidebar />
  <main className="dashboard-main">
    <div className="dashboard-header">
      <h1 className="welcome-text">Admin dashboard</h1>
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
  </main>
</div>
    );
}

