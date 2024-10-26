export function Services() {
    return (
        <section
            id="services"
            className="services aos-init aos-animate"
            data-aos="fade-up"
        >
            <div className="container">
                <div className="section-header">
                <h2>Our Services</h2>
                <p className="section-intro">
                    Discover our range of tailored delivery solutions designed to meet your
                    unique needs.
                </p>
                </div>
                <div className="services-timeline">
                <svg
                    className="services-svg"
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="none"
                >
                    <path
                    className="connection-path"
                    d="M100,100 Q500,50 900,100 T900,500"
                    />
                </svg>
                <div className="service-item aos-init aos-animate" data-aos="fade-up">
                    <div className="service-number">1</div>
                    <div className="service-content">
                    <h3>
                        <i
                        className="fas fa-box"
                        style={{ color: "var(--accent-color-1)" }}
                        />{" "}
                        Standard Delivery
                    </h3>
                    <p>Reliable and cost-effective shipping for your everyday needs.</p>
                    </div>
                    <div className="service-animation">
                    <div className="package" />
                    </div>
                </div>
                <div
                    className="service-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <div className="service-number">2</div>
                    <div className="service-content">
                    <h3>
                        <i
                        className="fas fa-rocket"
                        style={{ color: "var(--accent-color-2)" }}
                        />{" "}
                        Express Delivery
                    </h3>
                    <p>Lightning-fast shipping for time-sensitive packages.</p>
                    </div>
                    <div className="service-animation">
                    <div className="rocket" />
                    </div>
                </div>
                <div
                    className="service-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={200}
                >
                    <div className="service-number">3</div>
                    <div className="service-content">
                    <h3>
                        <i
                        className="fas fa-shield-alt"
                        style={{ color: "var(--accent-color-3)" }}
                        />{" "}
                        Package Protection
                    </h3>
                    <p>Extra care and insurance for valuable or fragile items.</p>
                    </div>
                    <div className="service-animation">
                    <div className="shield" />
                    </div>
                </div>
                <div
                    className="service-item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={300}
                >
                    <div className="service-number">4</div>
                    <div className="service-content">
                    <h3>
                        <i
                        className="fas fa-warehouse"
                        style={{ color: "var(--accent-color-1)" }}
                        />{" "}
                        Warehousing
                    </h3>
                    <p>Secure storage solutions for your inventory management needs.</p>
                    </div>
                    <div className="service-animation">
                    <div className="warehouse" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}