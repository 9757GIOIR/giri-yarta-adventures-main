import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BookingFormSection from "@/components/BookingFormSection";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const routePoints = [
  "Omkareswar",
  "Rajghat praksh sorti",
  "Somnath",
  "Girnar",
  "Dwrka",
  "Betdwarka nageshwar gopitalav",
  "Sardar sarowar",
  "Emleswar",
  "Mithhi talav",
  "Bharuch",
  "Nilkanteswar",
  "Garudewar",
  "Maheswar",
  "Nemavar",
  "Bramhalghat",
  "Jabalpur",
  "Amarkantak",
  "Hoshngabad",
  "Khandwa",
  "Omkareswar",
  "Shegaon",
];

const MaNarmadaParikrama = () => {
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
            <h1 className="page-title">Ma Narmada Parikrama-Ek Dham Dwarka Yatra</h1>
            <p className="subtle-copy max-w-3xl">
              Sacred Narmada route covering holy temple points and pilgrimage places from Omkareswar to Shegaon.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="metric-chip">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Maharashtra - Madhya Pradesh - Gujarat</span>
              </div>
              <div className="metric-chip">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Starts: 05/05/2026</span>
              </div>
              <div className="metric-chip">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Travel Days: 16-17</span>
              </div>
              <div className="metric-chip">
                <Users className="h-4 w-4 text-secondary" />
                <span>Bus Type: AC sleeper coach</span>
              </div>
              <div className="metric-chip">
                <Users className="h-4 w-4 text-secondary" />
                <span>Ticket: 25500/person</span>
              </div>
              <div className="metric-chip">
                <Users className="h-4 w-4 text-secondary" />
                <span>Advance: 10000</span>
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

            <article className="route-section">
              <h3 className="mb-4 border-b border-border pb-2 font-display text-2xl font-semibold text-foreground">
                Route Points
              </h3>
              <ul className="grid gap-2.5 md:grid-cols-2">
                {routePoints.map((point, index) => (
                  <li key={`${point}-${index}`} className="route-item">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-secondary/15 text-xs font-semibold text-secondary">
                      {index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <section className="section-shell">
              <h3 className="section-title mb-2">Return to Home</h3>
              <p className="mb-3 text-muted-foreground">Suggested return route for smooth travel completion:</p>
              <div className="flex flex-wrap gap-2">
                {["Shegaon", "Nanded", "Home"].map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-border bg-muted/35 px-3 py-1 text-sm text-foreground"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </section>

            <BookingFormSection tourName="Ma Narmada Parikrama-Ek Dham Dwarka Yatra" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MaNarmadaParikrama;
