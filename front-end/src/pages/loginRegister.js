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
                            <button className="auth-tab active" data-tab="login">Login</button>
                            <button className="auth-tab" data-tab="register">Register</button>
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
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </div>
                            <button type="submit" className="auth-button">
                                <span>Login</span>
                                <i className="fas fa-arrow-right" />
                            </button>
                            <div className="social-auth">
                                <p>Or continue with</p>
                                <div className="social-buttons">
                                    <button type="button" className="social-button google">
                                        <i className="fab fa-google" />
                                    </button>
                                    <button type="button" className="social-button facebook">
                                        <i className="fab fa-facebook-f" />
                                    </button>
                                    <button type="button" className="social-button apple">
                                        <i className="fab fa-apple" />
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Register Form */}
                        <form id="registerForm" className="auth-form">
                            <h2>Create Account</h2>
                            <p className="auth-subtitle">Join our delivery network</p>
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
                                        pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerAddress">Home Address</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-home" />
                                    <input type="text" id="registerAddress" required="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="workAddress">Work Address (Optional)</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-briefcase" />
                                    <input type="text" id="workAddress" />
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
                                <label htmlFor="userRole">Role</label>
                                <div className="input-wrapper">
                                    <select id="userRole" required>
                                        <option value="" disabled selected>Select your role</option>
                                        <option value="client">Client</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>

                            {/* New Image Upload Field */}
                            <div className="form-group">
                                <label htmlFor="profileImage">Profile Image</label>
                                <div className="input-wrapper">
                                    <input type="file" id="profileImage" accept="image/*" />
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
                            <div className="terms">
                                By registering, you agree to our
                                <a href="#">Terms of Service</a> and
                                <a href="#">Privacy Policy</a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
