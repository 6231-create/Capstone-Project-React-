import PageBanner  from "../components/common/PageBanner";
import Accordion   from "../components/common/Accordion";
import ContactCards from "../components/contact/ContactCards";
import ContactForm  from "../components/contact/ContactForm";
import AgentsGrid   from "../components/contact/AgentsGrid";
import { CONTACT_FAQS } from "../data/tripDetails";

const BANNER_IMG = "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Home", link: true }, { label: "Contact Us" }]}
        img={BANNER_IMG}
      />

      <ContactCards />

      {/* Form + Map */}
      <section className="contact-main-section">
        <div className="container contact-main-grid">

          <ContactForm />

          <div className="contact-map-wrap">
            <span className="section-tag">| Our Location</span>
            <h2>Find <strong>Our Office</strong></h2>
            <div className="map-big">
              <iframe
                src="https://maps.google.com/maps?q=Miami,Florida&z=13&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, borderRadius: 12 }}
                loading="lazy"
                title="Miami Office Map"
              ></iframe>
            </div>
            <AgentsGrid />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">| FAQ</span>
            <h2>Frequently Asked <strong>Questions</strong></h2>
          </div>
          <div className="faq-grid">
            <Accordion items={CONTACT_FAQS.slice(0, 4)} />
            <Accordion items={CONTACT_FAQS.slice(4)} />
          </div>
        </div>
      </section>
    </>
  );
}
