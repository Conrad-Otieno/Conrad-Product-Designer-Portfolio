import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";

type Props = {
  onBack: () => void;
};

const MO = "'Montserrat', 'Inter', sans-serif";

const contactDetails = [
  { icon: Mail, label: "Email", value: "otienoconrad58@gmail.com" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  { icon: Phone, label: "Available for", value: "Remote & Local Projects" },
];

export function Contact({ onBack }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: MO }}>

      <main className="bg-[#f7f5f0]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-16 sm:py-20 lg:py-28">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h1
              className="tracking-tight text-neutral-900 mb-4 leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 600, fontFamily: MO, letterSpacing: "-0.02em" }}
            >
              Let's Work Together
            </h1>
            <p
              className="text-neutral-500 leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)", fontWeight: 400, fontFamily: MO }}
            >
              Have a project in mind? I'd love to help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ── Left: Get In Touch ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-neutral-200"
            >
              <h2
                className="text-neutral-900 mb-8 tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, fontFamily: MO, letterSpacing: "-0.01em" }}
              >
                Get In Touch
              </h2>

              <div className="space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm font-medium text-neutral-900 mb-0.5" style={{ fontFamily: MO }}>
                          {item.label}
                        </p>
                        <p className="text-sm text-neutral-600" style={{ fontFamily: MO }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-200">
                <p className="text-sm font-semibold text-neutral-900 mb-2" style={{ fontFamily: MO }}>
                  Response Time
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: MO }}>
                  I typically respond within 24 hours on business days.
                </p>
              </div>
            </motion.div>

            {/* ── Right: Send a Message ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-neutral-200"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col items-start"
                  >
                    <CheckCircle className="w-12 h-12 text-amber-500 mb-6" strokeWidth={1.5} />
                    <h2
                      className="text-neutral-900 mb-3 tracking-tight"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, fontFamily: MO, letterSpacing: "-0.02em" }}
                    >
                      Message received.
                    </h2>
                    <p className="text-neutral-600 leading-relaxed text-base" style={{ fontFamily: MO, fontWeight: 400 }}>
                      Thanks for reaching out. I read every message personally and will get back to you within 1–2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h2
                      className="text-neutral-900 mb-8 tracking-tight"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, fontFamily: MO, letterSpacing: "-0.01em" }}
                    >
                      Send a Message
                    </h2>

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        style={{ fontFamily: MO }}
                      >
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        style={{ fontFamily: MO }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        style={{ fontFamily: MO }}
                      >
                        Email <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        style={{ fontFamily: MO }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 mb-2"
                        style={{ fontFamily: MO }}
                      >
                        Message <span className="text-amber-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                        style={{ fontFamily: MO }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-amber-700 transition-colors"
                      style={{ fontFamily: MO }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </main>

    </div>
  );
}
