import React, { useState } from "react"; // Keep this as it's the actual library import
import { FunnyJokeTeller } from "./FunnyJokeTeller";

// Main App component
const App = () => {
  return (
    <div className="app-root">
      {/* Header Section */}
      <header className="app-header">
        <div className="header-container">
          <h1 className="header-title">
            My Awesome SwizzyWeb Site
          </h1>
          <nav>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-link">Home</a>
              </li>
              <li>
                <a href="#" className="nav-link">About</a>
              </li>
              <li>
                <a href="#" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <section className="welcome-section">
          <h2 className="welcome-title">
            Welcome to Our Site!
          </h2>
          <p className="welcome-text">
            This is a sample SwizzyWeb website built with the power and
            flexibility of Tailwind CSS. Enjoy the clean design and responsive
            layout that adapts beautifully to any screen size. We've focused on
            creating a modern and user-friendly experience.
          </p>
          <div className="button-row">
            <button className="btn-primary">
              Learn More
            </button>
            <button className="btn-secondary">
              Get Started
            </button>
          </div>
        </section>

        <section className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <h3 className="feature-card-title">
              Responsive Design
            </h3>
            <p className="feature-card-text">
              Our website looks great on desktops, tablets, and mobile phones,
              ensuring a seamless experience for all users.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <h3 className="feature-card-title">Modern UI</h3>
            <p className="feature-card-text">
              Leveraging Tailwind CSS, we've crafted a clean, modern, and
              intuitive user interface.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <h3 className="feature-card-title">
              Easy to Customize
            </h3>
            <p className="feature-card-text">
              The component-based structure makes it incredibly easy to extend
              and customize.
            </p>
          </div>
          {/* Feature Card 4 */}
          <div className="feature-card">
            <h3 className="feature-card-title">
              Easy to add custom api's
            </h3>
            <p className="feature-card-text">
              Adding api's is as simple as creating new controllers, checkout
              our funny joke API by clicking the button below.
            </p>

            <FunnyJokeTeller />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <div className="footer-container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} My Awesome SwizzyWeb Site. All
            rights reserved.
          </p>
          <p className="footer-text-spaced">
            Made with{" "}
            <span className="font-semibold text-white">@swizzyweb</span>
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
