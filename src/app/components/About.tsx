import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, Briefcase, Code, Palette, Users } from "lucide-react";
import heroPortrait from "@/imports/hero-portrait.jpeg";
import dqDesignSystem from "@/imports/DQ_DesignSystem.svg";

type Props = {
  onBack: () => void;
};

const MO = "'Montserrat', 'Inter', sans-serif";

const skills = [
  { icon: Palette, title: "UI/UX Design", description: "End-to-end product design from user flows and wireframes to high-fidelity prototypes, applying design thinking and accessibility principles." },
  { icon: Code, title: "Design Systems", description: "Building scalable component libraries, standardising interaction patterns, typography, colour tokens, and component states across product lines." },
  { icon: Users, title: "User Research", description: "Conducting stakeholder interviews, usability testing, and journey mapping to synthesise insights that drive design decisions." },
  { icon: Briefcase, title: "Workshop Facilitation", description: "Leading Lean UX workshops, design sprints, and iterative feedback sessions with cross-functional teams." },
];

const experience = [
  {
    role: "Product Designer",
    company: "DigitalQatalyst, Dubai (Remote)",
    period: "June 2024 – Present",
    description: "Designing enterprise-grade digital platforms across fintech regulation, EdTech, and digital transformation. Key projects: DFSA SupTech Platform, Khalifa Fund Enterprise Journey Platform, DQ Corporate Website, and DQ Design System.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "April 2021 – May 2023",
    description: "Designed responsive interfaces across web and mobile. Translated business requirements into user flows, wireframes, and high-fidelity Figma prototypes.",
  },
];

const values = [
  { n: "01", title: "User-Centered", description: "Every design decision starts with understanding real user needs, from regulated firms navigating compliance to SMEs accessing government services." },
  { n: "02", title: "Systems Thinking", description: "Great design scales. I build component libraries and interaction patterns that reduce inconsistency and cut handoff effort for engineering teams." },
  { n: "03", title: "Research-Led", description: "Stakeholder interviews, heuristic evaluations, and usability testing are how I make design decisions defensible, not just aesthetic." },
  { n: "04", title: "Impact-Driven", description: "I measure success through outcomes: reconciliation time reduced, bounce rates dropped, consultation requests increased." },
];

const tools = ["Figma", "Miro", "Adobe XD", "ChatGPT", "Midjourney", "Loveable"];

function ToolIcon({ name }: { name: string }) {
  const base = "w-8 h-8 flex-shrink-0";
  if (name === "Figma") return (
    <svg className={base} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 42H19V53C19 56.31 16.31 59 13 59H13C9.69 59 7 56.31 7 53V43C7 42.45 7.45 42 8 42Z" fill="#1ABCFE"/>
      <path d="M7 17C7 13.69 9.69 11 13 11H19V23H13C9.69 23 7 20.31 7 17Z" fill="#F24E1E"/>
      <path d="M7 29C7 25.69 9.69 23 13 23H19V35H13C9.69 35 7 32.31 7 29Z" fill="#A259FF"/>
      <path d="M19 11H25C28.31 11 31 13.69 31 17C31 20.31 28.31 23 25 23H19V11Z" fill="#FF7262"/>
      <circle cx="25" cy="29" r="6" fill="#0ACF83"/>
    </svg>
  );
  if (name === "Miro") return (
    <svg className={base} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="78" height="78" rx="14" fill="#FFD02F"/>
      <path d="M52.4 14H43L50.2 28.6L34.6 14H25.2L32.4 28.6L16.8 14H7L22 39L7 64H16.4L32 49.4L24.8 64H34.2L49.8 49.4L42.6 64H52L67 39L52.4 14Z" fill="#050038"/>
    </svg>
  );
  if (name === "Adobe XD") return (
    <svg className={base} viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="234" rx="42" fill="#FF26BE"/>
      <path d="M126.2 74.4L95.4 160H74.2L103.8 74.4H126.2Z" fill="white"/>
      <path d="M152.4 74.4L181.8 160H160.6L131.2 74.4H152.4Z" fill="white"/>
      <path d="M74.2 74.4H95.4L131.2 160H110L74.2 74.4Z" fill="white" opacity="0.5"/>
    </svg>
  );
  if (name === "ChatGPT") return (
    <svg className={base} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835 9.964 9.964 0 00-7.505-3.348 10.079 10.079 0 00-9.612 6.977 9.967 9.967 0 00-6.664 4.834 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.504 3.347 10.078 10.078 0 009.617-6.981 9.967 9.967 0 006.663-4.834 10.079 10.079 0 00-1.243-11.813zM22.498 37.886a7.474 7.474 0 01-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 00.655-1.134V19.054l3.366 1.944a.12.12 0 01.066.092v9.299a7.505 7.505 0 01-7.49 7.496zM6.392 31.006a7.471 7.471 0 01-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 001.308 0l9.724-5.614v3.888a.12.12 0 01-.048.103l-8.051 4.649a7.504 7.504 0 01-10.24-2.744zM4.297 13.62A7.469 7.469 0 018.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 00.654 1.132l9.723 5.614-3.366 1.944a.12.12 0 01-.114.012L6.044 23.86a7.504 7.504 0 01-1.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 01.114-.012l9.048 5.228a7.498 7.498 0 01-1.158 13.528v-9.476a1.293 1.293 0 00-.647-1.71zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 00-1.308 0l-9.723 5.614v-3.888a.12.12 0 01.048-.103l8.05-4.645a7.497 7.497 0 0111.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 01-.065-.092v-9.299a7.497 7.497 0 0112.293-5.756 6.94 6.94 0 00-.236.134l-7.965 4.6a1.294 1.294 0 00-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.497v4.998l-4.331 2.5-4.331-2.5V18z" fill="#10a37f"/>
    </svg>
  );
  if (name === "Midjourney") return (
    <svg className={base} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#000"/>
      <path d="M20 72 Q35 30 50 25 Q65 30 80 72" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M35 72 Q50 45 65 72" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="22" r="5" fill="white"/>
    </svg>
  );
  if (name === "Loveable") return (
    <svg className={base} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="18" fill="#FF4D6D"/>
      <path d="M50 75 C50 75 20 58 20 38 C20 28 28 20 38 20 C44 20 49 23 50 25 C51 23 56 20 62 20 C72 20 80 28 80 38 C80 58 50 75 50 75Z" fill="white"/>
    </svg>
  );
  // Artios — text badge
  return (
    <div className={`${base} rounded-lg bg-neutral-700 flex items-center justify-center`}>
      <span className="text-white text-[9px] font-semibold tracking-wide" style={{ fontFamily: MO }}>AR</span>
    </div>
  );
}

export function About({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-neutral-900" style={{ fontFamily: MO }}>
      <main>

        {/* ── Bento Hero Grid ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-16 sm:pt-20 lg:pt-28 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">

            {/* Card 1 — Portrait + intro (spans 5 cols, tall) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
              className="lg:col-span-5 bg-white rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="flex-1 bg-neutral-100 overflow-hidden" style={{ minHeight: "280px" }}>
                <ImageWithFallback
                  src={heroPortrait}
                  alt="Conrad Otieno, Product Designer"
                  className="w-full h-full object-cover object-top" decoding="async"
                  width={600}
                  height={500}
                />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2 font-medium" style={{ fontFamily: MO }}>Product Designer</p>
                <h1 className="tracking-tight text-neutral-900 mb-4 leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.02em" }}>
                  Conrad Otieno
                </h1>
                <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)", fontFamily: MO, fontWeight: 400 }}>
                  UI/UX and product designer based in Nairobi, Kenya. I specialise in simplifying complex, multi-stakeholder systems into intuitive, scalable user experiences.
                </p>
              </div>
            </motion.div>

            {/* Right column — stacked cards */}
            <div className="lg:col-span-7 flex flex-col gap-4">

              {/* Card 2 — Bio + stats row */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
                className="bg-white rounded-3xl p-7 sm:p-8"
              >
                <p className="text-neutral-600 leading-relaxed mb-6" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  With 4+ years of experience, I've designed enterprise-grade digital platforms across fintech regulation, SME ecosystems, digital transformation, and EdTech. I combine design thinking with front-end development fluency to deliver accessible, high-quality interfaces that bridge user needs and business goals.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-6">
                  {[
                    { n: "4+", label: "Years experience" },
                    { n: "3", label: "Industries" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-neutral-900 mb-0.5" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontFamily: MO, fontWeight: 500, letterSpacing: "-0.02em" }}>{s.n}</div>
                      <div className="text-neutral-400 text-xs tracking-wide" style={{ fontFamily: MO }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 3 — Experience */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0, 1] }}
                className="bg-white rounded-3xl p-7 sm:p-8 flex-1 border border-neutral-200"
              >
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6 font-medium" style={{ fontFamily: MO }}>Experience</p>
                <div className="space-y-6">
                  {experience.map((job, i) => (
                    <div key={i} className={i < experience.length - 1 ? "pb-6 border-b border-neutral-100" : ""}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <span className="text-neutral-900 font-medium" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", fontFamily: MO }}>{job.role}</span>
                        <span className="text-neutral-400 text-xs" style={{ fontFamily: MO }}>{job.period}</span>
                      </div>
                      <p className="text-amber-600 mb-2 text-sm" style={{ fontFamily: MO, fontWeight: 500 }}>{job.company}</p>
                      <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}>{job.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ── What I Offer ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0, 0, 1] }}
            className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-64 flex-shrink-0">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4 font-medium" style={{ fontFamily: MO }}>What I Offer</p>
                <h2 className="tracking-tight text-neutral-900 leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.02em" }}>
                  Services That Drive Real Results
                </h2>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.title}>
                      <Icon className="w-5 h-5 text-neutral-400 mb-3" strokeWidth={1.5} />
                      <h3 className="text-neutral-900 mb-2" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", fontFamily: MO, fontWeight: 600 }}>{skill.title}</h3>
                      <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}>{skill.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Design System ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0, 0, 1] }}
            className="bg-white rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 bg-neutral-50 flex items-center justify-center p-6 sm:p-8">
                <img src={dqDesignSystem} alt="DQ Design System" className="w-full h-auto block rounded-xl" style={{ imageRendering: "crisp-edges" }} />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4 font-medium" style={{ fontFamily: MO }}>Design System</p>
                <h2 className="tracking-tight text-neutral-900 mb-5" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.01em" }}>
                  My design system
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  A comprehensive design system built to bring consistency, accessibility, and scalability to every product I touch. Created to standardise how teams design and build, it demonstrates the power of systematic thinking in creating cohesive experiences across multiple platforms and touchpoints.
                </p>
                <a
                  href="https://www.figma.com/design/BLMYxaJlV6eoWvC85F2jHi/My-Design-System?node-id=3-0&t=ATAI7ko4Zw9wk4Nw-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-900 pb-0.5 w-fit hover:text-amber-600 hover:border-amber-600 transition-colors"
                  style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", fontFamily: MO, fontWeight: 500 }}
                >
                  View the design system
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Principles + Tools ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0, 0, 1] }}
              className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-10"
            >
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-5 font-medium" style={{ fontFamily: MO }}>How I Work</p>
              <h2 className="tracking-tight text-neutral-900 mb-8" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.01em" }}>
                Design Principles
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08, ease: [0.25, 0, 0, 1] }}
                  >
                    <span className="text-neutral-600 text-xs tracking-widest font-medium block mb-3" style={{ fontFamily: MO }}>{value.n}</span>
                    <h3 className="text-neutral-900 mb-2" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", fontFamily: MO, fontWeight: 600 }}>{value.title}</h3>
                    <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0, 0, 1] }}
              className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 flex flex-col border border-neutral-200"
            >
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-5 font-medium" style={{ fontFamily: MO }}>Toolbox</p>
              <h2 className="tracking-tight text-neutral-900 mb-8" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.01em" }}>
                Tools I use
              </h2>
              <div className="grid grid-cols-3 gap-3 content-start">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center justify-center p-3 bg-neutral-50 rounded-xl aspect-square">
                    <ToolIcon name={tool} />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-4 pb-16 sm:pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0, 0, 1] }}
            className="bg-amber-600 rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div>
              <h2 className="tracking-tight text-neutral-900 mb-3" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, fontFamily: MO, letterSpacing: "-0.01em" }}>
                Let's work together
              </h2>
              <p className="text-amber-100 leading-relaxed max-w-lg" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                Open to new projects, full-time roles, and conversations about hard design problems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-amber-50 transition-colors"
                style={{ fontFamily: MO }}
              >
                View my work
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://www.linkedin.com/in/conrad-otieno-251405200/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-amber-800 transition-colors"
                style={{ fontFamily: MO }}
              >
                Connect on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
