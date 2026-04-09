import styles from './quote.module.css';

export const metadata = {
  title: 'Request a Quote | Gaff Electrics',
  description: 'Get a free quote for your electrical project.',
};

export default function QuotePage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Request a Quote</h1>
          <p>Tell us about your project</p>
        </div>
      </div>
      <section className={`section ${styles.quoteSection}`}>
        <div className="container">
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required />
                </div>
              </div>
              
              <div className={styles.grid2}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="serviceType">Service Required</label>
                <select id="serviceType" required>
                  <option value="">Select a service type...</option>
                  <option value="residential">Residential Setup / Repair</option>
                  <option value="commercial">Commercial Fit-out / Maintenance</option>
                  <option value="emergency">Emergency Call-Out</option>
                  <option value="insurance">Insurance works Make-Safe</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="details">Project Details</label>
                <textarea id="details" rows={5} placeholder="Please provide some details about the job..." required></textarea>
              </div>

              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
