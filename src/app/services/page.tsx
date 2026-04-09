import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
  title: 'Our Services | Gaff Electrics',
  description: 'Comprehensive electrical services including Residential, Commercial, Emergency, and Insurance works.',
};

export default function ServicesPage() {
  const services = [
    {
      id: "residential",
      title: "Residential Electrical",
      icon: "🏠",
      description: "Keep your home safe, efficient, and beautifully lit with our comprehensive residential services.",
      offerings: [
        "Complete Home Rewiring",
        "Switchboard Upgrades",
        "LED Lighting Design & Installation",
        "Ceiling Fans and Smoke Alarms",
        "Smart Home Automation",
        "Safety Inspections"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Electrical",
      icon: "🏢",
      description: "Minimize downtime and ensure your business operates smoothly with our commercial solutions.",
      offerings: [
        "Office Fit-Outs and Refurbishments",
        "3-Phase Power Installations",
        "Data and Communications Cabling",
        "Emergency Exit Lighting",
        "Test and Tag Services",
        "Ongoing Maintenance Contracts"
      ]
    },
    {
      id: "emergency",
      title: "24/7 Emergency",
      icon: "⚡",
      description: "Electrical faults don't wait for business hours. We offer rapid response emergency services.",
      offerings: [
        "Power Outages and Faults",
        "Sparking or Blown Fuses",
        "Storm Damage Repairs",
        "Hot Water System Electrical Faults",
        "Make-Safe Operations"
      ]
    },
    {
      id: "insurance",
      title: "Insurance & Make-Safe",
      icon: "📝",
      description: "We work directly with insurance companies and homeowners to quickly resolve claims and secure properties.",
      offerings: [
        "Insurance Assessment Reports",
        "Water & Fire Damage Make-Safe",
        "Vandalism Restoration",
        "Detailed Quoting for Insurers",
        "Guaranteed Compliant Works"
      ]
    }
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Expert Solutions for Every Electrical Need</p>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.servicesContainer}`}>
          {services.map((service, index) => (
            <div key={index} id={service.id} className={styles.serviceBlock}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h2>{service.title}</h2>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.offeringList}>
                {service.offerings.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
              <Link href="/quote" className={`btn-primary ${styles.serviceBtn}`}>
                Request Service
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
