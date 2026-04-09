import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Us | Gaff Electrics',
  description: 'Get in touch with Gaff Electrics for all your electrical needs.',
};

export default function ContactPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;re here to help, 24/7</p>
        </div>
      </div>
      <section className={`section ${styles.contactSection}`}>
        <div className={`container ${styles.contactGrid}`}>
          
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p className={styles.subtitle}>Our friendly team is always ready to answer your questions or dispatch an electrician for your needs.</p>
            
            <div className={styles.infoBlock}>
              <h3>📞 Call Us</h3>
              <p>For general inquiries or emergency call-outs:</p>
              <a href="tel:18005550199" className={styles.infoLink}>1800-555-0199</a>
            </div>

            <div className={styles.infoBlock}>
              <h3>📧 Email Us</h3>
              <a href="mailto:info@gaffelectrics.com.au" className={styles.infoLink}>info@gaffelectrics.com.au</a>
            </div>

            <div className={styles.infoBlock}>
              <h3>📍 Location</h3>
              <p>123 Spark Street, Current City, 4567</p>
              <p>Serving the greater metropolitan area.</p>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} required></textarea>
              </div>
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
