import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <span>Contact Us</span>
      </div>

      <div className="container content-section">
        <h2>Contact Us</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Have questions about Long-Term Care? We're here to help. Reach out to us and we'll 
          get back to you as soon as possible.
        </p>

        <div className="card-grid">
          <div className="info-card">
            <h3>📧 Email Us</h3>
            <p>info@ltceducationhub.org</p>
            <p>support@ltceducationhub.org</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>Toll-Free: 1-800-LTC-EDUC</p>
            <p>Local: (555) 123-4567</p>
            <p>Hours: Monday-Friday, 9:00 AM - 5:00 PM EST</p>
          </div>

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>
              123 Healthcare Avenue<br />
              Suite 456<br />
              Care City, State 12345<br />
              United States
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is your message about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please provide details about your question or concern..."
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="success-message">
              ✓ Thank you for contacting us! We've received your message and will respond soon.
            </div>
          )}
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '8px' }}>
          <h3>Frequently Asked Questions</h3>
          <div className="info-card">
            <h4>How quickly will you respond?</h4>
            <p>We typically respond within 2-3 business days. For urgent matters, please call our phone line.</p>
          </div>
          <div className="info-card">
            <h4>Can you provide medical advice?</h4>
            <p>We provide educational information only. For specific medical questions, please consult your healthcare provider.</p>
          </div>
          <div className="info-card">
            <h4>Do you recommend specific facilities?</h4>
            <p>We do not endorse or recommend specific Long-Term Care facilities. We provide educational resources to help you make informed decisions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

