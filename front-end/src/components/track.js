export function Track() {
    return (
        <section id="track" className="track aos-init aos-animate" data-aos="fade-up">
        <div className="container">
            <h2 className="track-title">
            <span className="gradient-text">Track Your Package</span>
            <span className="subtitle">Real-Time Updates &amp; Live Tracking</span>
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "\n    .track-title {\n      text-align: center;\n      margin-bottom: 50px;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      animation: fadeInDown 1s ease-out;\n    }\n\n    .gradient-text {\n      font-size: 3.5rem;\n      font-weight: bold;\n      background: linear-gradient(135deg, var(--accent-color-2), var(--accent-color-3), var(--accent-color-1), var(--accent-color-4));\n      -webkit-background-clip: text;\n      background-clip: text;\n      -webkit-text-fill-color: transparent;\n      animation: gradientFlow 8s linear infinite;\n      position: relative;\n    }\n\n    .subtitle {\n      font-size: 1.5rem;\n      color: var(--text-color);\n      opacity: 0.8;\n      font-weight: normal;\n      letter-spacing: 1px;\n      animation: slideInUp 0.8s ease-out 0.3s both;\n    }\n\n    .gradient-text::after {\n      content: '';\n      position: absolute;\n      bottom: -10px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 80px;\n      height: 4px;\n      background: linear-gradient(90deg, var(--accent-color-1), var(--accent-color-3));\n      border-radius: 2px;\n      animation: expandWidth 1s ease-out forwards;\n    }\n\n    @keyframes gradientFlow {\n      0% { background-position: 0% 50%; }\n      50% { background-position: 100% 50%; }\n      100% { background-position: 0% 50%; }\n    }\n\n    @keyframes fadeInDown {\n      from {\n        opacity: 0;\n        transform: translateY(-30px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes slideInUp {\n      from {\n        opacity: 0;\n        transform: translateY(20px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes expandWidth {\n      from { width: 0; }\n      to { width: 80px; }\n    }\n\n    .track-title:hover .gradient-text {\n      transform: scale(1.05);\n      transition: transform 0.3s ease;\n    }\n\n    @media (max-width: 768px) {\n      .gradient-text {\n        font-size: 2.5rem;\n      }\n      .subtitle {\n        font-size: 1.2rem;\n      }\n    }\n  "
                }}
            />
            </h2>
            <div className="track-content">
            <div className="track-form-container">
                <div className="animated-bg" />
                <div className="track-form">
                <div className="search-wrapper">
                    <input
                    type="text"
                    id="tracking-number"
                    placeholder="Enter your tracking number"
                    className="tracking-input"
                    />
                    <div className="input-focus-effect" />
                    <div className="scanning-line" />
                </div>
                <button id="track-button" className="modern-button">
                    <span>Track Package</span>
                    <div className="button-effect" />
                </button>
                </div>
                <div id="tracking-result" className="tracking-result">
                <div className="delivery-path">
                    <svg className="path-svg" viewBox="0 0 1000 200">
                    <path
                        className="tracking-path"
                        d="M0,100 Q250,0 500,100 T1000,100"
                    />
                    <circle className="tracking-dot" r={10} />
                    </svg>
                </div>
                <div className="tracking-stages">
                    <div className="stage">
                    <div className="stage-icon">
                        <div className="pulse-ring" />
                        <i className="fas fa-box" />
                    </div>
                    <span>Received</span>
                    </div>
                    <div className="stage">
                    <div className="stage-icon">
                        <div className="pulse-ring" />
                        <i className="fas fa-warehouse" />
                    </div>
                    <span>Processing</span>
                    </div>
                    <div className="stage">
                    <div className="stage-icon">
                        <div className="pulse-ring" />
                        <i className="fas fa-truck" />
                    </div>
                    <span>In Transit</span>
                    </div>
                    <div className="stage">
                    <div className="stage-icon">
                        <div className="pulse-ring" />
                        <i className="fas fa-home" />
                    </div>
                    <span>Delivered</span>
                    </div>
                </div>
                <div className="package-details">
                    <div className="detail-card">
                    <h3>Current Status</h3>
                    <p id="tracking-status" />
                    <div className="status-bar">
                        <div className="status-progress" />
                    </div>
                    </div>
                    <div className="detail-card">
                    <h3>Estimated Delivery</h3>
                    <p id="estimated-delivery" />
                    <div className="countdown-timer">
                        <div className="time-segment">
                        <span className="hours">00</span>
                        <label>Hours</label>
                        </div>
                        <div className="time-segment">
                        <span className="minutes">00</span>
                        <label>Minutes</label>
                        </div>
                        <div className="time-segment">
                        <span className="seconds">00</span>
                        <label>Seconds</label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}