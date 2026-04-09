import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Sparking Brilliance in Every <span>Connection</span>
            </h1>
            <p className={styles.heroDescription}>
              Gaff Electrics provides top-tier residential, commercial, and emergency electrical services. Licensed, insured, and ready to light up your space.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/hero.png" 
              alt="Professional Electrician" 
              width={600} 
              height={500} 
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageBackdrop}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className={styles.servicesGrid}>
            {[
              { title: "Residential", desc: "Upgrades, rewiring, and smart home installations.", icon: "🏠" },
              { title: "Commercial", desc: "Fit-outs, maintenance, and 3-phase power solutions.", icon: "🏢" },
              { title: "Emergency", desc: "24/7 rapid response for critical electrical faults.", icon: "⚡" },
              { title: "Insurance", desc: "Make-safe works and comprehensive damage reports.", icon: "📝" },
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href={`/services#${service.title.toLowerCase()}`} className={styles.learnMore}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2>Ready to upgrade your electrical systems?</h2>
          <p>Contact us today for a free, no-obligation quote. Our team of certified professionals is standing by.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:18005550199" className={styles.btnOutline}>Call 1800-555-0199</a>
            <Link href="/contact" className="btn-primary">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
