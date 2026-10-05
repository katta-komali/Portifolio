import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading reveal">
          <p className="section-kicker">GET IN TOUCH</p>
          <h2>Let&apos;s build <span>something useful.</span></h2>
          <p>
            Have an opportunity, project idea, or simply want to connect?
            Reach out directly using the contact details below.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <a className="contact-item contact-email-item" href="mailto:komali.katta2004@gmail.com">
              <span className="contact-label">EMAIL</span>
              <strong>komali.katta2004@gmail.com</strong>
            </a>
            <a className="contact-item" href="tel:+919014958295">
              <span className="contact-label">PHONE</span>
              <strong>+91 90149 58295</strong>
            </a>
            <div className="contact-item">
              <span className="contact-label">LOCATION</span>
              <strong>Hyderabad, India</strong>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/katta-komali" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/komali-katta-50b6b8320" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
