import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Our Tours", to: "/tours" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer
      className="border-t border-white/25 px-4 py-14 text-white"
      style={{ backgroundColor: "hsl(205 76% 26% / 0.62)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 bg-white/10">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <div>
                <span className="font-display text-xl font-semibold">GIRI YATRA</span>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/90">Tours & Travels</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/85">
              Trusted travel support for devotional and cultural journeys across India with planned routes and reliable service.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <span>Bhagwan Giri: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <span>Abhishek Giri: +91 72767 13116</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                <span>shrigiritours@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <span>Nanded, Parbhani, Latur</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Instagram className="h-5 w-5 cursor-pointer text-white/85 transition-colors hover:text-white" />
                <Facebook className="h-5 w-5 cursor-pointer text-white/85 transition-colors hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/25 pt-6 text-center">
          <p className="text-xs text-white/80">© 2026 Giri Yarta Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
