'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
        >
          <button 
            className={styles.question} 
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
          </button>
          <div className={styles.answerWrapper} style={{ maxHeight: openIndex === index ? '500px' : '0' }}>
            <div className={styles.answer}>
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
