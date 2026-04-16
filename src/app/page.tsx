"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Reliable Electrical Solutions <span>When You Need Them Most</span>
            </h1>
            <p className={styles.heroDescription}>
              Professional, guaranteed electrical services across western and northern Melbourne. Fast response, no hidden fees, and expert workmanship.
            </p>
            <div className={styles.heroActions}>
              <Link href="#contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:0402255595" className="btn-secondary">
                Call Alan Now
              </a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/hero.png"
              alt="Professional Local Electrician"
              width={600}
              height={500}
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageBackdrop}></div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <motion.section
        className={styles.trustSignals}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`container ${styles.trustGrid}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div
            className={styles.trustItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className={styles.trustIcon}>✓</span> Licensed & Insured
          </motion.div>
          <motion.div
            className={styles.trustItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className={styles.trustIcon}>⚡</span> Fast Response Time
          </motion.div>
          <motion.div
            className={styles.trustItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className={styles.trustIcon}>💰</span> Free, No-Obligation Quotes
          </motion.div>
          <motion.div
            className={styles.trustItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className={styles.trustIcon}>🏅</span> Experienced Local Electricians
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className={styles.servicesGrid}>
            {[
              {
                title: "Residential Electrical",
                desc: "Keep your home safe and modern. From house re-wiring and safety switches to ceiling fans and downlight installations.",
                icon: "🏠"
              },
              {
                title: "Commercial Fit-outs",
                desc: "Minimize downtime and enhance productivity with reliable electrical fault finding, testing, tagging, and complex installations.",
                icon: "🏢"
              },
              {
                title: "Emergency & Insurance",
                desc: "Rapid response when you need it most. We provide expert make-safe works and detailed electrical damage reports for insurance.",
                icon: "🚨"
              },
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href={`/services`} className="btn-secondary" style={{ width: '100%', padding: '0.75rem' }}>
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="/team.png"
              alt="Gaff Electrics Team"
              width={600}
              height={400}
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.aboutContent}>
            <h2>Quality Service with Great Attention to Detail</h2>
            <p>
              At Gaff Electrics, we service all your electrical needs across the western and northern suburbs of Melbourne. With a focus on safety, efficiency, and professionalism, we ensure every job—big or small—is done right the first time.
            </p>
            <p>
              Our team is highly experienced and always professional. We offer a full range of services including split air conditioners, home theatre setup, security lighting, and thorough home inspections with all work fully guaranteed.
            </p>
            <Link href="/about" className="btn-primary" style={{ marginTop: '1rem' }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`section ${styles.whyUsSection}`}>
        <div className="container">
          <h2 className="section-title">Why Melbourne Chooses Us</h2>
          <div className={styles.featuresGrid}>
            {[
              { icon: '🛡️', title: 'Workmanship Guarantee', desc: 'All our work is guaranteed, giving you peace of mind long after we leave.' },
              { icon: '⏱️', title: 'On-Time Arrival', desc: 'We value your time. Our electricians arrive on schedule and complete the job efficiently.' },
              { icon: '💡', title: 'Upfront Pricing', desc: 'No hidden costs. We provide clear, accurate quotes before any work begins.' },
              { icon: '👨‍🔧', title: 'Expert Team', desc: 'Highly trained professionals who stay updated with the latest safety standards.' }
            ].map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <div className={styles.testimonialsGrid}>
            {[
              { name: "Sarah M.", text: "Alan was fantastic! Installed split systems and updated all our downlights. Highly professional and left the place spotless." },
              { name: "John D.", text: "Had an electrical fault in my shop on a Friday evening. Gaff Electrics arrived quickly, diagnosed it, and saved us from major downtime." },
              { name: "Elena R.", text: "Honest, reliable, and reasonably priced. It's hard to find good tradesmen these days, but these guys are the real deal." }
            ].map((item, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testimonialText}>&quot;{item.text}&quot;</p>
                <div className={styles.testimonialAuthor}>- {item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactInfo}>
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free quote. We will respond as quickly as possible to discuss your electrical needs.</p>

            <div className={styles.contactDetails}>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>📞</div>
                <a href="tel:0402255595">Alan - 0402 255 595</a>
              </div>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>✉️</div>
                <a href="mailto:alan@gaffelectrics.com.au">alan@gaffelectrics.com.au</a>
              </div>
              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>📍</div>
                <span>PO. Box 3546, Caroline Springs 3023<br />Servicing Western & Northern Melbourne</span>
              </div>
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email Address" required />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" placeholder="Your Phone Number" required />
              </div>
              <div className={styles.formGroup}>
                <textarea rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Request My Free Quote</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
