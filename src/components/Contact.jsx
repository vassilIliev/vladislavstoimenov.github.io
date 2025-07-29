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
              <strong>Date of Birth:</strong> July 23, 1996
            </p>
            <p>
              <strong>Location:</strong> Sofia, Bulgaria
            </p>
            
            <div className="languages">
              <h4>Languages</h4>
              <ul>
                <li>Bulgarian (Native)</li>
                <li>English (B2)</li>
                <li>German (B1.1)</li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 