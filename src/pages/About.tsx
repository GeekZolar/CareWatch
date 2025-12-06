import React from 'react'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span>About Us</span>
      </div>

      <div className="container content-section">
        <h2>About LTC Education Hub</h2>
        
        <div className="about-content">
          <h3>Our Mission</h3>
          <p>
            LTC Education Hub was created to bridge the information gap for families and guardians 
            navigating the complex world of Long-Term Care. We believe that every family deserves 
            access to clear, compassionate, and reliable information about healthcare and caregiving 
            for their loved ones.
          </p>

          <h3>Our Purpose</h3>
          <p>
            When a family member enters Long-Term Care, families often find themselves overwhelmed by 
            medical terminology, unfamiliar equipment, and complex care processes. Our platform 
            simplifies these complexities, presenting information in plain language that empowers 
            families to:
          </p>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            <li>Understand medical tests and procedures their loved one may undergo</li>
            <li>Recognize equipment and tools used in care facilities</li>
            <li>Communicate effectively with healthcare professionals</li>
            <li>Make informed decisions about their loved one's care</li>
            <li>Feel more confident and engaged in the care journey</li>
          </ul>

          <h3>What Sets Us Apart</h3>
          <p>
            Unlike many medical websites that use complex jargon, LTC Education Hub presents information 
            in a compassionate, accessible way. We translate medical concepts into clear explanations 
            that families can understand and act upon.
          </p>

          <div className="card-grid" style={{ marginTop: '2rem' }}>
            <div className="info-card">
              <h3>✓ Trustworthy</h3>
              <p>Our information is based on verified healthcare guidelines, best practices, and professional expertise.</p>
            </div>
            <div className="info-card">
              <h3>✓ Comprehensive</h3>
              <p>We cover essential topics from medical tests and equipment to specialists and dietary needs.</p>
            </div>
            <div className="info-card">
              <h3>✓ Accessible</h3>
              <p>Designed to be easy to navigate for people of all ages and technical abilities.</p>
            </div>
            <div className="info-card">
              <h3>✓ Compassionate</h3>
              <p>We understand this journey can be difficult. Our tone is supportive and understanding.</p>
            </div>
          </div>

          <h3>Our Story</h3>
          <p>
            LTC Education Hub was born from personal experience. After navigating Long-Term Care for 
            our own family members, we realized how difficult it was to find clear, consolidated 
            information when needed most. We created this platform to ensure that no family has to 
            face the same challenge alone.
          </p>
          <p>
            Today, we partner with healthcare professionals, LTC facilities, and families to ensure 
            our content remains current, accurate, and relevant. We continuously update our resources 
            to reflect best practices and evolving care standards.
          </p>

          <h3>Our Team</h3>
          <p>
            Our team includes healthcare professionals, educators, and family advocates who are 
            committed to making Long-Term Care information accessible to everyone. We work with 
            registered nurses, physicians, and other specialists to ensure the accuracy and relevance 
            of our content.
          </p>

          <h3>Our Values</h3>
          <ul style={{ marginLeft: '2rem' }}>
            <li><strong>Empowerment:</strong> We believe knowledge empowers families to advocate for their loved ones</li>
            <li><strong>Transparency:</strong> We provide clear, honest information without commercial bias</li>
            <li><strong>Compassion:</strong> We acknowledge the emotional challenges families face</li>
            <li><strong>Accessibility:</strong> Information should be available to everyone, regardless of background</li>
            <li><strong>Excellence:</strong> We maintain high standards for content quality and accuracy</li>
          </ul>

          <h3>Looking Forward</h3>
          <p>
            As Long-Term Care evolves, so will we. Our commitment to families and guardians remains 
            steadfast. We continue to expand our resources, add new topics, and improve user experience 
            based on feedback from our community.
          </p>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#eff6ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
            <h3>Disclaimer</h3>
            <p>
              The information provided on LTC Education Hub is for educational purposes only and does 
              not constitute medical advice, diagnosis, or treatment. Always seek the advice of qualified 
              healthcare providers with any questions you may have regarding medical conditions or care 
              decisions. Individual circumstances may vary, and professional consultation is recommended 
              for specific healthcare concerns.
            </p>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3>Have Questions or Feedback?</h3>
            <p>We'd love to hear from you!</p>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

