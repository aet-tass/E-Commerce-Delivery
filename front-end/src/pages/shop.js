import React from "react";
import { Sidebar } from "../components/sidebar";
import "./shop.css";

export function Shop() {
    const projects = [
        { id: 1, name: "iphone X", description: "prix : .. dhs" },
        { id: 2, name: "PS5", description: "prix : B.. dhs" },
        { id: 3, name: "Smart TV", description: "prix : .. dhs" },
        { id: 4, name: "Charger", description: "prix : .. dhs" },
        { id: 5, name: "laptop", description: "prix : .. dhs" },
        { id: 3, name: "Smart TV", description: "prix : . dhs" },
    ];

    return (
        <div className="shop-container">
            <Sidebar />
            <main className="shop-main">
                <h1 className="shop-title">Shop</h1>
                <div className="project-cards">
                    {projects.map(project => (
                        <div className="project-card" key={project.id}>
                            <h2 className="project-name">{project.name}</h2>
                            <p className="project-description">{project.description}</p>
                            <button className="view-project-button">Add</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Shop;
