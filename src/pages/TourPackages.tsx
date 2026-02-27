import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingFormSection from "@/components/BookingFormSection";
import { tours } from "@/data/tours";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

type PilgrimageSection = {
  title: string;
  places: string[];
};

const pilgrimageRoute: PilgrimageSection[] = [
  {
    title: "Maharashtra",
    places: ["Aundha Nagnath", "Shegaon"],
  },
  {
    title: "Madhya Pradesh",
    places: ["Omkareshwar", "Ujjain"],
  },
  {
    title: "Uttar Pradesh",
    places: ["Agra", "Gokul", "Mathura", "Vrundavan", "Jay Gurudev Mandir"],
  },
  {
    title: "Uttaranchal",
    places: [
      "Haridwar",
      "Mansadevi",
      "Hrushikesh",
      "Ramzula",
      "Lakshmanzula",
      "Uttarkashi",
      "Gangotri",
      "Yomontri",
      "Gouri Kund",
      "Kedarnath",
      "Guptkashi",
      "Badrinath",
      "Gorkhpur",
    ],
  },
  {
    title: "Nepal",
    places: ["Sonali Border", "Pashupatinath"],
  },
  {
    title: "Madhya Pradesh (Return Side)",
    places: ["Maiyar"],
  },
];

const TourPackages = () => {
  const { tourId } = useParams();
  const tour = tours.find((item) => item.id === Number(tourId));

  if (!tour) {
    return (
      <div className="page-shell">
        <Header />
        <main className="page-main">
          <div className="container mx-auto max-w-4xl">
            <section className="section-shell text-center">
              <h1 className="page-title">Tour not found</h1>
              <p className="subtle-copy mb-6">The selected tour does not exist. Please choose a valid package.</p>
              <Link to="/#tours" className="cta-button">
                Back to Tours
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            <h1 className="page-title">{tour.title}</h1>
            <p className="subtle-copy max-w-3xl">{tour.overview}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="metric-chip">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>{tour.destination}</span>
              </div>
              <div className="metric-chip">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>{tour.date}</span>
              </div>
              <div className="metric-chip">
                <Clock className="h-4 w-4 text-secondary" />
                <span>{tour.id === 1 ? "Travel Days: 15" : tour.duration}</span>
              </div>
              {tour.id !== 1 ? (
                <div className="metric-chip">
                  <Users className="h-4 w-4 text-secondary" />
                  <span>{tour.spots} seats left</span>
                </div>
              ) : (
                <div className="metric-chip">
                  <Users className="h-4 w-4 text-secondary" />
                  <span>Bus Type: AC sleeper coach</span>
                </div>
              )}
            </div>
          </section>

          {tour.id === 1 ? (
            <section className="mt-6 space-y-6">
              <div className="section-shell">
                <p className="section-kicker">Tirth Sthale</p>
                <h2 className="section-title mb-2">
                  {"\u0924\u0940\u0930\u094d\u0925 \u0938\u094d\u0925\u0933\u0947 \u0906\u0923\u093f \u092a\u094d\u0930\u0947\u0915\u094d\u0937\u0923\u0940\u092f \u0938\u094d\u0925\u0933\u0947"}
                </h2>
                <p className="text-sm text-muted-foreground">Tirth Sthale ani Prekshaniy Sthale</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {pilgrimageRoute.map((section) => (
                  <article key={section.title} className="route-section">
                    <h3 className="mb-4 border-b border-border pb-2 font-display text-2xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.places.map((place, index) => (
                        <li key={place} className="route-item">
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

              <div className="section-shell">
                <h3 className="section-title mb-2">Return to Home</h3>
                <p className="mb-3 text-muted-foreground">Suggested return route for smooth travel completion:</p>
                <div className="flex flex-wrap gap-2">
                  {["Maiyar", "Jabalpur", "Nagpur", "Nanded", "Home"].map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-border bg-muted/35 px-3 py-1 text-sm text-foreground"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <BookingFormSection tourName={tour.title} />
            </section>
          ) : (
            <section className="mt-6 grid gap-6 md:grid-cols-3">
              {tour.packages.map((tourPackage) => (
                <article key={tourPackage.id} className="tour-card">
                  <div className="mb-5 border-b border-border pb-4">
                    <h2 className="font-display text-2xl font-semibold text-card-foreground">{tourPackage.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{tourPackage.idealFor}</p>
                  </div>

                  <div className="mb-5 space-y-1.5 text-sm text-muted-foreground">
                    <p>
                      Duration: <span className="font-medium text-foreground">{tourPackage.duration}</span>
                    </p>
                    <p>
                      Stay: <span className="font-medium text-foreground">{tourPackage.stay}</span>
                    </p>
                    <p>
                      Starting from <span className="font-semibold text-foreground">Rs.{tourPackage.price}</span> / person
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">Includes</h3>
                    <ul className="space-y-2">
                      {tourPackage.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="cta-button w-full">Book This Package</button>
                </article>
              ))}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TourPackages;
