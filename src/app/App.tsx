import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Linkedin, Lock, X, ArrowUp } from "lucide-react";
import { Logo } from "./components/Logo";
import logoImg from "@/imports/logo.png";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import heroPortrait from "@/imports/hero-portrait.jpeg";
import dfsaCard from "@/imports/DFSA_Card.svg";
import dqCard from "@/imports/DQ_Card.svg";
import kfCard from "@/imports/KF_Card.svg";

const MO = "Montserrat, Inter, sans-serif";

const taglines = {
  anyone:
    "Crafting digital experiences where joy meets utility, designing products that feel effortless, work for everyone, and solve real problems with care.",
  recruiters:
    "Product designer with 4+ years building scalable design systems, leading cross-functional teams, and delivering measurable user impact.",
  designers:
    "Obsessed with design systems, accessibility, and the craft of interaction design. Always happy to talk process, tooling, and hard design problems.",
  pms:
    "Design partner who speaks product, fluent in metrics, user research, and roadmaps. I turn ambiguous problems into shippable, validated solutions.",
  engineers:
    "Design collaborator who values feasibility and craftsmanship, comfortable with component architecture, design tokens, and designing within technical constraints.",
};

const audiences = [
  { key: "anyone", label: "For Anyone" },
  { key: "recruiters", label: "Recruiters" },
  { key: "designers", label: "Designers" },
  { key: "pms", label: "Product managers" },
  { key: "engineers", label: "Engineers" },
];

const projects: { title: string; category: string; image: string; bg: string; bottomAnchored?: boolean; protected?: boolean }[] = [
  {
    title: "Dubai Financial Services Authority SupTech Platform",
    category: "Web App",
    image: dfsaCard,
    bg: "bg-[#e8f5ee]",
    bottomAnchored: true,
    protected: true,
  },
  {
    title: "DigitalQatalyst Corporate Website Redesign",
    category: "Website",
    image: dqCard,
    bg: "bg-[#f5ede0]",
  },
  {
    title: "Khalifa Fund Enterprise Journey Platform",
    category: "Web App",
    image: kfCard,
    bg: "bg-[#e0edf5]",
  },
];

// ── Password gate ─────────────────────────────────────────────────
const DFSA_PASSWORD = "Protected9193";

function PasswordModal({
  onSuccess,
  onClose,
}: {
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === DFSA_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { opacity: 1, scale: 1, y: 0, x: 0 }}
        transition={shake ? { duration: 0.45, ease: "easeInOut" } : { duration: 0.25, ease: [0.25, 0, 0, 1] }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 flex flex-col items-center text-center"
        style={{ fontFamily: MO }}
      >
        {/* Lock icon */}
        <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
          <Lock className="w-7 h-7 text-neutral-500" strokeWidth={1.5} />
        </div>

        <h2
          className="text-neutral-900 mb-2 tracking-tight"
          style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 700, fontFamily: MO }}
        >
          Protected Case Study
        </h2>
        <p
          className="text-neutral-500 mb-8 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", fontFamily: MO, fontWeight: 400 }}
        >
          This case study is password protected. Please enter the password to view.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Enter password"
            className={`w-full px-5 py-4 rounded-2xl border-2 text-neutral-900 placeholder-neutral-400 outline-none transition-colors text-base ${
              error
                ? "border-red-400 bg-red-50"
                : "border-neutral-200 focus:border-amber-500 bg-white"
            }`}
            style={{ fontFamily: MO, fontWeight: 400 }}
            aria-label="Case study password"
            aria-invalid={error}
          />
          {error && (
            <p className="text-red-500 text-sm text-left pl-1" style={{ fontFamily: MO }}>
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-2xl text-base font-semibold transition-colors"
            style={{ fontFamily: MO }}
          >
            Access Case Study
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-6 flex items-center gap-2 text-neutral-400 hover:text-neutral-600 text-sm transition-colors"
          style={{ fontFamily: MO }}
        >
          <X className="w-4 h-4" />
          Back to home
        </button>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [activeAudience, setActiveAudience] = useState("anyone");
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<"home" | "case" | "contact" | "about">("home");
  const [activeProject, setActiveProject] = useState<string>("dfsa");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [pendingProject, setPendingProject] = useState<string | null>(null);

  const projectIdMap: Record<string, string> = {
    "Dubai Financial Services Authority SupTech Platform": "dfsa",
    "DigitalQatalyst Corporate Website Redesign": "digitalqatalyst",
    "Khalifa Fund Enterprise Journey Platform": "civic",
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleProjectClick(projectId: string) {
    if (projectId === "dfsa") {
      setPendingProject("dfsa");
      setShowPasswordModal(true);
    } else {
      setActiveProject(projectId);
      setView("case");
      window.scrollTo(0, 0);
    }
  }

  function handlePasswordSuccess() {
    setShowPasswordModal(false);
    if (pendingProject) {
      setActiveProject(pendingProject);
      setPendingProject(null);
      setView("case");
      window.scrollTo(0, 0);
    }
  }

  function handlePasswordClose() {
    setShowPasswordModal(false);
    setPendingProject(null);
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-neutral-900">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#1a1a1a]/95 border-b border-white/5">
        <nav
          className="px-5 sm:px-10 lg:px-[100px] h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <button onClick={() => setView("home")} aria-label="Conrad — back to home">
            <img src={logoImg} alt="Conrad" className="h-8 w-auto" />
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <button 
                onClick={() => { setView("home"); setTimeout(() => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }, 100); }} 
                className={`hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none ${view === "home" ? "text-amber-500" : ""}`}
              >
                Works
              </button>
              <button 
                onClick={() => setView("about")} 
                className={`hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none ${view === "about" ? "text-amber-500" : ""}`}
              >
                About
              </button>
              <button 
                onClick={() => setView("contact")} 
                className={`hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none ${view === "contact" ? "text-amber-500" : ""}`}
              >
                Contact
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0, 0, 1] }}
              className="md:hidden overflow-hidden border-t border-white/10 bg-[#1a1a1a]"
            >
              <div className="flex flex-col px-5 py-5 gap-5 text-neutral-300 text-sm">
                <button 
                  onClick={() => { setMenuOpen(false); setView("home"); setTimeout(() => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }, 100); }} 
                  className={`text-left hover:text-amber-500 transition-colors tracking-wide ${view === "home" ? "text-amber-500" : ""}`}
                >
                  Works
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); setView("about"); }} 
                  className={`text-left hover:text-amber-500 transition-colors tracking-wide ${view === "about" ? "text-amber-500" : ""}`}
                >
                  About
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); setView("contact"); }} 
                  className={`text-left hover:text-amber-500 transition-colors tracking-wide ${view === "contact" ? "text-amber-500" : ""}`}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Content ── */}
      <AnimatePresence mode="wait">
        {view === "case" && (
          <motion.div
            key="case"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CaseStudy onBack={() => setView("home")} projectId={activeProject} onNavigate={(id) => { handleProjectClick(id); }} />
          </motion.div>
        )}

        {view === "contact" && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Contact onBack={() => setView("home")} />
          </motion.div>
        )}

        {view === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <About onBack={() => setView("home")} />
          </motion.div>
        )}

        {view === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* ── Hero ── */}
            <main id="main-content">
        <section aria-label="Introduction">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">

            {/* Portrait — top on mobile - HIDDEN */}
            {/* <div className="flex justify-center mb-8 md:hidden">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-neutral-200 ring-4 ring-white shadow-md flex-shrink-0">
                <ImageWithFallback
                  src={heroPortrait}
                  alt="Conrad, Product Designer — portrait photo"
                  className="w-full h-full object-cover object-center"
                  width={128}
                  height={128}
                />
              </div>
            </div> */}

            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 lg:gap-20 items-center">
              <div className="min-w-0">

                {/* Audience tabs */}
                <div
                  className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1 mb-8 sm:mb-10"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
                >
                  {audiences.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setActiveAudience(key)}
                      className={`flex-shrink-0 pb-1.5 text-xs sm:text-sm tracking-wide uppercase transition-colors border-b-2 ${
                        activeAudience === key
                          ? "text-neutral-900 border-neutral-900 font-medium"
                          : "text-neutral-400 hover:text-neutral-600 border-transparent"
                      }`}
                      style={{ fontFamily: MO }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Greeting — H1, largest text on page */}
                <h1
                  className="tracking-tight leading-[1.1] mb-5 sm:mb-6 text-neutral-900"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 600, fontFamily: MO }}
                >
                  Hello, I'm Conrad
                </h1>

                {/* Tagline — clear step down from H1 */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeAudience}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
                    className="leading-relaxed mb-10 sm:mb-12 text-neutral-500 max-w-2xl"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", fontWeight: 400, fontFamily: MO }}
                  >
                    {taglines[activeAudience as keyof typeof taglines]}
                  </motion.p>
                </AnimatePresence>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/conrad-otieno-251405200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors"
                    style={{ fontFamily: MO }}
                  >
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 border border-neutral-900/20 text-neutral-700 px-5 sm:px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-900/5 transition-colors"
                    style={{ fontFamily: MO }}
                  >
                    View my work
                  </a>
                </div>
              </div>

              {/* Portrait — desktop right, vertically centred with text */}
              <div className="hidden md:flex justify-end items-center flex-shrink-0">
                <div className="w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden bg-neutral-200 ring-4 ring-white shadow-lg">
                  <ImageWithFallback
                    src={heroPortrait}
                    alt="Conrad, Product Designer — portrait photo"
                    className="w-full h-full object-cover object-top"
                    decoding="async"
                    fetchPriority="high"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section
          id="work"
          aria-label="Selected work"
          className="border-t border-neutral-200"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-16 sm:py-20 lg:py-28">

            {/* Section header */}
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <p
                className="text-xs uppercase tracking-widest text-neutral-400 mb-3"
                style={{ fontFamily: MO, fontWeight: 500 }}
              >
                Selected work
              </p>
              <h2
                className="tracking-tight text-neutral-900"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", fontWeight: 600, fontFamily: MO }}
              >
                Recent things I'm proud of.
              </h2>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list">
              {projects.map((p, cardIndex) => (
                <article
                  key={p.title}
                  role="listitem"
                  onClick={() => { handleProjectClick(projectIdMap[p.title] ?? "dfsa"); }}
                  className="group cursor-pointer bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={`Case study: ${p.title}`}
                >
                  {/* Image */}
                  <div className={`${p.bg} aspect-[4/3] overflow-hidden relative`}>
                    {p.bottomAnchored ? (
                      <img
                        src={p.image}
                        alt={`${p.title} — project preview`}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading={cardIndex === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={cardIndex === 0 ? "high" : "auto"}
                      />
                    ) : (
                      <ImageWithFallback
                        src={p.image}
                        alt={`${p.title} — project preview`}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        width={600}
                        height={450}
                        loading={cardIndex === 0 ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={cardIndex === 0 ? "high" : "auto"}
                      />
                    )}
                    {/* Lock badge */}
                    {p.protected && (
                      <div
                        className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-neutral-700 px-2.5 py-1.5 rounded-full shadow-sm"
                        style={{ fontFamily: MO, fontSize: "0.7rem", fontWeight: 500 }}
                      >
                        <Lock className="w-3 h-3" strokeWidth={2} />
                        <span>Protected</span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5 sm:p-6">
                    <p
                      className="text-neutral-400 mb-2 text-[11px] uppercase tracking-widest"
                      style={{ fontFamily: MO, fontWeight: 500 }}
                    >
                      {p.category}
                    </p>
                    <h3
                      className="text-neutral-800 group-hover:text-amber-700 transition-colors leading-snug"
                      style={{ fontFamily: MO, fontWeight: 600, fontSize: "clamp(0.9rem, 1.6vw, 1rem)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ── */}
      <footer className="bg-[#1a1a1a] text-neutral-400" aria-label="Site footer">
        <div className="px-5 sm:px-10 lg:px-[100px] py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <img src={logoImg} alt="Conrad" className="h-8 w-auto" />
          <nav className="flex flex-wrap items-center gap-6 text-sm" aria-label="Footer navigation">
            <button onClick={() => { setView("home"); setTimeout(() => { document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }, 100); }} className="hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none">Works</button>
            <button onClick={() => setView("about")} className="hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none">About</button>
            <button onClick={() => setView("contact")} className="hover:text-amber-500 transition-colors duration-200 tracking-wide font-normal leading-none">Contact</button>
          </nav>
          <p className="text-sm text-neutral-500">© 2026 Conrad · Nairobi, Kenya</p>
        </div>
      </footer>

      {/* ── Scroll to top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: [0.25, 0, 0, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:bg-amber-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Password modal ── */}
      <AnimatePresence>
        {showPasswordModal && (
          <PasswordModal
            onSuccess={handlePasswordSuccess}
            onClose={handlePasswordClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
