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
                <div className="footer-section social-section" style={{ flex: 1 }}>
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 24 24"
                            >
                            <path
                                fill="currentColor"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                            </svg>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 24 24"
                            >
                            <path
                                fill="currentColor"
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                            />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 24 24"
                            >
                            <path
                                fill="currentColor"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                            />
                            </svg>
                        </a>
                    </div>
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
            </div>
        </footer>
    )
}