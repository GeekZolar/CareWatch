import React from 'react'
import { Link } from 'react-router-dom'

const Diet: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/information-hub">Information Hub</Link>
        <span>&gt;</span>
        <span>Diet & Nutrition</span>
      </div>

      <div className="container content-section">
        <h2>Diet & Nutrition</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Proper nutrition is essential for maintaining health and wellbeing in older adults. 
          Learn about special diets, meal types, and nutritional guidelines for LTC residents.
        </p>

        <h3>Special Diet Types</h3>
        <div className="info-card">
          <h3>🍜 Soft Diet</h3>
          <p><strong>Purpose:</strong> Easy-to-chew and swallow foods for residents with dental issues or difficulty eating.</p>
          <p><strong>Foods Included:</strong> Cooked vegetables, soft fruits, scrambled eggs, ground meat, pasta, yogurt, pudding, soft bread.</p>
          <p><strong>Avoid:</strong> Hard nuts, raw vegetables, tough meats, chewy breads, whole corn kernels.</p>
          <p><strong>Best For:</strong> Dental problems, denture issues, jaw pain, or swallowing difficulties.</p>
        </div>

        <div className="info-card">
          <h3>🍎 Diabetic Diet</h3>
          <p><strong>Purpose:</strong> Controls blood sugar levels through consistent carbohydrate intake and portion management.</p>
          <p><strong>Key Principles:</strong> Regular meal timing, controlled portions, low-sugar options, balanced meals with protein and fiber.</p>
          <p><strong>Foods Emphasized:</strong> Whole grains, lean proteins, vegetables, limited fruits, sugar-free options.</p>
          <p><strong>Best For:</strong> Residents with diabetes or prediabetes. Maintains stable glucose levels.</p>
        </div>

        <div className="info-card">
          <h3>🧂 Low-Sodium Diet</h3>
          <p><strong>Purpose:</strong> Reduces sodium intake to manage high blood pressure, heart disease, and fluid retention.</p>
          <p><strong>Restrictions:</strong> Typically limited to 2,000 mg or less of sodium per day (check with healthcare provider).</p>
          <p><strong>Foods to Limit:</strong> Processed foods, canned soups, deli meats, fast food, salty snacks, condiments.</p>
          <p><strong>Best For:</strong> High blood pressure, congestive heart failure, kidney disease, edema (swelling).</p>
        </div>

        <div className="info-card">
          <h3>🫘 Renal/Kidney Diet</h3>
          <p><strong>Purpose:</strong> Protects kidney function by managing protein, phosphorus, potassium, and sodium.</p>
          <p><strong>Restrictions:</strong> Varies by kidney function stage. May limit protein, dairy, nuts, bananas, and orange juice.</p>
          <p><strong>Foods Often Limited:</strong> High-protein foods, dairy products, nuts, seeds, dark leafy greens, certain fruits.</p>
          <p><strong>Best For:</strong> Chronic kidney disease (CKD) or kidney failure. Usually prescribed by renal dietitian.</p>
        </div>

        <div className="info-card">
          <h3>🥩 High-Protein Diet</h3>
          <p><strong>Purpose:</strong> Supports wound healing, muscle maintenance, and prevents muscle loss in elderly residents.</p>
          <p><strong>Foods Included:</strong> Lean meats, fish, eggs, dairy products, legumes, protein shakes, fortified foods.</p>
          <p><strong>Best For:</strong> Healing from injuries or surgeries, pressure sores, malnutrition, or muscle wasting.</p>
        </div>

        <div className="info-card">
          <h3>🥄 Pureed Food</h3>
          <p><strong>Purpose:</strong> Smooth, texture-modified foods for severe swallowing difficulties or dysphagia.</p>
          <p><strong>Preparation:</strong> Food blended to smooth consistency, no lumps or chunks. Maintains nutritional value.</p>
          <p><strong>Foods:</strong> All foods can be pureed including meats, vegetables, fruits, and grains.</p>
          <p><strong>Best For:</strong> Severe dysphagia, certain neurological conditions, or after head/neck surgery.</p>
        </div>

        <h3>Nutrition Guidelines for Older Adults</h3>
        <div className="info-card">
          <h3>💧 Hydration</h3>
          <p><strong>Importance:</strong> Dehydration is common in elderly and can cause confusion, falls, and serious health issues.</p>
          <p><strong>Recommendations:</strong></p>
          <ul>
            <li>Aim for 6-8 cups (48-64 ounces) of fluid daily unless restricted by healthcare provider</li>
            <li>Include water, milk, juice, soups, tea, and high-water content foods</li>
            <li>Monitor for signs of dehydration: dark urine, dry mouth, dizziness, confusion</li>
            <li>Offer fluids regularly throughout the day, not just with meals</li>
            <li>Some residents may need thickened liquids for swallowing safety</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>🥬 Healthy Eating Principles</h3>
          <p><strong>Balanced Meals:</strong></p>
          <ul>
            <li><strong>Protein:</strong> Essential for muscle maintenance and healing (aim for 0.8-1.0g per kg of body weight)</li>
            <li><strong>Fiber:</strong> Promotes digestive health (25-30g daily from whole grains, vegetables, fruits)</li>
            <li><strong>Calcium:</strong> Supports bone health (1200mg daily for postmenopausal women)</li>
            <li><strong>Vitamin D:</strong> Often deficient; consider supplementation (800-1000 IU daily)</li>
            <li><strong>B Vitamins:</strong> Important for energy and brain health</li>
            <li><strong>Omega-3:</strong> Supports heart and brain health (fish 2x weekly)</li>
          </ul>
        </div>

        <h3>Common Nutrition Concerns</h3>
        <div className="info-card">
          <h3>⚠️ Weight Loss</h3>
          <p><strong>Causes:</strong> Loss of appetite, dental issues, medication side effects, depression, swallowing problems, chronic illness.</p>
          <p><strong>Solutions:</strong> Smaller, frequent meals; fortified foods; nutritional supplements; addressing underlying causes.</p>
        </div>

        <div className="info-card">
          <h3>⚠️ Constipation</h3>
          <p><strong>Prevention:</strong> Adequate fiber intake, hydration, physical activity, regular meal timing.</p>
          <p><strong>Foods That Help:</strong> Prunes, whole grains, vegetables, fruits, adequate water intake.</p>
        </div>

        <div className="info-card">
          <h3>⚠️ Medication Interactions</h3>
          <p><strong>Important:</strong> Some foods can interact with medications. Always consult with pharmacist about food-drug interactions.</p>
          <p><strong>Common Interactions:</strong> Grapefruit with certain medications, vitamin K with blood thinners, tyramine with MAOIs.</p>
        </div>

        <h3>Meal Planning Tips</h3>
        <div className="info-card">
          <h3>📋 Practical Guidelines</h3>
          <ul>
            <li>Serve meals at regular times to establish routine</li>
            <li>Create pleasant, social dining atmosphere when possible</li>
            <li>Present food attractively to stimulate appetite</li>
            <li>Accommodate cultural and personal food preferences</li>
            <li>Ensure adequate time for eating (residents may eat slowly)</li>
            <li>Monitor food intake and weight regularly</li>
            <li>Work with registered dietitian for specialized needs</li>
            <li>Supplement with fortified beverages if calorie intake is low</li>
          </ul>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <h3>Important Reminders</h3>
          <ul>
            <li>Dietary restrictions are prescribed for medical reasons and must be followed consistently</li>
            <li>Consult with facility dietitian or healthcare provider before making changes</li>
            <li>Report concerns about food preferences, appetite, or digestive issues to staff</li>
            <li>Special diets require careful preparation and monitoring</li>
            <li>Flexibility exists when safe and appropriate to accommodate resident preferences</li>
            <li>Family input about food likes/dislikes is valuable to ensure resident satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Diet

