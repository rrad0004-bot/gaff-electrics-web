import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          GAFF<span>Electrics</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/warranty">Warranty</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.navActions}>
          <a href="tel:18005550199" className={styles.phoneLink}>
            📞 1800-555-0199
          </a>
          <Link href="/quote" className="btn-primary">
            Request Quote
          </Link>
        </div>
        
        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
}
