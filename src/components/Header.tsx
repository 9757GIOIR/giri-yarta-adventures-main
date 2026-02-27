import { MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tours", to: "/tours" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/25 backdrop-blur-md"
      style={{ backgroundColor: "hsl(205 76% 26% / 0.62)" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 bg-white/10">
            <MapPin className="h-5 w-5 text-white" />
          </span>
          <div>
            <h1 className="font-display text-xl font-semibold text-white">
              SHRI GIRI YATRA
            </h1>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/90">
              Tours & Travels
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 text-sm text-white/90 md:flex">
          <Phone className="h-4 w-4 text-white" />
          <span>+91 98765 43210</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/30 bg-white/10 p-2 text-white md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/25 bg-transparent px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block rounded-md px-2 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-white/25 pt-3 text-sm text-white/90">
            <Phone className="h-4 w-4 text-white" />
            <span>+91 98765 43210</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
