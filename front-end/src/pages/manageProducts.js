import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./manageProducts.css";
import { dashboardLogic } from "./pages";
import { AdminSidebar } from "../components/adminSideBar";

const products = [
    { id: 1, name: "Product 1", price: "100 dhs"},
    { id: 2, name: "Product 2", price: "200 dhs"},
    { id: 3, name: "Product 3", price: "300 dhs"},
];

export function ManageProducts() {
    const navigate = useNavigate();

    useEffect(() => {
        dashboardLogic();
    }, []);
    const handleAddProduct = () => {
        navigate("/newProduct");  // Navigate to the NewProduct page
    };
    return (
        <div className="dashboard-container">
            <AdminSidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1 className="welcome-text">Manage Products</h1>
                    <button className="add-product-btn" onClick={handleAddProduct}>
                        Add New Product
                    </button>
                </div>
                <div className="products-grid">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                                <div className="product-actions">
                                    <button className="modify-btn">Modify</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
