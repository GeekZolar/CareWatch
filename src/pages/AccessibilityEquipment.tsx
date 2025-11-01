import React from 'react'
import { Link } from 'react-router-dom'

const AccessibilityEquipment: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/information-hub">Information Hub</Link>
        <span>&gt;</span>
        <span>Accessibility Equipment</span>
      </div>

      <div className="container content-section">
        <h2>Accessibility Equipment</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Discover aids and devices designed to enhance mobility, safety, and independence 
          for elderly residents in Long-Term Care facilities.
        </p>

        <h3>Mobility Aids</h3>
        <div className="info-card">
          <h3>🚶 Standard Walker</h3>
          <p><strong>Purpose:</strong> Provides maximum stability for walking with four-point support on the ground.</p>
          <p><strong>Usage:</strong> Lift and place forward with each step. Ideal for those needing significant balance support.</p>
          <p><strong>Best For:</strong> Residents with severe balance issues or during recovery from surgery or injury.</p>
          <p><strong>Features:</strong> Adjustable height, rubber tips for grip, lightweight aluminum construction.</p>
        </div>

        <div className="info-card">
          <h3>🦼 Rollator (Wheeled Walker)</h3>
          <p><strong>Purpose:</strong> Walker with wheels and hand brakes for smoother, easier movement.</p>
          <p><strong>Usage:</strong> Push forward with less lifting required. Brakes provide stopping control.</p>
          <p><strong>Best For:</strong> Those who can walk but need support for balance and fatigue. Includes seat for rest breaks.</p>
          <p><strong>Features:</strong> Seat, storage basket, hand brakes, height-adjustable handles, large wheels.</p>
        </div>

        <div className="info-card">
          <h3>🦯 Cane</h3>
          <p><strong>Purpose:</strong> Provides single-point support and improves balance during walking.</p>
          <p><strong>Usage:</strong> Held on the stronger side of the body. Wide variety of styles available.</p>
          <p><strong>Best For:</strong> Minor balance issues or joint pain in one leg. Used on the opposite side of the affected leg.</p>
          <p><strong>Types:</strong> Standard single-point, quad (4-point), offset, and folding canes.</p>
        </div>

        <div className="info-card">
          <h3>🦽 Wheelchair</h3>
          <p><strong>Purpose:</strong> Enables mobility for those unable to walk or for long distances.</p>
          <p><strong>Usage:</strong> Manual or electric. Requires proper seating and positioning for comfort and health.</p>
          <p><strong>Best For:</strong> Permanent or temporary mobility limitations due to injury, illness, or fatigue.</p>
          <p><strong>Types:</strong> Standard, transport, lightweight, and power wheelchairs with various features.</p>
        </div>

        <h3>Transfer & Safety Equipment</h3>
        <div className="info-card">
          <h3>↔️ Transfer Board</h3>
          <p><strong>Purpose:</strong> Smooth, firm board that bridges gaps for safer seated transfers between surfaces.</p>
          <p><strong>Usage:</strong> Slid beneath the person to create a bridge from wheelchair to bed or chair. Reduces friction.</p>
          <p><strong>Best For:</strong> Residents with limited leg strength but able to pivot while seated.</p>
          <p><strong>Safety:</strong> Requires supervision and proper technique to prevent slips. Non-slip surfaces help.</p>
        </div>

        <div className="info-card">
          <h3>🛡️ Grab Bars</h3>
          <p><strong>Purpose:</strong> Wall-mounted bars that provide secure handholds for stability and support.</p>
          <p><strong>Usage:</strong> Installed in bathrooms, hallways, and beside beds. Multiple positions available.</p>
          <p><strong>Best For:</strong> Preventing falls during standing, sitting, or transferring. Essential in wet areas.</p>
          <p><strong>Installation:</strong> Must be securely anchored to wall studs with proper weight-bearing capacity.</p>
        </div>

        <div className="info-card">
          <h3>🪑 Shower Chair / Bath Bench</h3>
          <p><strong>Purpose:</strong> Waterproof seating for safe bathing while sitting down.</p>
          <p><strong>Usage:</strong> Stable seat in shower or tub. Some models have backrests and armrests for extra support.</p>
          <p><strong>Best For:</strong> Residents with balance issues, weakness, or fatigue during bathing. Reduces fall risk.</p>
          <p><strong>Features:</strong> Drainage holes, non-slip feet, adjustable legs for level positioning, padded surfaces.</p>
        </div>

        <div className="info-card">
          <h3>🚽 Raised Toilet Seat</h3>
          <p><strong>Purpose:</strong> Increases toilet height to make sitting and standing easier.</p>
          <p><strong>Usage:</strong> Attaches securely to existing toilet. May include armrests for additional support.</p>
          <p><strong>Best For:</strong> Those with limited hip or knee mobility who struggle with low toilet height.</p>
        </div>

        <h3>Lifting & Positioning Equipment</h3>
        <div className="info-card">
          <h3>🏋️ Lift Sling</h3>
          <p><strong>Purpose:</strong> Fabric harness used with ceiling or mobile lifts to safely transfer residents.</p>
          <p><strong>Usage:</strong> Placed under the person and attached to a mechanical lift for transfers with minimal staff assistance.</p>
          <p><strong>Best For:</strong> Residents who cannot weight-bear or assist in transfers. Prevents staff and resident injury.</p>
          <p><strong>Types:</strong> Full-body, standing, bathing, and toileting slings. Proper sizing is critical.</p>
        </div>

        <div className="info-card">
          <h3>🎯 Hoyer Lift / Patient Lift</h3>
          <p><strong>Purpose:</strong> Mechanical device that lifts and transfers residents with complete support.</p>
          <p><strong>Usage:</strong> Operated by trained staff using electric or hydraulic controls. Replaces manual lifting.</p>
          <p><strong>Best For:</strong> Heavy transfers, those with no weight-bearing ability, or when safety requires mechanical assistance.</p>
        </div>

        <div className="info-card">
          <h3>🛏️ Bed Rails</h3>
          <p><strong>Purpose:</strong> Safety rails on bed sides to prevent falls during sleep or when repositioning.</p>
          <p><strong>Usage:</strong> May be fixed or adjustable. Height and positioning important for safety and comfort.</p>
          <p><strong>Best For:</strong> Residents at risk of falling out of bed due to confusion, movement disorders, or seizures.</p>
          <p><strong>Note:</strong> Must be used carefully to prevent entrapment injuries. Not appropriate for everyone.</p>
        </div>

        <h3>Daily Living Aids</h3>
        <div className="info-card">
          <h3>🥄 Adaptive Utensils</h3>
          <p><strong>Purpose:</strong> Specially designed eating utensils that accommodate grip weakness or arthritis.</p>
          <p><strong>Types:</strong> Weighted utensils, angled handles, large grips, rocker knives, and two-handled cups.</p>
          <p><strong>Best For:</strong> Residents with hand weakness, tremor, or limited finger dexterity.</p>
        </div>

        <div className="info-card">
          <h3>🍵 Drinking Aids</h3>
          <p><strong>Purpose:</strong> Cups and straws designed to improve drinking safety and independence.</p>
          <p><strong>Types:</strong> Two-handled cups, weighted base cups, nose cutouts, and flexible/bendable straws.</p>
          <p><strong>Best For:</strong> Those with swallowing difficulties, limited hand movement, or difficulty tilting head.</p>
        </div>

        <div className="info-card">
          <h3>📞 Communication Aids</h3>
          <p><strong>Purpose:</strong> Devices to help residents communicate needs, especially for those with speech difficulties.</p>
          <p><strong>Types:</strong> Large-button phones, speech amplifiers, communication boards, and alert systems.</p>
          <p><strong>Best For:</strong> Residents with hearing loss, speech impairment, or cognitive communication challenges.</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#eff6ff', borderRadius: '8px', borderLeft: '4px solid #2563eb' }}>
          <h3>Choosing the Right Equipment</h3>
          <ul>
            <li>Assessment by occupational therapist or physiotherapist ensures proper fit and usage</li>
            <li>Equipment should be adjusted to individual height, weight, and abilities</li>
            <li>Regular maintenance and cleaning prevent wear and infection</li>
            <li>All equipment must meet safety standards and regulations</li>
            <li>Staff training ensures safe operation and resident safety</li>
            <li>Document and report any equipment problems or discomfort immediately</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityEquipment

