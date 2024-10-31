import React from "react";
import { Sidebar } from "../components/sidebar";
import "./myorders.css";

export function MyOrders() {
    const orders = [
        { id: 1, title: "Order1", date: "2024-10-28", status: "Pending" },
        { id: 2, title: "Order2", date: "2024-10-25", status: "Shipped" },
        { id: 3, title: "Order3", date: "2024-10-20", status: "Cancelled" },
    ];

    return (
        <div className="orders-container">
            <Sidebar />
            <main className="orders-main">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.title}</td>
                                <td>{order.date}</td>
                                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default MyOrders;
