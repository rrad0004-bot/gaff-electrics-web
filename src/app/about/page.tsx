import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us | Gaff Electrics',
  description: 'Learn more about Gaff Electrics and our team of licensed professional electricians.',
};

export default function AboutPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>About Us</h1>
          <p>Your Trusted Local Electricians</p>
        </div>
      </div>

      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutContent}>
            <h2>Our Story</h2>
            <p>
              Founded with the goal of bringing safety, efficiency, and reliability to homes and businesses, Gaff Electrics has grown into a trusted name in the electrical industry. Our experienced team handles everything from minor residential repairs to large-scale commercial fit-outs.
            </p>
            <p>
              We believe in honest pricing, clear communication, and work that meets the highest safety standards. Your satisfaction and safety are our top priorities.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
          <div className={styles.aboutImageWrapper}>
            <Image 
              src="/team.png" 
              alt="Gaff Electrics Team" 
              width={600} 
              height={500} 
              className={styles.aboutImage}
            />
            <div className={styles.imageBackdrop}></div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className={styles.testimonialsGrid}>
            {[
              { text: "Incredible service! They responded to our emergency call at 2 AM and had everything fixed within the hour. Highly recommended.", author: "Sarah Jenkins" },
              { text: "Very professional team. They upgraded our entire office lighting to LED and handled the job with minimal disruption.", author: "Marcus Thorne" },
              { text: "Honest pricing and great work. The electrician explained the issue clearly and gave me options before starting.", author: "Emily Chen" },
            ].map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <p>&quot;{testimonial.text}&quot;</p>
                <h4>- {testimonial.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
