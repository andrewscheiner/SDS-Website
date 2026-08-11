import { useState } from 'react'

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-area">
          <img
            src="/logo.png"   // replace with your actual logo file path
            alt="SDS Logo"
            className="logo"
          />
          <h1 className="brand">Scheiner Digital Solutions</h1>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Digital Solutions Built for Real Impact</h2>
        <p>
          Professional products and services developed for a wide range of audiences.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h3>What We Offer</h3>

        <div className="service-grid">
          <div className="service-card">
            <h4>Rapid Response Assessment TM</h4>
            <p>
              A digital assessment platform for K-12 and college educators to
              quickly evaluate their students' knowledge.
            </p>
          </div>

          <div className="service-card">
            <h4>
              <a href="https://apps.microsoft.com/detail/9n533p4jf5f9?hl=en-US&gl=US" target="_blank" rel="noopener noreferrer">
                Baseball Game Creator
              </a>
            </h4>
            <p>
              A Microsoft-store certified app that allows users to create a baseball game based on their own lineups and where they throw the ball.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Scheiner Digital Solutions</p>
      </footer>
    </div>
  );
}
