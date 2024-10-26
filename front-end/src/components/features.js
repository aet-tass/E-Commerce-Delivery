export function Features() {
    return (
        <section
        id="features"
        className="features aos-init aos-animate"
        data-aos="fade-up"
        >
        <div className="container">
            <div className="section-header">
            <h2>Why Choose Delivee Express</h2>
            <p className="section-intro">
                Experience the future of delivery with Delivee Express. Our commitment
                to innovation and excellence transforms every delivery into a seamless
                journey, combining cutting-edge technology with unparalleled customer
                service.
            </p>
            </div>
            <div
            className="features-grid aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay={200}
            >
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0s" }}
            >
                <div className="feature-number">1</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-1)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                </div>
                <h3>Lightning Speed</h3>
                <p>
                Our cutting-edge logistics network ensures your packages arrive faster
                than ever before.
                </p>
            </div>
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.1s" }}
            >
                <div className="feature-number">2</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-2)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                </div>
                <h3>Secure Handling</h3>
                <p>
                State-of-the-art tracking and handling procedures keep your items safe
                throughout their journey.
                </p>
            </div>
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.2s" }}
            >
                <div className="feature-number">3</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-3)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                </div>
                <h3>Nationwide Coverage</h3>
                <p>
                From bustling cities to remote areas, we deliver to every corner of
                the country.
                </p>
            </div>
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.3s" }}
            >
                <div className="feature-number">4</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-4)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" />
                </svg>
                </div>
                <h3>Eco-Friendly</h3>
                <p>
                We're committed to reducing our carbon footprint with sustainable
                practices and green initiatives.
                </p>
            </div>
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.4s" }}
            >
                <div className="feature-number">5</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-1)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                </div>
                <h3>24/7 Support</h3>
                <p>
                Our dedicated customer service team is always ready to assist you, any
                time of day or night.
                </p>
            </div>
            <div
                className="feature-card animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.5s" }}
            >
                <div className="feature-number">6</div>
                <div className="feature-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-color-2)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
                    <line x1={12} y1={18} x2={12} y2={18} />
                </svg>
                </div>
                <h3>Mobile App</h3>
                <p>
                Track your packages, schedule pickups, and manage your deliveries
                on-the-go with our user-friendly app.
                </p>
            </div>
            <svg
                className="connecting-lines"
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
            >
                <path d="M100,100 L700,100" />
                <path d="M100,300 L700,300" />
                <path d="M100,500 L700,500" />
                <path d="M100,100 L100,500" />
                <path d="M400,100 L400,500" />
                <path d="M700,100 L700,500" />
                <path d="M100,100 L400,300" />
                <path d="M400,300 L700,500" />
                <path d="M700,100 L400,300" />
                <path d="M400,300 L100,500" />
            </svg>
            </div>
            <div className="features-background">
            <div className="animated-particles">
                <div
                className="particle"
                style={{
                    left: "7.52103%",
                    top: "87.2283%",
                    animationDelay: "1.01751s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "54.1973%",
                    top: "3.83351%",
                    animationDelay: "0.376074s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "50.1334%",
                    top: "46.2813%",
                    animationDelay: "0.516972s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "49.2185%",
                    top: "38.9401%",
                    animationDelay: "0.603387s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "30.5268%",
                    top: "82.8872%",
                    animationDelay: "0.348918s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "14.3105%",
                    top: "2.63451%",
                    animationDelay: "0.479031s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "68.1537%",
                    top: "85.2775%",
                    animationDelay: "1.46365s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "46.0663%",
                    top: "55.9899%",
                    animationDelay: "0.48275s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "76.6943%",
                    top: "13.0378%",
                    animationDelay: "1.97352s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "75.0461%",
                    top: "21.3149%",
                    animationDelay: "0.098604s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "44.9801%",
                    top: "81.2962%",
                    animationDelay: "1.03603s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "53.382%",
                    top: "29.9591%",
                    animationDelay: "1.80279s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "65.5553%",
                    top: "9.76264%",
                    animationDelay: "0.670874s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "78.7007%",
                    top: "82.4323%",
                    animationDelay: "1.05146s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "43.0906%",
                    top: "49.0608%",
                    animationDelay: "1.38878s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "61.6085%",
                    top: "7.07263%",
                    animationDelay: "1.89332s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "99.2903%",
                    top: "59.9434%",
                    animationDelay: "1.54779s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "13.858%",
                    top: "84.4935%",
                    animationDelay: "1.39276s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "0.331514%",
                    top: "42.7526%",
                    animationDelay: "0.525058s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "32.8982%",
                    top: "50.4184%",
                    animationDelay: "0.99628s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "37.4156%",
                    top: "64.5484%",
                    animationDelay: "0.362575s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "84.4933%",
                    top: "20.1048%",
                    animationDelay: "1.28302s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "12.9731%",
                    top: "41.7493%",
                    animationDelay: "0.514883s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "19.5655%",
                    top: "38.0738%",
                    animationDelay: "1.33598s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "83.0938%",
                    top: "77.0631%",
                    animationDelay: "1.64753s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "76.8875%",
                    top: "89.1371%",
                    animationDelay: "1.31277s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "85.5165%",
                    top: "21.6546%",
                    animationDelay: "0.358595s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "14.9337%",
                    top: "14.2487%",
                    animationDelay: "1.43628s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "89.402%",
                    top: "82.8383%",
                    animationDelay: "0.618592s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "10.2854%",
                    top: "40.4754%",
                    animationDelay: "0.134179s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "50.978%",
                    top: "67.8135%",
                    animationDelay: "0.868925s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "2.03405%",
                    top: "66.6931%",
                    animationDelay: "0.327005s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "36.1388%",
                    top: "29.4955%",
                    animationDelay: "0.956052s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "70.3624%",
                    top: "89.6654%",
                    animationDelay: "0.371759s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "85.9272%",
                    top: "24.6927%",
                    animationDelay: "1.47686s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "92.0512%",
                    top: "94.7293%",
                    animationDelay: "0.691227s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "5.75726%",
                    top: "35.2714%",
                    animationDelay: "0.270408s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "24.4218%",
                    top: "62.7331%",
                    animationDelay: "0.825073s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "72.972%",
                    top: "38.7269%",
                    animationDelay: "1.30308s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "14.8654%",
                    top: "93.0632%",
                    animationDelay: "1.88398s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "48.5871%",
                    top: "83.083%",
                    animationDelay: "1.37645s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "54.005%",
                    top: "63.0971%",
                    animationDelay: "0.11041s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "32.132%",
                    top: "72.4016%",
                    animationDelay: "0.638529s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "28.0579%",
                    top: "35.6351%",
                    animationDelay: "1.15499s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "18.8603%",
                    top: "79.5277%",
                    animationDelay: "1.54114s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "96.3377%",
                    top: "99.8464%",
                    animationDelay: "1.11302s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "31.5534%",
                    top: "10.1621%",
                    animationDelay: "1.5328s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "17.538%",
                    top: "21.3182%",
                    animationDelay: "1.39444s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "76.4386%",
                    top: "53.1323%",
                    animationDelay: "1.63017s"
                }}
                />
                <div
                className="particle"
                style={{
                    left: "83.4407%",
                    top: "72.2243%",
                    animationDelay: "1.57701s"
                }}
                />
            </div>
            <div className="connection-lines" />
            </div>
        </div>
        </section>
    )
}