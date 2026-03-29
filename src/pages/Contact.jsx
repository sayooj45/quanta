import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="grid md:grid-cols-2 min-h-screen pt-16 ">
      {/* LEFT SIDE */}
      <div className="bg-[#0A0F14] text-white px-10 py-16 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-playfair leading-tight font-font1">
            Get In <br />
            <span className="text-red-600">Touch</span>
          </h1>

          <p className="text-white/50 mt-6 max-w-md text-sm leading-relaxed font-font3">
            For speaking engagements, bulk book orders, consulting inquiries, or
            media requests — reach out directly.
          </p>
        </div>

        {/* CONTACT DETAILS */}
        <div className="space-y-6 mt-10 font-font2">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="border border-red-600 p-3">
              <Mail size={18} className="text-red-600" />
            </div>
            <div>
              <p className="text-xs tracking-widest text-red-600 uppercase">
                Email
              </p>
              <p className="text-white/80 text-sm">alexphilip@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="border border-red-600 p-3">
              <Phone size={18} className="text-red-600" />
            </div>
            <div>
              <p className="text-xs tracking-widest text-red-600 uppercase">
                Phone / WhatsApp
              </p>
              <p className="text-white/80 text-sm">+91 85478 23809</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="bg-[#F5F5F5] px-10 py-16 flex items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <h2 className="text-4xl font-playfair mb-10 text-[#111]">
            Send a Message
          </h2>

          {/* Name */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Subject
            </label>
            <input
              type="text"
              placeholder="Speaking / Book Order / Consulting / Other"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us how we can help you..."
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600 transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-700 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 mt-4 text-sm">
              ✓ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
