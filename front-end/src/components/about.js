export function About() {
    return (
        <section
            id="about"
            className="about parallax-section aos-init aos-animate"
            data-aos="fade-up"
        >
        <div id="about-background">
            <canvas
            width={2294}
            height={779}
            style={{ display: "block", width: 2294, height: 779 }}
            />
        </div>
        <div className="container">
            <div className="about-content">
            <h2>About Delivee Express</h2>
            <p>
                At Delivee Express, we're revolutionizing package delivery with
                cutting-edge technology and unwavering commitment to customer
                satisfaction. Founded in 2024, we've quickly become an industry leader,
                connecting people, businesses, and communities through our reliable and
                innovative shipping solutions.
            </p>
            <div className="stats">
                <div
                className="stat-item aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={100}
                >
                <div
                    className="stat-number"
                    data-target={1500}
                    style={{
                    color: "var(--accent-color-1)",
                    transform: "scale(1.03795)"
                    }}
                >
                    1,500
                </div>
                <p>Packages Delivered</p>
                </div>
                <div
                className="stat-item aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={200}
                >
                <div
                    className="stat-number"
                    data-target={350}
                    style={{
                    color: "var(--accent-color-4)",
                    transform: "scale(1.03795)"
                    }}
                >
                    350
                </div>
                <p>Happy Customers</p>
                </div>
                <div
                className="stat-item aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={300}
                >
                <div
                    className="stat-number"
                    data-target={12}
                    style={{
                    color: "var(--accent-color-3)",
                    transform: "scale(1.03795)"
                    }}
                >
                    12
                </div>
                <p>Cities Covered</p>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}