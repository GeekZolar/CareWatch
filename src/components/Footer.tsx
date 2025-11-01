import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="social-links">
            <a href="https://facebook.com/enactus.ibu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span><img src="assets/svg/FacebookIcon.svg" alt="Facebook" width={20} height={20} /></span>
            </a>
            <a href="https://linkedin.com/company/enactus-ibu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span><img src="assets/svg/LinkedInIcon.svg" alt="LinkedIn" width={20} height={20} /></span>
            </a>
            <a href="https://x.com/enactus_ibu" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <span><img src="assets/svg/TwitterIcon.svg" alt="X" width={20} height={20} /></span>
            </a>
            <a href="https://instagram.com/enactus.ibu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span><img src="assets/svg/InstagramIcon.svg" alt="Instagram" width={20} height={20} /></span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>© 2025 LTC Education Hub. All rights reserved.</p>
          <p><a href="/privacy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

