import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white px-6 md:px-12 pt-12 pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-playfair font-semibold">
              ESG <span className="text-primary">Quanta</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-sm text-sm leading-relaxed">
              Building sustainable insights and innovative ESG solutions for a
              better future.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="flex items-center gap-3 text-white/70 mb-3">
              <Mail size={16} />
              <span>alexphilip@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-white/70">
              <Phone size={16} />
              <span> +91 8547 823809</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center text-white/40 text-sm">
          <p>
            © {new Date().getFullYear()} www.esgquanta.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
