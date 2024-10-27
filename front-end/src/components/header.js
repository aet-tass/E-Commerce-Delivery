

export function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                <a href="/" className="logo">Delivee Express</a>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li>
                    <a
                        href="/login"
                        className="cta-button"
                        style={{
                        background:
                            "linear-gradient(45deg, #8A4FFF, #FF4B8B, #FF9F1C, #FFD700)",
                        color: "white",
                        transition: "all 0.3s ease"
                        }}
                    >   Get Started </a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
}