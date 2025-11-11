import React from 'react';
import Image from 'next/image';

export default function DownloadAppPage() {
  return (
    <main className="download-app-page">
      {/* Hero Section with Gradient Background */}
      <section className="download-hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-pattern"></div>
        
        <div className="download-hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="content-wrapper">
              <span className="hero-badge">NEW APP</span>
              
              <h1 className="hero-heading">
                <span className="heading-primary">Your Skin Health</span>
                <span className="heading-accent">In Your Pocket</span>
              </h1>
              
              <p className="hero-description">
                Book appointments, access medical records, get reminders, and consult with 
                Dr. Jabu Nkehli - all from the convenience of your smartphone.
              </p>

              {/* Feature Pills */}
              <div className="feature-pills">
                <div className="pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                  <span>Easy Booking</span>
                </div>
                <div className="pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span>Secure & Private</span>
                </div>
                <div className="pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>POPIA Compliant</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="download-buttons">
                <h3 className="download-label">Download now</h3>
                <div className="store-buttons">
                  

                  <a 
                    href="https://drive.google.com/file/d/1JV-p3plAcxiVqLKzWKQNzNtlb58QBndg/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="store-btn store-btn-google"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="store-btn-text">
                      <span className="store-btn-label">Get it on</span>
                      <span className="store-btn-name">Google Play</span>
                    </div>
                  </a>

                  <a 
                    href="https://drive.google.com/file/d/1JV-p3plAcxiVqLKzWKQNzNtlb58QBndg/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="store-btn store-btn-apple"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM12 22C11.45 22 11 21.55 11 21C11 20.45 11.45 20 12 20C12.55 20 13 20.45 13 21C13 21.55 12.55 22 12 22ZM17 18H7V4H17V18Z" />
                    </svg>

                    <div className="store-btn-text">
                      <span className="store-btn-label">Download  the</span>
                      <span className="store-btn-name">APK</span>
                    </div>
                  </a>

                </div>
                

              </div>
            </div>
          </div>

          {/* Right Side - 3D Phone Mockup */}
          <div className="hero-phone">
            <div className="phone-3d-wrapper">
              {/* Floating Elements */}
              <div className="floating-element float-1">
                <div className="float-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>Appointment Confirmed</span>
              </div>

              <div className="floating-element float-2">
                <div className="float-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <span>Message from Dr. Nkehli</span>
              </div>

              <div className="floating-element float-3">
                <div className="float-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <span>Reminder: 2 days</span>
              </div>

              {/* 3D Phone */}
              <div className="phone-3d">
                <div className="phone-3d-shadow"></div>
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="phone-status-bar">
                      <span className="status-time">9:41</span>
                      <div className="status-icons">
                        <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 9l2 2 4-4"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phone-content">
                      {/* App Screenshot Placeholder */}
                      <div className="app-preview">
                        <div className="preview-header">
                          <div className="avatar"></div>
                          <div className="header-text">
                            <h4>Dr. Jabu Nkehli</h4>
                            <p>Dermatologist</p>
                          </div>
                        </div>
                        <div className="preview-card">
                          <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                              <line x1="16" y1="2" x2="16" y2="6"/>
                              <line x1="8" y1="2" x2="8" y2="6"/>
                              <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                          </div>
                          <h3>Next Appointment</h3>
                          <p>Thursday, Nov 7 at 2:30 PM</p>
                        </div>
                        <div className="preview-buttons">
                          <button className="preview-btn">View Details</button>
                          <button className="preview-btn secondary">Reschedule</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phone-home-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-showcase">
        <div className="features-container">
          <div className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">Everything you need for better skin health</h2>
            <p className="section-subtitle">
              Manage your dermatology care with powerful features designed for convenience
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Quick Appointments</h3>
              <p>Book, reschedule, or cancel appointments in seconds</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <h3>Digital Records</h3>
              <p>Access your treatment history and prescriptions anytime</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <h3>Direct Messaging</h3>
              <p>Chat directly with our team for quick questions</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
              </div>
              <h3>Smart Reminders</h3>
              <p>Never miss an appointment with timely notifications</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
              </div>
              <h3>Payment Options</h3>
              <p>Secure payment processing for consultations and services</p>
            </div>

          </div>
        </div>
      </section>

      <p className="help-title">
        <strong>Need help downloading our app?</strong>
      </p>

      <p className="help-text">
        <a 
        href="https://drive.google.com/file/d/1Pq87nLJqTgMR02rzNaOzMXQ6iZQhE2as/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="help-link"
        >
        Click here
        </a> to view or download instructions on how to download the Dermaglare Skin App from Google Playstore.
      </p>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-description">
            Join thousands of patients already using Dermaglare Skin App
          </p>
          <div className="cta-buttons">
            <a href="https://drive.google.com/file/d/1JV-p3plAcxiVqLKzWKQNzNtlb58QBndg/view?usp=sharing" className="cta-btn cta-btn-primary">
              Download App
            </a>
           
          </div>
        </div>
      </section>
    </main>
  );
}