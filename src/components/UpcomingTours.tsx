import { Link } from "react-router-dom";
import { Calendar, Clock3, IndianRupee, MapPin } from "lucide-react";
import { devDarshanPackages } from "@/data/devDarshanPackages";

const UpcomingTours = () => {
  return (
    <section id="tours" className="px-4 py-14 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="section-kicker">Dev Darshan Tours</p>
          <h2 className="page-title">Upcoming Tours</h2>
          <p className="subtle-copy mx-auto max-w-2xl">
            Explore upcoming departures and open any package for full itinerary details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {devDarshanPackages.map((pkg) => (
            <article key={pkg.id} className="tour-card">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-border pb-4">
                <h3 className="font-display text-2xl font-semibold text-card-foreground">{pkg.title}</h3>
                <span className="rounded-full border border-border bg-muted/45 px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  {pkg.badge}
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                  <span className="text-sm">{pkg.route}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock3 className="h-4 w-4 text-secondary" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Starts: {pkg.startDate}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <IndianRupee className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Rs.{pkg.price}/person</span>
                </div>
              </div>

              <div className="mt-5">
                <Link to={pkg.to} className="cta-button w-full">
                  Open Full Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTours;
