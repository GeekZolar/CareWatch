import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { requestChatbotResponse } from '../services/chatbot'

type ChatMessage = {
  sender: 'bot' | 'user'
  text: string
}

const Home: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text:
        'Hi, I am CareChat. Ask me about medical tests, equipment, specialists, or anything else on your mind.',
    },
  ])
  const [userInput, setUserInput] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [chatError, setChatError] = useState<string | null>(null)

  const quickPrompts = [
    'What services do you cover?',
    'How do I prepare for medical tests?',
    'Who works in an LTC facility?',
    'What nutrition support can I expect?',
  ]

  const faqResponses: { keywords: string[]; response: string }[] = [
    {
      keywords: ['service', 'cover', 'topics', 'resource'],
      response:
        'We cover medical tests, diet & nutrition, equipment, accessibility tools, and the specialists involved in delivering long-term care.',
    },
    {
      keywords: ['test', 'medical', 'prepare', 'diagnostic'],
      response:
        'Preparation depends on the test. Plan to share medications, arrive early, and ask staff about fasting or mobility support needs.',
    },
    {
      keywords: ['specialist', 'doctor', 'nurse', 'team'],
      response:
        'An LTC care team can include geriatricians, nurses, dietitians, therapists, pharmacists, and social workers collaborating on care plans.',
    },
    {
      keywords: ['nutrition', 'diet', 'meal', 'food'],
      response:
        'Facilities tailor menus with dietitians to support chronic conditions, hydration, and culturally familiar foods whenever possible.',
    },
    {
      keywords: ['equipment', 'device', 'mobility', 'accessibility'],
      response:
        'Common equipment includes monitoring devices, lifts, walkers, wheelchairs, and adaptive tools that keep residents mobile and safe.',
    },
    {
      keywords: ['visit', 'visiting', 'family', 'hours'],
      response:
        'Visiting hours differ by facility, but many encourage scheduled visits plus virtual check-ins. Ask staff for the exact policy.',
    },
    {
      keywords: ['cost', 'price', 'pay', 'insurance'],
      response:
        'Costs vary with location and level of care. Ask about government programs, private insurance, and veteran benefits that may offset fees.',
    },
    {
      keywords: ['help', 'contact', 'support'],
      response:
        'Visit our Contact page to reach the LTC Education Hub team, or explore the Information Hub for detailed guides.',
    },
    {
      keywords: ['safety', 'emergency', 'protocol', 'incident'],
      response:
        'Every facility maintains safety protocols for falls, medication errors, and emergencies. Ask staff how they train and report on incidents.',
    },
    {
      keywords: ['therapy', 'rehab', 'exercise'],
      response:
        'Residents may receive physical, occupational, or speech therapy based on their care plan. Sessions focus on mobility, strength, and communication.',
    },
    {
      keywords: ['mental', 'social', 'activity', 'lonely'],
      response:
        'Many homes run activity calendars, social clubs, and spiritual services. Ask how they support emotional wellbeing for residents and families.',
    },
  ]

  const getBotResponse = (input: string) => {
    const normalized = input.toLowerCase()
    const matched = faqResponses.find(({ keywords }) =>
      keywords.some((keyword) => normalized.includes(keyword))
    )

    if (matched) {
      return matched.response
    }

    if (normalized.includes('hello') || normalized.includes('hi')) {
      return 'Hello! How can I support you on your long-term care journey today?'
    }

    return 'I am still learning. Try asking about medical tests, nutrition, specialists, or equipment.'
  }

  const handleSend = async (promptText?: string) => {
    if (isLoading) return

    const text = (promptText ?? userInput).trim()
    if (!text) return

    const userMessage: ChatMessage = { sender: 'user', text }
    setMessages((prev) => [...prev, userMessage])
    if (!promptText) {
      setUserInput('')
    }
    setIsLoading(true)
    setChatError(null)

    try {
      const backendReply = await requestChatbotResponse(text)
      const reply = backendReply?.trim() || getBotResponse(text)
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
    } catch (error) {
      console.error('CareChat error:', error)
      setChatError('CareChat is temporarily unavailable. Showing a helpful guide instead.')
      setMessages((prev) => [...prev, { sender: 'bot', text: getBotResponse(text) }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSend()
    }
  }

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

      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setIsChatOpen(true)}
        aria-expanded={isChatOpen}
        aria-controls="chatbot-panel"
      >
        <span className="chatbot-launcher-icon">💬</span>
        Need LTC help?
      </button>

      {isChatOpen && (
        <div className="chatbot-overlay" role="presentation" onClick={() => setIsChatOpen(false)}>
          <aside
            id="chatbot-panel"
            className="chatbot-panel"
            aria-label="CareChat panel"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="chatbot-header">
              <div>
                <p className="chatbot-title">CareChat</p>
                <p className="chatbot-subtitle">Your LTC guide, 24/7.</p>
              </div>
              <div className="chatbot-header-actions">
                <span className="chatbot-status">online</span>
                <button
                  type="button"
                  className="chatbot-close"
                  onClick={() => setIsChatOpen(false)}
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <div key={`${message.sender}-${index}`} className={`chat-message ${message.sender}`}>
                  <p>{message.text}</p>
                </div>
              ))}
              {isLoading && (
                <div className="chat-message bot typing">
                  <p>CareChat is typing…</p>
                </div>
              )}
            </div>

            {chatError && <p className="chatbot-error">{chatError}</p>}

            <div className="chatbot-quick-prompts">
              <span>Quick prompts:</span>
              <div className="prompt-buttons">
                {quickPrompts.map((prompt) => (
                  <button key={prompt} onClick={() => handleSend(prompt)} disabled={isLoading}>
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about tests, nutrition, specialists..."
                aria-label="Chatbot message input"
                disabled={isLoading}
              />
              <button type="button" onClick={() => handleSend()} disabled={isLoading}>
                Send
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Home

