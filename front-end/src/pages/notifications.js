import React from "react";
import { Sidebar } from "../components/sidebar"; 
import "./notifications.css"; 

export function Notifications() {
    const notifications = [
        { id: 1, title: "commande ajouté au panier", date: "2024-10-28" },
        { id: 2, title: "commande en train de livraison", date: "2024-10-24" },
        { id: 3, title: "commande annulé", date: "2024-10-23" },
    ];

    return (
        <div className="notifications-container">
            <Sidebar />
            <main className="notifications-main">
                <table className="notifications-table">
                    <thead>
                        <tr>
                            <th>Notification</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notifications.map(notification => (
                            <tr key={notification.id}>
                                <td>{notification.title}</td>
                                <td>{notification.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Notifications;
