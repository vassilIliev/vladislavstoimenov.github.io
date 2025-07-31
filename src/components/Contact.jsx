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
              <strong>Phone:</strong> <a href="tel:+359899948177">+359 899 948 177</a>
            </p>
            <p>
              <strong>Location:</strong> Sofia, Bulgaria
            </p>
            <p>
              <strong>Instagram:</strong> <a href="https://instagram.com/vldslvstmnv" target="_blank" rel="noopener noreferrer">@vldslvstmnv</a>
            </p>
            <p>
              <strong>Facebook:</strong> <a href="https://facebook.com/vladislav.stoimenov" target="_blank" rel="noopener noreferrer">Vladislav Stoimenov</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 