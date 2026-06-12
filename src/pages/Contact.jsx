import { useState, useMemo } from "react";
import { Mail, Phone } from "lucide-react";
import Select from "react-select";
import countryList from "react-select-country-list";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const options = useMemo(() => countryList().getData(), []);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      country: selectedOption.label,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        user_name: "",
        user_email: "",
        phone: "",
        country: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 pt-16">
      {/* LEFT SIDE */}
      <div className="bg-[#0A0F14] text-white px-10 py-10 flex flex-col justify-between">
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

        <div className="space-y-6 mt-10 font-font2">
          <div className="flex items-start gap-4">
            <div className="border border-red-600 p-3">
              <Mail size={18} className="text-red-600" />
            </div>
            <div>
              <p className="text-xs tracking-widest text-red-600 uppercase">
                Email
              </p>
              <p className="text-white/80 text-sm">info@esgquanta.com</p>
            </div>
          </div>

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

      {/* RIGHT SIDE */}
      <div className="bg-[#F5F5F5] px-10 py-10 flex items-start">
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
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Email Address
            </label>

            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Country
            </label>

            <Select
              options={options}
              onChange={handleCountryChange}
              placeholder="Select Country"
            />
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Speaking / Book Order / Consulting / Other"
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-xs tracking-widest text-gray-600 uppercase">
              Message
            </label>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              className="w-full mt-2 border border-gray-300 p-4 bg-transparent focus:outline-none focus:border-red-600 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-700 transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
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
