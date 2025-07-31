import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <strong>Email:</strong> <a href="mailto:vladislavstoimenov29@gmail.com">vladislavstoimenov29@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+359123456789">+359 123 456 789</a>
            </p>
            <p>
              <strong>Instagram:</strong> <a href="https://instagram.com/vladislavstoimenov" target="_blank" rel="noopener noreferrer">@vladislavstoimenov</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 