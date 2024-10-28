import React from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="dashboard-sidebar">
            <div className="logo-container">
                <div className="logo">Delivee Express</div>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link active">
                    <i className="fas fa-chart-line" />
                    <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                    <i className="fas fa-store" />
                    <span>shop</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="https://delivee.express.com/orders" className="nav-link">
                        <i className="fas fa-box" />
                        <span>My Orders</span>
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                    <i className="fas fa-user" />
                    <span>Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/notifications" className="nav-link">
                        <i className="fas fa-bell" />
                        <span>Notifications</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
