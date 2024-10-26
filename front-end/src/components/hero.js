export function Hero() {
    return (
        <section className="hero">
        <div id="hero-background" />
        <div className="container">
            <div className="hero-content">
            <h1>Swift Delivery at Your Fingertips</h1>
            <p className="hero-slogan">Bringing Joy to Every Doorstep</p>
            <p>
                Experience the delight of seamless, colorful, and reliable delivery
                services with Delivee Express.
            </p>
            <div className="cta-buttons">
                <a href="#" className="cta-button">
                Start Shipping
                </a>
                <a href="#" className="cta-button secondary">
                Learn More
                </a>
            </div>
            </div>
            <div className="hero-image">
            <img alt="Delivery Service Illustration" width={300} height={300} />
            </div>
        </div>
        </section>

    )
}