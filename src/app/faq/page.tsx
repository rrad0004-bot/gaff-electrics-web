import FaqAccordion from '@/components/FaqAccordion';
import styles from './faq.module.css';

export const metadata = {
  title: 'FAQ | Gaff Electrics',
  description: 'Frequently asked questions about our electrical services.',
};

export default function FaqPage() {
  const faqs = [
    { question: "Do you offer free quotes?", answer: "Yes, we offer free, no-obligation quotes for all residential and commercial jobs. Simply fill out our Request a Quote form or give us a call." },
    { question: "Are you fully licensed and insured?", answer: "Absolutely. We hold a valid electrical contractor's license and maintain comprehensive liability insurance for your peace of mind." },
    { question: "Do you provide emergency services?", answer: "Yes, we provide 24/7 emergency electrical services. We aim to respond within the hour to urgent calls." },
    { question: "Do you issue safety certificates?", answer: "Yes, upon completion of our work, a Certificate of Compliance for Electrical Work (CCEW) is provided as required by law." },
    { question: "What areas do you service?", answer: "We service the greater metropolitan area and surrounding suburbs. Please contact us to see if we coverage your specific location." }
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services.</p>
        </div>
      </div>
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqWrapper}>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
