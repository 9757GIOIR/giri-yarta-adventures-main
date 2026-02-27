import Footer from "@/components/Footer";
import Header from "@/components/Header";
import posterTirupati from "@/assets/poster-tirupati.jpg";
import posterTemple from "@/assets/poster-temple.jpg";
import posterMountains from "@/assets/poster-mountains.jpg";
import posterBeach from "@/assets/poster-beach.jpg";
import kashiImage from "@/assets/hero-kashi.jpg";
import somnathImage from "@/assets/hero-somnath.jpg";
import tirupatiImage from "@/assets/hero-tirupati.jpg";
import kedarnathImage from "@/assets/hero-kedarnath.jpg";

const galleryImages = [
  { src: tirupatiImage, alt: "Tirupati Balaji Temple" },
  { src: kashiImage, alt: "Kashi riverfront temple view" },
  { src: kedarnathImage, alt: "Kedarnath temple with mountain background" },
  { src: somnathImage, alt: "Somnath temple coastal view" },
  { src: posterTirupati, alt: "Tirupati temple architecture" },
  { src: posterTemple, alt: "Heritage temple scenery" },
  { src: posterMountains, alt: "Mountain travel destination" },
  { src: posterBeach, alt: "Beach travel destination" },
];

const galleryVideos = [
  {
    title: "Kedarnath Yatra Experience",
    src: "https://www.youtube.com/embed/HNrrkFvS4fo",
  },
  {
    title: "Kashi Ghat and Temple Journey",
    src: "https://www.youtube.com/embed/aP5DK5kV8xQ",
  },
  {
    title: "Rameshwaram Travel Highlights",
    src: "https://www.youtube.com/embed/R0B2ZQk6nNQ",
  },
  {
    title: "Tirupati Darshan Travel Vlog",
    src: "https://www.youtube.com/embed/5A5H6u8P4S0",
  },
];

const Gallery = () => {
  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="container mx-auto max-w-6xl">
          <section className="section-shell">
            <p className="section-kicker">Gallery</p>
            <h1 className="page-title">Travel Images & Videos</h1>
            <p className="subtle-copy max-w-3xl">
              A curated gallery of tour moments, destination highlights, and travel clips from our spiritual journeys.
            </p>
          </section>

          <section className="section-shell mt-6">
            <h2 className="section-title mb-5">Image Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <figure key={image.alt} className="overflow-hidden rounded-xl border border-border bg-muted/20">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </section>

          <section className="section-shell mt-6">
            <h2 className="section-title mb-5">Video Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {galleryVideos.map((video) => (
                <article key={video.title} className="overflow-hidden rounded-xl border border-border bg-muted/20">
                  <iframe
                    className="aspect-video w-full"
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <div className="border-t border-border p-3">
                    <h3 className="text-sm font-semibold text-foreground">{video.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
