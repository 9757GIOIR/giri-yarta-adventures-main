import posterMountains from "@/assets/poster-mountains.jpg";
import posterBeach from "@/assets/poster-beach.jpg";
import posterTemple from "@/assets/poster-temple.jpg";
import posterTirupati from "@/assets/poster-tirupati.jpg";

const posters = [
  {
    image: posterTirupati,
    title: "Tirupati Balaji",
    subtitle: "Divine Pilgrimage",
    alt: "Golden gopuram of Tirumala Venkateswara Temple in Tirupati",
  },
  {
    image: posterMountains,
    title: "Manali Mountains",
    subtitle: "Adventure Awaits",
    alt: "Snow-capped mountains of Manali with pine forests",
  },
  {
    image: posterBeach,
    title: "Tropical Paradise",
    subtitle: "Beach Getaways",
    alt: "Tropical beach with turquoise water and palm trees",
  },
  {
    image: posterTemple,
    title: "Heritage Tours",
    subtitle: "Cultural Journeys",
    alt: "Ancient temple ruins surrounded by lush jungle",
  },
];

const PosterSection = () => {
  return (
    <section className="px-4 py-14 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="section-kicker">Handpicked Destinations</p>
          <h2 className="page-title">Travel Inspirations</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posters.map((poster) => (
            <article key={poster.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={poster.image}
                  alt={poster.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-primary-foreground/80">{poster.subtitle}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-primary-foreground">{poster.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
