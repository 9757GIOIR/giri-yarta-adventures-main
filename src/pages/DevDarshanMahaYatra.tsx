import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BookingFormSection from "@/components/BookingFormSection";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

type StateSection = {
  title: string;
  places: string[];
};

const routeSections: StateSection[] = [
  {
    title: "Maharashtra",
    places: ["Tuljapur", "Akkalkot"],
  },
  {
    title: "Karnatak",
    places: ["Gabgapur", "Gokarna", "Murudeswar", "Maisure", "Chamunda Devi", "Vrundavan Gardan", "Madurai"],
  },
  {
    title: "Tamilnadu",
    places: ["Rameshwaram", "Kanyakumari", "Tirchi", "Visnukanchi", "Shivkanchi"],
  },
  {
    title: "Andrapradesh",
    places: ["Shri Kalhasti", "Mangapatnam", "Tirupati", "Govinda", "Shikhreswar", "Shri shailym malkarjun"],
  },
  {
    title: "Telangana",
    places: ["Patalganga"],
  },
];

const DevDarshanMahaYatra = () => {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="container mx-auto max-w-6xl">
          <section className="section-shell">
            <Link to="/#tours" className="mb-5 inline-flex items-center text-sm text-secondary hover:underline">
              Back to all tours
            </Link>

            <p className="section-kicker">Tour Packages</p>
            <h1 className="page-title">Balaji - Rameshwaram - Kanyakumari</h1>
            <p className="subtle-copy max-w-3xl">
              15-day devotional pilgrimage tour covering Balaji, Rameshwaram, and Kanyakumari. Advance amount is Rs.10,000.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="metric-chip">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Balaji - Rameshwaram - Kanyakumari</span>
              </div>
              <div className="metric-chip">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Starts: 15/03/2026</span>
              </div>
              <div className="metric-chip">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Travel Days: 15</span>
              </div>
              <div className="metric-chip">
                <Users className="h-4 w-4 text-secondary" />
                <span>Bus Type: AC sleeper coach</span>
              </div>
            </div>
          </section>

          <section className="mt-6 space-y-6">
            <div className="section-shell">
              <p className="section-kicker">Tirth Sthale</p>
              <h2 className="section-title mb-2">
                {"\u0924\u0940\u0930\u094d\u0925 \u0938\u094d\u0925\u0933\u0947 \u0906\u0923\u093f \u092a\u094d\u0930\u0947\u0915\u094d\u0937\u0923\u0940\u092f \u0938\u094d\u0925\u0933\u0947"}
              </h2>
              <p className="text-sm text-muted-foreground">Tirth Sthale ani Prekshaniy Sthale</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {routeSections.map((section) => (
                <article key={section.title} className="route-section">
                  <h3 className="mb-4 border-b border-border pb-2 font-display text-2xl font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.places.map((place, index) => (
                      <li key={`${section.title}-${place}`} className="route-item">
                        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-secondary/15 text-xs font-semibold text-secondary">
                          {index + 1}
                        </span>
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="section-shell">
              <h3 className="section-title mb-2">Return to Home</h3>
              <p className="mb-3 text-muted-foreground">Suggested return route for smooth travel completion:</p>
              <div className="flex flex-wrap gap-2">
                {["Patalganga", "Nanded", "Home"].map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-border bg-muted/35 px-3 py-1 text-sm text-foreground"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </section>

            <BookingFormSection tourName="Balaji - Rameshwaram - Kanyakumari" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevDarshanMahaYatra;
