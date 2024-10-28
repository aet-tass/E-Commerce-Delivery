export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                {/* Left Section - Quick Links */}
                <div className="footer-section links-section" style={{ flex: 2 }}>
                    <h3>Quick Links</h3>
                    <div style={{ display: "flex", gap: 80 }}>
                    <div>
                        <h4
                        style={{
                            color: "var(--accent-color-2)",
                            fontSize: "1.2rem",
                            marginBottom: 20
                        }}
                        >
                        Navigation
                        </h4>
                        <ul style={{ listStyle: "none" }}>
                        <li>
                            <a
                            href="#"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Home
                            </a>
                        </li>
                        <li>
                            <a
                            href="#features"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Features
                            </a>
                        </li>
                        <li>
                            <a
                            href="#about"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            About Us
                            </a>
                        </li>
                        <li>
                            <a
                            href="#testimonials"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Testimonials
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <h4
                        style={{
                            color: "var(--accent-color-2)",
                            fontSize: "1.2rem",
                            marginBottom: 20
                        }}
                        >
                        Services
                        </h4>
                        <ul style={{ listStyle: "none" }}>
                        <li>
                            <a
                            href="#services"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Our Services
                            </a>
                        </li>
                        <li>
                            <a
                            href="#how-it-works"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            How It Works
                            </a>
                        </li>
                        <li>
                            <a
                            href="#track"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Track Package
                            </a>
                        </li>
                        <li>
                            <a
                            href="#contact-form"
                            style={{
                                fontSize: "1.1rem",
                                marginBottom: 15,
                                display: "block"
                            }}
                            >
                            Contact Support
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* Center Section - Contact Form */}
                <div
                    className="footer-section contact-section"
                    style={{ flex: "1.5", padding: "0 40px" }}
                >
                    <h3>Contact Us</h3>
                    <form id="contact-form" className="contact-form">
                    <div className="form-group">
                        <label
                        htmlFor="name"
                        style={{
                            display: "block",
                            marginBottom: 8,
                            fontSize: "1.1rem",
                            color: "var(--accent-color-2)"
                        }}
                        >
                        Name
                        </label>
                        <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required=""
                        style={{
                            fontSize: "1.1rem",
                            padding: 15,
                            border: "2px solid var(--accent-color-1)",
                            borderRadius: 8,
                            width: "100%"
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label
                        htmlFor="email"
                        style={{
                            display: "block",
                            marginBottom: 8,
                            fontSize: "1.1rem",
                            color: "var(--accent-color-2)"
                        }}
                        >
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required=""
                        style={{
                            fontSize: "1.1rem",
                            padding: 15,
                            border: "2px solid var(--accent-color-1)",
                            borderRadius: 8,
                            width: "100%"
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label
                        htmlFor="message"
                        style={{
                            display: "block",
                            marginBottom: 8,
                            fontSize: "1.1rem",
                            color: "var(--accent-color-2)"
                        }}
                        >
                        Message
                        </label>
                        <textarea
                        id="message"
                        placeholder="Type your message"
                        required=""
                        style={{
                            fontSize: "1.1rem",
                            padding: 15,
                            border: "2px solid var(--accent-color-1)",
                            borderRadius: 8,
                            width: "100%",
                            minHeight: 150
                        }}
                        defaultValue={""}
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-btn"
                        style={{ width: "100%", padding: 15, fontSize: "1.2rem" }}
                    >
                        Send Message
                    </button>
                    </form>
                </div>
                {/* Right Section - Social Links */}
                    <div className="newsletter" style={{ marginTop: 40 }}>
                        <h4
                            style={{
                            fontSize: "1.4rem",
                            marginBottom: 20,
                            color: "var(--accent-color-2)"
                            }}
                        >
                            Stay Updated
                        </h4>
                        <form id="newsletter-form">
                            <input
                            type="email"
                            placeholder="Enter your email"
                            required=""
                            style={{
                                fontSize: "1.1rem",
                                padding: 15,
                                marginBottom: 15,
                                border: "2px solid var(--accent-color-1)",
                                borderRadius: 8,
                                width: "100%"
                            }}
                            />
                            <button
                            type="submit"
                            className="submit-btn"
                            style={{ width: "100%", padding: 15 }}
                            >
                            Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                </div>
                {/* New Copyright Section */}
                <div
                className="copyright-section"
                style={{
                    textAlign: "center",
                    marginTop: 50,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,0.1)"
                }}
                >
                    <p style={{ fontSize: "1.1rem", color: "var(--text-color)" }}>
                        © 2024 Delivee Express. All Rights Reserved.
                        <span
                        style={{
                            display: "block",
                            marginTop: 10,
                            color: "var(--accent-color-2)"
                        }}
                        >
                        Developed with ❤️ by{" "}
                        <a
                            href="https://github.com/ettass"
                            target="_blank"
                            style={{ color: "var(--accent-color-1)", textDecoration: "none" }}
                        >
                            Et-tass &amp; El kharraz
                        </a>
                        </span>
                    </p>
                </div>
                        
        </footer>
    )
}