export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials aos-init aos-animate"
            data-aos="fade-up"
        >
        <div className="container">
            <h2
            data-aos="fade-down"
            data-aos-delay={100}
            className="section-title aos-init aos-animate"
            >
            <span className="gradient-text">Customer Stories</span>
            <span className="subtitle">
                <div
                style={{
                    marginTop: 15,
                    fontSize: "1.3rem",
                    lineHeight: "1.6",
                    color: "var(--text-color)",
                    opacity: "0.9"
                }}
                >
                Discover How Our Service is Making a Difference in People's Lives
                </div>
            </span>
            </h2>
            <div className="testimonials-wrapper">
            <div className="testimonial-carousel">
                <div className="testimonial-grid">
                <div
                    className="testimonial-card aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    style={{
                    animation: "0.5s ease 0s 1 normal forwards running fadeInUp"
                    }}
                >
                    <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p>
                        "Delivee Express has transformed how I handle my business
                        shipments. Their speed and reliability are unmatched. I've never
                        had a package arrive late or damaged."
                    </p>
                    </div>
                    <div className="testimonial-author">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="James Wilson - Business Owner"
                        width={60}
                        height={60}
                    />
                    <div className="author-info">
                        <span className="author-name">James Wilson</span>
                        <span className="author-title">Business Owner</span>
                    </div>
                    </div>
                </div>
                <div
                    className="testimonial-card aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={200}
                    style={{
                    animation: "0.5s ease 0s 1 normal forwards running fadeInUp"
                    }}
                >
                    <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p>
                        "The real-time tracking feature gives me peace of mind. I can
                        monitor my packages every step of the way. The customer service
                        team is also incredibly helpful!"
                    </p>
                    </div>
                    <div className="testimonial-author">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Sarah Chen - Online Retailer"
                        width={60}
                        height={60}
                    />
                    <div className="author-info">
                        <span className="author-name">Sarah Chen</span>
                        <span className="author-title">Online Retailer</span>
                    </div>
                    </div>
                </div>
                <div
                    className="testimonial-card aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    style={{
                    animation: "0.5s ease 0s 1 normal forwards running fadeInUp"
                    }}
                >
                    <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p>
                        "As someone who frequently ships fragile items, I appreciate
                        their careful handling and package protection services. They
                        truly go above and beyond!"
                    </p>
                    </div>
                    <div className="testimonial-author">
                    <img
                        src="https://randomuser.me/api/portraits/men/67.jpg"
                        alt="Michael Brown - Art Gallery Owner"
                        width={60}
                        height={60}
                    />
                    <div className="author-info">
                        <span className="author-name">Michael Brown</span>
                        <span className="author-title">Art Gallery Owner</span>
                    </div>
                    </div>
                </div>
                <div
                    className="testimonial-card aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={400}
                    style={{
                    animation: "0.5s ease 0s 1 normal forwards running fadeInUp"
                    }}
                >
                    <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p>
                        "Their eco-friendly initiatives really resonate with my values.
                        It's great to work with a company that cares about environmental
                        impact while maintaining excellent service."
                    </p>
                    </div>
                    <div className="testimonial-author">
                    <img
                        src="https://randomuser.me/api/portraits/women/28.jpg"
                        alt="Emma Garcia - Environmental Consultant"
                        width={60}
                        height={60}
                    />
                    <div className="author-info">
                        <span className="author-name">Emma Garcia</span>
                        <span className="author-title">Environmental Consultant</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* CTA Section */}
            <div
            className="cta-section aos-init aos-animate"
            data-aos="fade-up"
            style={{
                background:
                "linear-gradient(135deg, rgba(255, 159, 28, 0.1), rgba(138, 79, 255, 0.1))",
                padding: "60px 30px",
                borderRadius: 20,
                marginTop: 80,
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                position: "relative",
                overflow: "hidden"
            }}
            >
            <h3 className="cta-title">Ready to Experience Our Service?</h3>
            <p className="cta-text">
                Join thousands of satisfied customers and revolutionize your delivery
                experience
            </p>
            <a href="#" className="cta-button-large">
                Get Started Today
            </a>
            </div>
        </div>
        </section>

    )
}