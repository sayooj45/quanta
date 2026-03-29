import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Synopsis", path: "/synopsis" },
    { name: "Relevance", path: "/relevance" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-white/10 px-6 h-16 flex items-center justify-between font-font2">
      {/* LOGO */}
      <div className="text-white font-playfair text-lg">
        ESG <span className="text-primary">Paradox</span>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition ${
              location.pathname === link.path ? "text-primary" : "text-white/70"
            } hover:text-primary`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* MOBILE ICON */}
      <div className="md:hidden text-white">
        {open ? (
          <X size={24} onClick={() => setOpen(false)} />
        ) : (
          <Menu size={24} onClick={() => setOpen(true)} />
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-16 left-0 w-full bg-black border-b border-white/10 md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-6 text-sm uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white/70"
              } hover:text-primary`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
