import React from "react";

export function SidebarAdmin() {
    return (
        <aside className="dashboard-sidebar">
            <div className="logo-container">
                <div className="logo">Delivee Express</div>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="https://delivee.express.com/dashboard" className="nav-link active">
                        <i className="fas fa-chart-line" />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://delivee.express.com/shop" className="nav-link">
                        <i className="fas fa-store" />
                        <span>Products</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://delivee.express.com/orders" className="nav-link">
                        <i className="fas fa-box" />
                        <span>Orders</span>
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
        </aside>
    );
}
