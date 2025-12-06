import React from 'react'
import { Link } from 'react-router-dom'

const Equipment: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/information-hub">Information Hub</Link>
        <span>&gt;</span>
        <span>Medical Equipment</span>
      </div>

      <div className="container content-section">
        <h2>Medical Equipment</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Familiarize yourself with common medical equipment used in LTC facilities. 
          Understanding these devices can help you feel more confident about your loved one's care.
        </p>

        <h3>Monitoring Equipment</h3>
        <div className="info-card">
          <h3>🫀 Blood Pressure Monitor</h3>
          <p><strong>Purpose:</strong> Measures blood pressure to monitor heart health and detect hypertension or hypotension.</p>
          <p><strong>Usage:</strong> An inflatable cuff wraps around the upper arm and automatically measures pressure. Regular checks help staff manage cardiovascular health.</p>
          <p><strong>Safety:</strong> Non-invasive and painless. No special precautions needed.</p>
        </div>

        <div className="info-card">
          <h3>📊 EKG/ECG Monitor</h3>
          <p><strong>Purpose:</strong> Continuously tracks heart rhythm and electrical activity in real-time.</p>
          <p><strong>Usage:</strong> Small adhesive patches connect to a monitor displaying heart rate and rhythm. Used for residents with heart conditions.</p>
          <p><strong>Safety:</strong> Electrode pads should be changed regularly to prevent skin irritation.</p>
        </div>

        <div className="info-card">
          <h3>🌡️ Thermometer</h3>
          <p><strong>Purpose:</strong> Measures body temperature to detect fever, infections, or health changes.</p>
          <p><strong>Usage:</strong> Digital thermometers may be oral, ear, or forehead-based. Quick and accurate readings.</p>
        </div>

        <div className="info-card">
          <h3>🔴 Pulse Oximeter</h3>
          <p><strong>Purpose:</strong> Monitors blood oxygen saturation levels and pulse rate.</p>
          <p><strong>Usage:</strong> Small clip device on finger or earlobe emits light to measure oxygen. Essential for respiratory monitoring.</p>
        </div>

        <h3>Respiratory Equipment</h3>
        <div className="info-card">
          <h3>💨 Oxygen Concentrator</h3>
          <p><strong>Purpose:</strong> Purifies air and delivers concentrated oxygen to residents with breathing difficulties.</p>
          <p><strong>Usage:</strong> Filters room air to provide medical-grade oxygen via nasal cannula or mask. Makes a gentle humming sound.</p>
          <p><strong>Safety:</strong> Keep away from open flames. Ensure proper tubing placement. Regular cleaning prevents infections.</p>
        </div>

        <div className="info-card">
          <h3>🌬️ Nebulizer</h3>
          <p><strong>Purpose:</strong> Converts liquid medication into fine mist for inhalation to treat respiratory conditions.</p>
          <p><strong>Usage:</strong> Patient breathes through a mask or mouthpiece for 10-20 minutes. Common for asthma or COPD.</p>
        </div>

        <div className="info-card">
          <h3>🫁 CPAP/BiPAP Machine</h3>
          <p><strong>Purpose:</strong> Delivers pressurized air to keep airways open during sleep for those with sleep apnea.</p>
          <p><strong>Usage:</strong> Mask worn at night connected to a small machine. Requires proper fitting and regular maintenance.</p>
        </div>

        <h3>Infusion & IV Equipment</h3>
        <div className="info-card">
          <h3>💉 IV Stand (Pole)</h3>
          <p><strong>Purpose:</strong> Holds IV bags, pumps, and medication at the correct height for delivery.</p>
          <p><strong>Usage:</strong> Mobile stand with hooks and rollers. Allows residents to move while receiving IV fluids or medications.</p>
        </div>

        <div className="info-card">
          <h3>💊 IV Pump</h3>
          <p><strong>Purpose:</strong> Controls precise delivery of IV fluids and medications at set rates.</p>
          <p><strong>Usage:</strong> Programmed by nursing staff to deliver exact amounts. Alarms alert if issues occur.</p>
        </div>

        <div className="info-card">
          <h3>🧪 Feeding Pump</h3>
          <p><strong>Purpose:</strong> Delivers liquid nutrition through feeding tubes for residents unable to eat orally.</p>
          <p><strong>Usage:</strong> Similar to IV pumps, controls feeding rate. Requires careful monitoring and hygiene.</p>
        </div>

        <h3>Mobility Equipment</h3>
        <div className="info-card">
          <h3>🦽 Wheelchair</h3>
          <p><strong>Purpose:</strong> Provides mobility for those unable to walk safely or for extended distances.</p>
          <p><strong>Usage:</strong> Manual or electric models. Proper fitting prevents pressure sores and discomfort.</p>
        </div>

        <div className="info-card">
          <h3>🚶 Walker</h3>
          <p><strong>Purpose:</strong> Provides stability and support while walking. Includes standard and rollator (wheeled) types.</p>
          <p><strong>Usage:</strong> Adjustable height for proper posture. Non-slip tips or wheels for safety.</p>
        </div>

        <div className="info-card">
          <h3>🦯 Cane</h3>
          <p><strong>Purpose:</strong> Lightweight support for balance and reducing pressure on joints.</p>
          <p><strong>Usage:</strong> Held on the stronger side. Various styles including standard, quad, and adjustable canes.</p>
        </div>

        <h3>Beds & Positioning</h3>
        <div className="info-card">
          <h3>🏥 Hospital Bed</h3>
          <p><strong>Purpose:</strong> Electric beds with adjustable height and positioning to prevent bedsores and improve comfort.</p>
          <p><strong>Usage:</strong> Staff can raise/lower head and legs. Side rails for safety. Easier care access for staff.</p>
        </div>

        <div className="info-card">
          <h3>🛏️ Lifting Equipment</h3>
          <p><strong>Purpose:</strong> Mechanical lifts help transfer residents safely between bed, wheelchair, and toilet.</p>
          <p><strong>Usage:</strong> Reduces staff injury risk and ensures safe, dignified transfers for residents.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <h3>Safety Reminders</h3>
          <ul>
            <li>All equipment is regularly inspected and maintained by facility staff</li>
            <li>Report any concerns about equipment condition or functionality immediately</li>
            <li>Ask staff to demonstrate equipment if you'd like to understand its use</li>
            <li>Maintain clear pathways around equipment for safety</li>
            <li>Emergency backup equipment is always available</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Equipment

