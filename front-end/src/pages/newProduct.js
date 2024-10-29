import React from "react";
import "./newProduct.css";
import { AdminSidebar } from "../components/adminSideBar";

export function NewProduct() {
    return (
        <div className="dashboard-container">
            <AdminSidebar />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <h1 className="welcome-text">Add a new Product</h1>
                </div>
                <form className="new-product-form">
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" id="productName" placeholder="Enter product name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" placeholder="Enter price in Dhs" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availability">Availability</label>
                        <select id="availability">
                            <option value="In Stock">In Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Enter product description"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Save Product</button>
                </form>
            </main>
        </div>
    );
}
