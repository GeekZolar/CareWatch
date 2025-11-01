import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to LTC Education Hub</h1>
        <p>
          Supporting families and guardians with comprehensive, easy-to-understand 
          information about Long-Term Care facilities and healthcare for your loved ones.
        </p>
        <Link to="/information-hub" className="cta-button">
          Explore Resources
        </Link>
      </section>

      <div className="container content-section">
        <h2>Your Trusted Source for LTC Information</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Navigating the world of Long-Term Care can be overwhelming. Our mission is to 
          simplify complex healthcare topics and empower you with knowledge to make informed 
          decisions for your family.
        </p>

        <div className="card-grid">
          <div className="topic-card">
            <Link to="/medical-tests">
              <h3>Medical Tests</h3>
              <p>
                Learn about various medical tests your loved one may undergo, including 
                imaging, diagnostic, blood, and urine tests.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/equipment">
              <h3>Equipment</h3>
              <p>
                Discover common equipment used in LTC facilities to monitor and support 
                residents' health and wellbeing.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/medical-specialists">
              <h3>Medical Specialists</h3>
              <p>
                Understand the roles of different healthcare professionals involved in 
                your loved one's care journey.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/accessibility-equipment">
              <h3>Accessibility Equipment</h3>
              <p>
                Explore aids and devices designed to enhance mobility and independence 
                for elderly residents.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/diet">
              <h3>Diet & Nutrition</h3>
              <p>
                Find information about special diets, meal plans, and nutritional 
                guidelines for older adults.
              </p>
            </Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3>Why Choose LTC Education Hub?</h3>
          <div className="card-grid" style={{ marginTop: '1.5rem' }}>
            <div className="info-card">
              <h3>Clear & Compassionate</h3>
              <p>We explain complex healthcare topics in plain language without jargon.</p>
            </div>
            <div className="info-card">
              <h3>Trustworthy</h3>
              <p>Our information is backed by verified healthcare professionals and best practices.</p>
            </div>
            <div className="info-card">
              <h3>Accessible</h3>
              <p>Easy-to-navigate resources designed for everyone, regardless of technical ability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

