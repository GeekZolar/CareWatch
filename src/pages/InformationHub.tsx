import React from 'react'
import { Link } from 'react-router-dom'

const InformationHub: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span>Information Hub</span>
      </div>

      <div className="container content-section">
        <h2>Information Hub</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Browse through our comprehensive collection of Long-Term Care resources. 
          Click on any topic to learn more.
        </p>

        <div className="card-grid">
          <div className="topic-card">
            <Link to="/medical-tests">
              <h3>🔬 Medical Tests</h3>
              <p>
                Comprehensive guide to medical tests including imaging, diagnostic, 
                blood, and urine tests. Learn what to expect and why they're important.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/equipment">
              <h3>🏥 Medical Equipment</h3>
              <p>
                Common hospital and LTC facility equipment like monitors, oxygen 
                concentrators, IV stands, and more.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/medical-specialists">
              <h3>👩‍⚕️ Medical Specialists</h3>
              <p>
                Learn about different medical professionals involved in elderly care, 
                from physiotherapists to geriatricians.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/accessibility-equipment">
              <h3>♿ Accessibility Equipment</h3>
              <p>
                Mobility aids and devices to enhance independence, including walkers, 
                canes, grab bars, and wheelchairs.
              </p>
            </Link>
          </div>

          <div className="topic-card">
            <Link to="/diet">
              <h3>🍽️ Diet & Nutrition</h3>
              <p>
                Special diets for older adults including soft diets, diabetic meals, 
                low-sodium options, and nutritional guidance.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationHub

