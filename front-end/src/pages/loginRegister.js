import { useEffect } from 'react';
import { Logic } from './pages';
import './loginRegister.css';
import { Header } from '../components/header';
import UsersService from '../service/UsersService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await UsersService.login(email, password);
            if (userData.token) {
                localStorage.setItem("token", userData.token);
                localStorage.setItem("role", userData.role);
                navigate("/dashboard");
            }else{
                setError(userData.error);
            }
        } catch (error) {
            console.error(error);
            setError(error.message);  
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    //////////////

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        workAddress: '',
        address: ''
        
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitR = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService

            const token = localStorage.getItem('token');
            await UsersService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                workAddress: '',
                address: ''
            });
            alert('User registered successfully');
            navigate('/admin/user-management');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };


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
                        <form id="loginForm" className="auth-form active" onSubmit={handleSubmit}>
                            <h2>Welcome Back</h2>
                            <p className="auth-subtitle">Login to access your account</p>
                            <div className="form-group">
                                <label htmlFor="loginEmail">Email Address</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-envelope" />
                                    <input type="email" id="loginEmail" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Password</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-lock" />
                                    <input type="password" id="loginPassword" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                        <form id="registerForm" className="auth-form" onSubmit={handleSubmitR} >
                            <h2>Create Account</h2>
                            <p className="auth-subtitle">Join our delivery network</p>
                            <div className="form-group">
                                <label htmlFor="registerName">Full Name</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-user" />
                                    <input type="text" id="registerName" required="" name="name" value={FormData.name} onChange={handleInputChange} />
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
                                        name="phone"
                                        value={FormData.phone}
                                        onChange={handleInputChange}

                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerAddress">Home Address</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-home" />
                                    <input type="text" id="registerAddress" required="" name="address" value={FormData.address} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="workAddress">Work Address (Optional)</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-briefcase" />
                                    <input type="text" id="workAddress" name='workAddress' value={FormData.workAddress} onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerEmail">Email Address</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-envelope" />
                                    <input type="email" id="registerEmail" required="" name="email" value={FormData.email} onChange={handleInputChange}
                                     />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userRole">Role</label>
                                <div className="input-wrapper"
                                            required 
                                            name="role" 
                                            value={FormData.role} 
                                            onChange={handleInputChange}>
                                    <select id="userRole" required>
                                        <option value="" disabled selected>Select your role</option>
                                        <option value="USER">USER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>
                                </div>
                            </div>

                            {/* New Image Upload Field */}
                            {/* <div className="form-group">
                                <label htmlFor="profileImage">Profile Image</label>
                                <div className="input-wrapper">
                                    <input type="file" id="profileImage" accept="image/*" />
                                </div>
                            </div> */}

                            <div className="form-group">
                                <label htmlFor="registerPassword">Password</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-lock" />
                                    <input type="password" id="registerPassword" required="" name="password" value={FormData.password} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-wrapper">
                                    <i className="fas fa-lock" />
                                    <input type="password" id="confirmPassword" required=""  />
                                </div>
                            </div> */}
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
