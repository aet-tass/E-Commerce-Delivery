export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="how-it-works aos-init aos-animate"
            data-aos="fade-up"
        >
        <div className="container">
            <h2
            style={{
                textAlign: "center",
                color: "var(--accent-color-2)",
                fontSize: "3.5rem",
                marginBottom: 50
            }}
            >
            How It Works
            </h2>
            {/* Added glow effects */}
            <div className="glow-container">
            <div className="glow glow-1" />
            <div className="glow glow-2" />
            <div className="glow glow-3" />
            </div>
            <div className="timeline" style={{ position: "relative", zIndex: 2 }}>
            {/* Added dynamic connection lines */}
            <svg
                className="timeline-connections"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
            >
                <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "var(--accent-color-2)" }} />
                    <stop offset="50%" style={{ stopColor: "var(--accent-color-3)" }} />
                    <stop
                    offset="100%"
                    style={{ stopColor: "var(--accent-color-2)" }}
                    />
                </linearGradient>
                </defs>
                <path
                d="M0,0 C100,100 200,-100 300,100 S400,-100 500,100"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                fill="none"
                ></path>
            </svg>
            <div className="timeline-item left animate">
                <div className="timeline-content">
                <div
                    className="timeline-icon"
                    style={{
                    background:
                        "linear-gradient(135deg, var(--accent-color-1), var(--accent-color-2))"
                    }}
                >
                    <i className="fas fa-calendar-plus" />
                </div>
                <div className="content-wrapper">
                    <h3>Book Your Delivery</h3>
                    <p>
                    Use our easy online platform or mobile app to schedule your
                    delivery in minutes.
                    </p>
                    <div className="hover-info">
                    <span className="detail-tag">Quick Booking</span>
                    <span className="detail-tag">24/7 Available</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="timeline-item right animate">
                <div className="timeline-content">
                <div
                    className="timeline-icon"
                    style={{
                    background:
                        "linear-gradient(135deg, var(--accent-color-2), var(--accent-color-3))"
                    }}
                >
                    <i className="fas fa-truck-loading" />
                </div>
                <div className="content-wrapper">
                    <h3>We Pick Up</h3>
                    <p>
                    Our professional courier picks up your package from your specified
                    location.
                    </p>
                    <div className="hover-info">
                    <span className="detail-tag">Professional Staff</span>
                    <span className="detail-tag">Secure Handling</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="timeline-item left">
                <div className="timeline-content">
                <div
                    className="timeline-icon"
                    style={{
                    background:
                        "linear-gradient(135deg, var(--accent-color-3), var(--accent-color-4))"
                    }}
                >
                    <i className="fas fa-map-marked-alt" />
                </div>
                <div className="content-wrapper">
                    <h3>Track in Real-Time</h3>
                    <p>
                    Follow your package's journey with our real-time tracking system.
                    </p>
                    <div className="hover-info">
                    <span className="detail-tag">Live Updates</span>
                    <span className="detail-tag">GPS Tracking</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="timeline-item right">
                <div className="timeline-content">
                <div
                    className="timeline-icon"
                    style={{
                    background:
                        "linear-gradient(135deg, var(--accent-color-4), var(--accent-color-1))"
                    }}
                >
                    <i className="fas fa-gift" />
                </div>
                <div className="content-wrapper">
                    <h3>Swift Delivery</h3>
                    <p>
                    Your package is delivered quickly and safely to its destination.
                    </p>
                    <div className="hover-info">
                    <span className="detail-tag">On-Time Delivery</span>
                    <span className="detail-tag">Safe Handling</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}