import { useEffect } from 'react';
import { Logic } from './pages';
import './loginRegister.css';
import { Header } from '../components/header';

export function LoginRegister() {
    useEffect(() => {
        Logic();
    }, []);
    return (
        <div>
            <Header />
        <main className="auth-container">
        <div className="auth-wrapper">
            <div className="auth-box">
            <div className="auth-tabs">
                <button className="auth-tab active" data-tab="login">
                Login
                </button>
                <button className="auth-tab" data-tab="register">
                Register
                </button>
            </div>
            {/* Login Form */}
            <form id="loginForm" className="auth-form active">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to access your account</p>
                <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <div className="input-wrapper">
                    <i className="fas fa-envelope" />
                    <input type="email" id="loginEmail" required="" />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <div className="input-wrapper">
                    <i className="fas fa-lock" />
                    <input type="password" id="loginPassword" required="" />
                </div>
                </div>
                <button type="submit" className="auth-button">
                <span>Login</span>
                <i className="fas fa-arrow-right" />
                </button>
            </form>
            {/* Register Form */}
            <form id="registerForm" className="auth-form">
                <h2>Create Account</h2>
                <div className="form-group">
                <label htmlFor="registerName">Full Name</label>
                <div className="input-wrapper">
                    <i className="fas fa-user" />
                    <input type="text" id="registerName" required="" />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="registerPhone">Phone Number</label>
                <div className="input-wrapper">
                    <i className="fas fa-phone" />
                    <input
                    type="tel"
                    id="registerPhone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required=""
                    />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="registerAddress">Address</label>
                <div className="input-wrapper">
                    <i className="fas fa-home" />
                    <input type="text" id="registerAddress" required="" />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="registerEmail">Email Address</label>
                <div className="input-wrapper">
                    <i className="fas fa-envelope" />
                    <input type="email" id="registerEmail" required="" />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <div className="input-wrapper">
                    <i className="fas fa-lock" />
                    <input type="password" id="registerPassword" required="" />
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                    <i className="fas fa-lock" />
                    <input type="password" id="confirmPassword" required="" />
                </div>
                </div>
                <button type="submit" className="auth-button">
                <span>Create Account</span>
                <i className="fas fa-arrow-right" />
                </button>
            </form>
            </div>
        </div>
        </main>
        </div>
    )
}