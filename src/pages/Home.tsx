import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  const [lastSendWasTyped, setLastSendWasTyped] = useState(false)
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0)
  const [carouselCardCount, setCarouselCardCount] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const carouselIndexRef = useRef(0)
  const isDraggingRef = useRef(false)
  const isPointerDownRef = useRef(false)
  const hasPointerCaptureRef = useRef(false)
  const dragStartXRef = useRef(0)
  const scrollStartLeftRef = useRef(0)

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

    // Track whether this send originated from a typed input (not a quick prompt)
    const isTyped = !promptText
    setLastSendWasTyped(isTyped)

    setIsLoading(true)
    // clear previous error on new send
    setChatError(null)

    try {
      const backendReply = await requestChatbotResponse(text)
      const reply = backendReply?.trim() || getBotResponse(text)
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
    } catch (error) {
      console.error('CareChat error:', error)
      // Only show the chat error when the user typed the message (not when they clicked a quick prompt)
      if (isTyped) {
        setChatError('CareChat is temporarily unavailable. Showing a helpful guide instead.')
      }
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

  const scrollToCarouselIndex = useCallback((index: number) => {
    const track = carouselRef.current
    if (!track) return
    const cards = Array.from(track.children) as HTMLElement[]
    if (!cards.length) return
    const clampedIndex = ((index % cards.length) + cards.length) % cards.length
    carouselIndexRef.current = clampedIndex
    setActiveCarouselIndex(clampedIndex)
    track.scrollTo({ left: cards[clampedIndex].offsetLeft, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const track = carouselRef.current
    if (!track) return

    const getCards = () => Array.from(track.children) as HTMLElement[]

    const getNearestIndex = () => {
      const cards = getCards()
      if (!cards.length) return 0
      let nearestIndex = 0
      let nearestDistance = Number.POSITIVE_INFINITY
      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestIndex = index
        }
      })
      return nearestIndex
    }

    setCarouselCardCount(getCards().length)

    const intervalId = window.setInterval(() => {
      scrollToCarouselIndex(carouselIndexRef.current + 1)
    }, 5000)

    const onScroll = () => {
      const nextIndex = getNearestIndex()
      carouselIndexRef.current = nextIndex
      setActiveCarouselIndex(nextIndex)
    }

    track.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearInterval(intervalId)
      track.removeEventListener('scroll', onScroll)
    }
  }, [scrollToCarouselIndex])

  const handleCarouselPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const track = carouselRef.current
    if (!track) return
    isPointerDownRef.current = true
    isDraggingRef.current = false
    hasPointerCaptureRef.current = false
    dragStartXRef.current = event.clientX
    scrollStartLeftRef.current = track.scrollLeft
  }

  const handleCarouselPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const track = carouselRef.current
    if (!track || !isPointerDownRef.current) return
    const deltaX = Math.abs(event.clientX - dragStartXRef.current)
    if (deltaX < 6 && !isDraggingRef.current) return
    if (!isDraggingRef.current) {
      isDraggingRef.current = true
      track.setPointerCapture(event.pointerId)
      hasPointerCaptureRef.current = true
      track.style.scrollBehavior = 'auto'
    }
    const walk = dragStartXRef.current - event.clientX
    track.scrollLeft = scrollStartLeftRef.current + walk
  }

  const handleCarouselPointerUp: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const track = carouselRef.current
    if (!track) return
    if (!isPointerDownRef.current) return
    isPointerDownRef.current = false
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    if (hasPointerCaptureRef.current) {
      track.releasePointerCapture(event.pointerId)
      hasPointerCaptureRef.current = false
    }
    track.style.scrollBehavior = 'smooth'
    const cards = Array.from(track.children) as HTMLElement[]
    let clampedIndex = 0
    let nearestDistance = Number.POSITIVE_INFINITY
    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - track.scrollLeft)
      if (distance < nearestDistance) {
        nearestDistance = distance
        clampedIndex = index
      }
    })
    carouselIndexRef.current = clampedIndex
    if (cards[clampedIndex]) {
      track.scrollTo({ left: cards[clampedIndex].offsetLeft, behavior: 'smooth' })
    }
  }

  return (
    <div>
      <section className="hero" style={{ backgroundImage: 'url(/assets/img/bg_image1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* <div className="hero-tag">Since 2026 · Canada's LTC Navigation Platform</div> */}
        <div className="hero-content">
        <h1>Compassionate Long-Term Care</h1>
        <p>
        A home where your loved ones thrive. CareLink connects Canadian families with the information, advocacy, 
        and support they need to navigate long-term care with confidence.
        </p>
        {/* <Link to="/information-hub" className="cta-button">
          Explore Resources
        </Link> */}
        <a href="/information-hub" className="cta-button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
        Explore Our Platform
      </a>
        </div>
      </section>

      <div className="container content-section">
        <h2>Your Trusted Source for LTC Information</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>
          Navigating the world of Long-Term Care can be overwhelming. Our mission is to
          simplify complex healthcare topics and empower you with knowledge to make informed
          decisions for your family.
        </p>

        <div className="topic-carousel" aria-label="LTC topics carousel">
          <button
            type="button"
            className="topic-carousel-control topic-carousel-control-prev"
            onClick={() => scrollToCarouselIndex(activeCarouselIndex - 1)}
            aria-label="Previous topics"
          >
            ‹
          </button>
          <div
            className="topic-carousel-track"
            ref={carouselRef}
            onPointerDown={handleCarouselPointerDown}
            onPointerMove={handleCarouselPointerMove}
            onPointerUp={handleCarouselPointerUp}
            onPointerLeave={handleCarouselPointerUp}
          >
            <div className="topic-card">
              <Link to="/medical-tests">
                <div
                  className="topic-card-visual"
                  style={{ backgroundImage: 'url(/assets/img/medical_test.png)' }}
                  aria-hidden="true"
                >
                  <div className="topic-card-content">
                    <h3>Medical Tests</h3>
                    <p>
                      Learn about various medical tests your loved one may undergo, including
                      imaging, diagnostic, blood, and urine tests.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="topic-card">
              <Link to="/equipment">
                <div
                  className="topic-card-visual"
                  style={{ backgroundImage: 'url(/assets/img/medical_equipment.png)' }}
                  aria-hidden="true"
                >
                  <div className="topic-card-content">
                    <h3>Medical Equipments</h3>
                    <p>
                      Discover common equipment used in LTC facilities to monitor and support
                      residents' health and wellbeing.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="topic-card">
              <Link to="/medical-specialists">
                <div
                  className="topic-card-visual"
                  style={{ backgroundImage: 'url(/assets/img/medical_specialist.png)' }}
                  aria-hidden="true"
                >
                  <div className="topic-card-content">
                    <h3>Medical Specialists</h3>
                    <p>
                      Understand the roles of different healthcare professionals involved in
                      your loved one's care journey.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="topic-card">
              <Link to="/accessibility-equipment">
                <div
                  className="topic-card-visual"
                  style={{ backgroundImage: 'url(/assets/img/accessibility_equipments.png)' }}
                  aria-hidden="true"
                >
                  <div className="topic-card-content">
                    <h3>Accessibility Equipments</h3>
                    <p>
                      Explore aids and devices designed to enhance mobility and independence
                      for elderly residents.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="topic-card">
              <Link to="/diet">
                <div
                  className="topic-card-visual"
                  style={{ backgroundImage: 'url(/assets/img/nutrition_diets.png)' }}
                  aria-hidden="true"
                >
                  <div className="topic-card-content">
                    <h3> Diet & Nutrition</h3>
                    <p>
                      Find information about special diets, meal plans, and nutritional
                      guidelines for older adults.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <button
            type="button"
            className="topic-carousel-control topic-carousel-control-next"
            onClick={() => scrollToCarouselIndex(activeCarouselIndex + 1)}
            aria-label="Next topics"
          >
            ›
          </button>
          {carouselCardCount > 1 && (
            <div className="topic-carousel-dots" role="tablist" aria-label="Carousel pagination">
              {Array.from({ length: carouselCardCount }).map((_, index) => (
                <button
                  key={`topic-dot-${index}`}
                  type="button"
                  className={`topic-carousel-dot${index === activeCarouselIndex ? ' is-active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeCarouselIndex}
                  onClick={() => scrollToCarouselIndex(index)}
                />
              ))}
            </div>
          )}
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

            <div className="chatbot-quick-prompts">
              <span>Quick prompts:</span>
              <div className="prompt-buttons">
                {quickPrompts.map((prompt) => (
                  <button key={prompt} onClick={() => handleSend(prompt)} disabled={isLoading}>
                    {prompt}
                  </button>
                ))}
              </div>
              {chatError && lastSendWasTyped && (
                <div className="chatbot-error-under-prompts" role="status" aria-live="polite">
                  {chatError}
                </div>
              )}
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
