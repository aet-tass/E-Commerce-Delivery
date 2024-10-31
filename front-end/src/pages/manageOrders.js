import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./manageOrders.css";
import { dashboardLogic } from "./pages";
import { AdminSidebar } from "../components/adminSideBar";

const orders = [
    { id: 1, customer: "Saad", product: "phone", quantity: 2, status: "Pending" },
    { id: 2, customer: "Ayoub", product: "laptop", quantity: 1, status: "Pending" },
    { id: 3, customer: "Othmane", product: "TV", quantity: 5, status: "Pending" },
];

export function ManageOrders() {
    const navigate = useNavigate();

    useEffect(() => {
        dashboardLogic();
    }, []);

    const handleAccept = (id) => {
        console.log(`Order ${id} accepted.`);
    };

    const handleRefuse = (id) => {
        console.log(`Order ${id} refused.`);
    };

    return (
        <div className="dashboard-container">
            <AdminSidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1 className="welcome-text">Manage Orders</h1>
                </div>
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button className="accept-btn" onClick={() => handleAccept(order.id)}>Accept</button>
                                    <button className="refuse-btn" onClick={() => handleRefuse(order.id)}>Refuse</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
export default ManageOrders;
