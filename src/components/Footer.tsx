import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            GAFF<span>Electrics</span>
          </Link>
          <p className={styles.description}>
            Professional, licensed, and reliable electrical services for residential and commercial properties. Available 24/7 for emergencies.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/warranty">Warranty</Link></li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h3>Support</h3>
          <ul>
            <li><Link href="/quote">Request a Quote</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact Info</h3>
          <p>📞 1800-555-0199</p>
          <p>📧 info@gaffelectrics.com.au</p>
          <p>📍 123 Spark Street, Current City, 4567</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gaff Electrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
