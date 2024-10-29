import React, { useEffect } from "react";
import "./manageUsers.css";
import { dashboardLogic } from "./pages";
import { AdminSidebar } from "../components/adminSideBar";

const users = [
    { id: 1, name: "Saad El kharraz", email: "saad@gmail.com" },
    { id: 2, name: "Ettas Ayoub", email: "ayoub@gmail.com" },
];

export function ManageUsers() {
    useEffect(() => {
        dashboardLogic();
    }, []);
    
    return (
        <div className="dashboard-container">
            <AdminSidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1 className="welcome-text">Manage Users</h1>
                </div>
                <div className="users-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="modify-btn">Modify</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
