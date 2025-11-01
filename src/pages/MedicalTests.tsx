import React from 'react'
import { Link } from 'react-router-dom'

const MedicalTests: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/information-hub">Information Hub</Link>
        <span>&gt;</span>
        <span>Medical Tests</span>
      </div>

      <div className="container content-section">
        <h2>Medical Tests</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Understanding medical tests can help you better support your loved one. 
          Here's a comprehensive guide to common tests your family member may undergo.
        </p>

        <h3>Imaging Tests</h3>
        <div className="info-card">
          <h3>X-Ray</h3>
          <p><strong>Purpose:</strong> To view bones and detect fractures, bone diseases, or other abnormalities.</p>
          <p><strong>What to Expect:</strong> Quick and painless. Your loved one will need to stay still while images are taken. Minimal radiation exposure.</p>
          <p><strong>Duration:</strong> Typically 5-10 minutes</p>
        </div>

        <div className="info-card">
          <h3>CT Scan (Computed Tomography)</h3>
          <p><strong>Purpose:</strong> Detailed cross-sectional images of the body to detect tumors, infections, or internal injuries.</p>
          <p><strong>What to Expect:</strong> Your loved one lies on a table that moves through a ring-shaped scanner. May require contrast dye via IV. Need to remain still during the scan.</p>
          <p><strong>Duration:</strong> 15-30 minutes</p>
        </div>

        <div className="info-card">
          <h3>MRI (Magnetic Resonance Imaging)</h3>
          <p><strong>Purpose:</strong> Detailed images of soft tissues, brain, spinal cord, and organs without radiation.</p>
          <p><strong>What to Expect:</strong> Patient lies on a table that slides into a tube. The machine makes loud knocking sounds. Not suitable for people with certain metal implants.</p>
          <p><strong>Duration:</strong> 30-60 minutes</p>
        </div>

        <div className="info-card">
          <h3>Ultrasound</h3>
          <p><strong>Purpose:</strong> Safe imaging using sound waves to view organs, blood flow, and soft tissues.</p>
          <p><strong>What to Expect:</strong> A technician applies gel and moves a wand over the skin. Painless and radiation-free. May need a full bladder for some scans.</p>
          <p><strong>Duration:</strong> 15-30 minutes</p>
        </div>

        <h3>Diagnostic Tests</h3>
        <div className="info-card">
          <h3>EKG/ECG (Electrocardiogram)</h3>
          <p><strong>Purpose:</strong> Records the heart's electrical activity to detect irregular heartbeats and heart problems.</p>
          <p><strong>What to Expect:</strong> Small sticky patches (electrodes) are placed on the chest, arms, and legs. Painless and quick.</p>
          <p><strong>Duration:</strong> 5-10 minutes</p>
        </div>

        <div className="info-card">
          <h3>Stress Test</h3>
          <p><strong>Purpose:</strong> Assesses heart function during physical activity to detect coronary artery disease.</p>
          <p><strong>What to Expect:</strong> Walking on a treadmill or receiving medication to increase heart rate while monitoring heart activity.</p>
          <p><strong>Duration:</strong> 30-60 minutes</p>
        </div>

        <h3>Blood Tests</h3>
        <div className="info-card">
          <h3>Complete Blood Count (CBC)</h3>
          <p><strong>Purpose:</strong> Measures red cells, white cells, and platelets to detect infections, anemia, or blood disorders.</p>
          <p><strong>What to Expect:</strong> Small blood sample taken from a vein, usually in the arm. Quick needle prick.</p>
        </div>

        <div className="info-card">
          <h3>Blood Chemistry Panel</h3>
          <p><strong>Purpose:</strong> Evaluates kidney function, liver function, blood sugar, and electrolyte levels.</p>
          <p><strong>What to Expect:</strong> Blood draw from arm. May require fasting beforehand.</p>
        </div>

        <div className="info-card">
          <h3>Cholesterol Panel</h3>
          <p><strong>Purpose:</strong> Measures cholesterol and triglyceride levels to assess heart disease risk.</p>
          <p><strong>What to Expect:</strong> Blood test, typically requires 9-12 hour fasting.</p>
        </div>

        <div className="info-card">
          <h3>Blood Sugar (Glucose) Test</h3>
          <p><strong>Purpose:</strong> Monitors diabetes or prediabetes. Checks blood glucose levels.</p>
          <p><strong>What to Expect:</strong> Simple finger prick or blood draw. May require fasting.</p>
        </div>

        <h3>Urine Tests</h3>
        <div className="info-card">
          <h3>Urinalysis</h3>
          <p><strong>Purpose:</strong> Screens for urinary tract infections, kidney problems, and diabetes.</p>
          <p><strong>What to Expect:</strong> Patient provides a mid-stream urine sample in a sterile cup. Non-invasive.</p>
        </div>

        <div className="info-card">
          <h3>Urine Culture</h3>
          <p><strong>Purpose:</strong> Identifies specific bacteria causing urinary tract infections.</p>
          <p><strong>What to Expect:</strong> Similar to urinalysis. Takes 24-48 hours for results.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#eff6ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
          <h3>Important Tips</h3>
          <ul>
            <li>Always follow preparation instructions (fasting, medication changes, etc.)</li>
            <li>Keep your loved one hydrated unless instructed otherwise</li>
            <li>Communicate any concerns or anxiety to healthcare staff</li>
            <li>Ask questions if you don't understand why a test is needed</li>
            <li>Results are typically available within a few days</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MedicalTests

