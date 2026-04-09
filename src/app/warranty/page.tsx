import Link from 'next/link';
import styles from './warranty.module.css';

export const metadata = {
  title: 'Our Warranty | Gaff Electrics',
  description: 'Learn about our lifetime workmanship guarantee and parts warranties.',
};

export default function WarrantyPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Our Guarantee</h1>
          <p>Peace of Mind with Every Job</p>
        </div>
      </div>
      <section className={`section ${styles.warrantySection}`}>
        <div className="container">
          <div className={styles.warrantyBox}>
            <div className={styles.badge}>LIFETIME WORKMANSHIP</div>
            <h2>We stand by our work</h2>
            <p>
              At Gaff Electrics, we believe in doing it right the first time. That&apos;s why we offer a <strong>Lifetime Workmanship Guarantee</strong> on all electrical installations and repairs performed by our team.
            </p>
            <p>
              If there&apos;s ever a defect in our workmanship, we will make it right at no additional cost to you.
            </p>
            <h3>Parts and Materials</h3>
            <p>
              We only use high-quality, approved parts and materials from trusted manufacturers. All parts supplied by us carry their full manufacturer&apos;s warranty, which typically ranges from 1 to 5 years depending on the product.
            </p>
            <div className={styles.action}>
              <Link href="/contact" className="btn-primary">Got questions? Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
