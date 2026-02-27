import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const tourHighlights = [
  {
    title: "Pilgrimage Tours",
    description:
      "Well-planned devotional routes including Balaji, Rameshwaram, Kashi, Kedarnath, and other major spiritual destinations.",
  },
  {
    title: "Comfort Travel",
    description:
      "Organized transport, boarding guidance, and day-wise planning to make the journey smooth for families and groups.",
  },
  {
    title: "Trusted Coordination",
    description:
      "On-trip support for darshan schedules, route updates, and basic assistance throughout the tour.",
  },
];

const rules = [
  "Carry a valid photo ID proof for each traveler.",
  "Follow reporting time and departure schedule strictly.",
  "Advance booking amount is non-refundable once seat is confirmed.",
  "Final balance payment must be completed before tour departure.",
  "Keep personal medicines and essentials with you at all times.",
  "Respect local temple rules, dress code, and queue system.",
  "Tour operator may adjust route timing due to weather or safety.",
  "Alcohol, smoking, and disruptive behavior are not allowed during group travel.",
];

const priorities = [
  "Safe and comfortable travel planning",
  "Clear communication before and during the tour",
  "Transparent pricing with no hidden charges",
  "Timely support for families and senior travelers",
  "Reliable booking and follow-up service",
  "Focus on customer satisfaction in every journey",
];

const About = () => {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="container mx-auto max-w-6xl">
          <section className="section-shell">
            <p className="section-kicker">About Us</p>
            <h1 className="page-title">About Shri Giri Yatra Tours & Travels</h1>
            <p className="subtle-copy max-w-3xl">
              We organize devotional and cultural tours with a strong focus on safety, planning quality, and customer
              satisfaction. Our team supports travelers from booking to return journey.
            </p>
          </section>

          <section className="section-shell mt-6">
            <div className="mb-5 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <h2 className="section-title">Tour-Related Services</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {tourHighlights.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-muted/30 p-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-shell mt-6">
            <div className="mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <h2 className="section-title">Rules & Regulations</h2>
            </div>
            <ul className="space-y-2.5">
              {rules.map((rule, index) => (
                <li key={rule} className="route-item">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-secondary/15 text-xs font-semibold text-secondary">
                    {index + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section-shell mt-6">
            <div className="mb-5 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-secondary" />
              <h2 className="section-title">Our Priority: Customer Satisfaction</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {priorities.map((item) => (
                <div key={item} className="metric-chip">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/contact" className="cta-button">
                Contact Our Team
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
