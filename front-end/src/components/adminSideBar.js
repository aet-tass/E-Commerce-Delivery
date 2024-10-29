import React from "react";
import { Link } from "react-router-dom";

export function AdminSidebar() {
    return (
        <aside className="admin-sidebar">
            <div className="logo-container">
                <div className="logo">Admin</div>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link active">
                        <i className="fas fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/users" className="nav-link">
                        <i className="fas fa-users" />
                        <span>Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/orders" className="nav-link">
                        <i className="fas fa-box" />
                        <span>Orders</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/products" className="nav-link">
                        <i className="fas fa-box-open" />
                        <span>Products</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/notifications" className="nav-link">
                        <i className="fas fa-bell" />
                        <span>Notifications</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
