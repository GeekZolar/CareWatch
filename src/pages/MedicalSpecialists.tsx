import React from 'react'
import { Link } from 'react-router-dom'

const MedicalSpecialists: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/information-hub">Information Hub</Link>
        <span>&gt;</span>
        <span>Medical Specialists</span>
      </div>

      <div className="container content-section">
        <h2>Medical Specialists</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Meet the healthcare professionals who play vital roles in your loved one's care. 
          Understanding their expertise helps you know who to consult for specific concerns.
        </p>

        <h3>Rehabilitation Specialists</h3>
        <div className="info-card">
          <h3>💪 Physiotherapist (Physical Therapist)</h3>
          <p><strong>Role:</strong> Helps residents maintain or regain strength, mobility, balance, and independence through exercise and movement therapy.</p>
          <p><strong>When Needed:</strong> After falls, surgeries, or when mobility declines. For pain management, stroke recovery, or improving daily function.</p>
          <p><strong>Services:</strong> Exercise programs, gait training, pain relief techniques, fall prevention strategies, wheelchair fitting.</p>
        </div>

        <div className="info-card">
          <h3>🎯 Occupational Therapist (OT)</h3>
          <p><strong>Role:</strong> Focuses on helping residents perform daily activities like dressing, eating, and bathing with maximum independence.</p>
          <p><strong>When Needed:</strong> When cognitive or physical changes affect self-care abilities. For adaptive equipment recommendations.</p>
          <p><strong>Services:</strong> Activity planning, safety assessments, adaptive tools training, cognitive exercises, wheelchair positioning.</p>
        </div>

        <div className="info-card">
          <h3>🗣️ Speech Therapist (Speech-Language Pathologist)</h3>
          <p><strong>Role:</strong> Assesses and treats communication difficulties, swallowing problems, and cognitive language issues.</p>
          <p><strong>When Needed:</strong> After stroke, dementia progression, difficulty swallowing, or changes in speech clarity.</p>
          <p><strong>Services:</strong> Swallowing therapy, speech exercises, alternative communication methods, diet texture recommendations.</p>
        </div>

        <h3>Medical Physicians</h3>
        <div className="info-card">
          <h3>👴 Geriatrician</h3>
          <p><strong>Role:</strong> Specializes in care for older adults. Manages multiple medical conditions and medications comprehensively.</p>
          <p><strong>When Needed:</strong> For overall geriatric care coordination, medication review, managing complex health issues in aging.</p>
          <p><strong>Services:</strong> Comprehensive health assessments, medication optimization, geriatric syndromes management, family consultations.</p>
        </div>

        <div className="info-card">
          <h3>🫀 Cardiologist</h3>
          <p><strong>Role:</strong> Specializes in heart and cardiovascular health. Diagnoses and treats heart conditions.</p>
          <p><strong>When Needed:</strong> For heart disease, irregular heartbeats, chest pain, high blood pressure, or heart failure management.</p>
          <p><strong>Services:</strong> Heart monitoring, medication management, cardiac procedures, lifestyle counseling.</p>
        </div>

        <div className="info-card">
          <h3>🧠 Neurologist</h3>
          <p><strong>Role:</strong> Expert in brain, spinal cord, and nervous system disorders.</p>
          <p><strong>When Needed:</strong> For dementia, Parkinson's disease, strokes, seizures, or nerve-related pain.</p>
          <p><strong>Services:</strong> Neurological assessments, cognitive testing, medication management for neurological conditions.</p>
        </div>

        <div className="info-card">
          <h3>🩺 Internal Medicine Physician</h3>
          <p><strong>Role:</strong> Provides primary care for adults, managing overall health and coordinating with specialists.</p>
          <p><strong>When Needed:</strong> Primary healthcare provider, annual checkups, managing chronic conditions, preventive care.</p>
          <p><strong>Services:</strong> Routine exams, chronic disease management, referrals to specialists, health monitoring.</p>
        </div>

        <h3>Nursing & Support Care</h3>
        <div className="info-card">
          <h3>👩‍⚕️ Registered Nurse (RN)</h3>
          <p><strong>Role:</strong> Provides hands-on patient care, administers medications, monitors health status, and coordinates with doctors.</p>
          <p><strong>When Available:</strong> Daily care and monitoring in LTC facilities. First point of contact for resident needs.</p>
          <p><strong>Services:</strong> Medication administration, wound care, health assessments, family communication, care plan execution.</p>
        </div>

        <div className="info-card">
          <h3>👥 Personal Support Worker (PSW) / Nurse Aide</h3>
          <p><strong>Role:</strong> Provides direct personal care assistance with daily living activities under nursing supervision.</p>
          <p><strong>When Available:</strong> Daily assistance with bathing, dressing, eating, and mobility support.</p>
          <p><strong>Services:</strong> Personal hygiene, meal assistance, companionship, basic health monitoring, activity support.</p>
        </div>

        <h3>Other Specialists</h3>
        <div className="info-card">
          <h3>👁️ Ophthalmologist / Optometrist</h3>
          <p><strong>Role:</strong> Eye health specialists who diagnose and treat vision problems and eye diseases.</p>
          <p><strong>When Needed:</strong> For vision changes, eye pain, cataracts, glaucoma, or diabetic retinopathy screening.</p>
        </div>

        <div className="info-card">
          <h3>👂 Audiologist</h3>
          <p><strong>Role:</strong> Hearing health specialist who assesses hearing and fits hearing aids.</p>
          <p><strong>When Needed:</strong> When hearing loss affects communication or when hearing aid maintenance is required.</p>
        </div>

        <div className="info-card">
          <h3>🦷 Dentist</h3>
          <p><strong>Role:</strong> Oral health care provider for dental problems and preventative care.</p>
          <p><strong>When Needed:</strong> For dental pain, infections, denture issues, or routine oral health maintenance.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#ecfdf5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
          <h3>How to Work with Specialists</h3>
          <ul>
            <li>Prepare questions before appointments to maximize limited consultation time</li>
            <li>Bring medication lists and health history information</li>
            <li>Voice concerns about your loved one's condition openly and honestly</li>
            <li>Request written summaries or care recommendations when needed</li>
            <li>Ensure all specialists communicate with the primary care physician</li>
            <li>Follow up on recommendations and treatment plans</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MedicalSpecialists

