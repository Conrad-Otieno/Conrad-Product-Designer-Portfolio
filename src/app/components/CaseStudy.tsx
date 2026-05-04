import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./Logo";
import { useState, useEffect, useRef } from "react";
import dfsaSwimlaneDiagram from "@/imports/dfsa_swimlane_diagram.png";
import ebppStage02 from "@/imports/EBPP - Stage 02.svg";
import ebppCRM from "@/imports/EBPP - CRM.svg";
import ebppERP from "@/imports/EBPP - ERP.svg";
import insightsSvg from "@/imports/Insights.svg";
import problemSvg from "@/imports/problem.svg";
import dfsaHero from "@/imports/DFSA_Hero.svg";
import dqHeuristic1 from "@/imports/DQ_Heuristic_1.svg";
import dqHeuristic2 from "@/imports/DQ_Heuristic_2.svg";
import dqImgImagery from "@/imports/DQ_Imagery.svg";
import dqImgHomepage from "@/imports/DQ_Homepage.svg";
import dqImgBrand from "@/imports/DQ_Brand.svg";
import dqImgServices from "@/imports/DQ_Services.svg";
import dqHero from "@/imports/DQ_Hero.svg";
import dqProblem1 from "@/imports/DQ_Problem_1.svg";
import dqProblem2 from "@/imports/DQ_Problem_2.svg";
import dqProblem3 from "@/imports/DQ_Problem_3.svg";
import dqProblem4 from "@/imports/DQ_Problem_4.gif";
import kfHero from "@/imports/KF_Hero.svg";
import dqCard from "@/imports/DQ_Card.svg";
import kfCard from "@/imports/KF_Card.svg";
import dfsaCard from "@/imports/DFSA_Card.svg";

type Props = {
  onBack: () => void;
  projectId: string;
  onNavigate: (id: string) => void;
};

const MO = "'Montserrat', 'Inter', sans-serif";

// ── Data types ────────────────────────────────────────────────────
type ProjectData = {
  title: string;
  role: string;
  product: string;
  year: string;
  tools: string[];
  heroImage: string;
  comingSoon?: boolean;
  problems?: string[];
  about?: string[];
  outcomes?: { label: string; from?: string; to?: string; stat?: string }[];
  outcomeSummary?: string;
};

// ── Per-project data map ──────────────────────────────────────────
const projectsData: Record<string, ProjectData> = {
  dfsa: {
    title: "DFSA Electronic Bill Presentment & Payment (EBPP) Platform Design",
    role: "Product Designer",
    product: "Web App · CRM · ERP",
    year: "2024",
    tools: ["Figma"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    problems: [
      "Fee calculations were done manually with no configurable rules engine, introducing errors and inconsistencies.",
      "Invoice generation required manual data transfer between CRM and ERP, creating duplication risk.",
      "Bank transfer reconciliation had no automation, so finance teams matched payments by hand.",
      "Customers had no visibility into invoice status or payment confirmation, leading to repeated follow-up calls.",
      "No single source of truth, as application status lived in disconnected spreadsheets and email threads.",
    ],
  },
  digitalqatalyst: {
    title: "DigitalQatalyst Corporate Website Redesign",
    role: "UI/UX Designer",
    product: "Website",
    year: "2025",
    tools: ["Figma", "Miro", "Teams"],
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=80",
    about: [
      "DigitalQatalyst is a digital transformation consultancy serving enterprise and government organizations across finance, logistics, energy, and public sectors. Despite deep expertise and a strong portfolio, their digital presence functioned as a static brochure rather than a business development engine.",
      "This engagement was positioned as a strategic repositioning initiative, not a visual redesign. We restructured the design workflow around AI-accelerated prototyping, moving directly from research to interactive prototypes to shorten validation cycles and reduce production waste.",
    ],
    outcomes: [
      { label: "Bounce rate", from: "67%", to: "43%" },
      { label: "Value clarity", from: "31%", to: "71%" },
      { label: "Page production", from: "3 weeks", to: "2.3 days" },
      { label: "Consultation requests", stat: "+52%" },
      { label: "Mobile bounce", from: "79%", to: "49%" },
    ],
    outcomeSummary: "A measurable commercial transformation.",
  },
  civic: {
    title: "Khalifa Fund Enterprise Journey Platform",
    role: "Lead Product Designer",
    product: "Web App",
    year: "2022",
    tools: ["Figma"],
    heroImage: kfHero,
    comingSoon: true,
  },
};

// ── Legacy constants kept for DFSA full layout ────────────────────
const processSteps = [
  { n: "02", title: "Synthesis", body: "Stakeholder workshops and competitive analysis revealed gaps in cross-platform consistency and regulatory compliance UX." },
  { n: "03", title: "Prototype", body: "Created high-fidelity prototypes tested with 15 banking professionals and 20 end-users across Dubai and Abu Dhabi." },
  { n: "04", title: "Ship & measure", body: "Phased rollout across three major banks. Tracked adoption rates, transaction completion, and customer satisfaction scores." },
];

const persona = {
  name: "Ahmed, 42",
  role: "Business banking customer",
  goals: ["Complete transactions quickly and securely", "Access services on mobile", "Understand compliance requirements clearly"],
  pains: ["Complex navigation across services", "Unclear regulatory requirements", "Inconsistent mobile experience"],
};

// ── Component ─────────────────────────────────────────────────────
export function CaseStudy({ onBack, projectId, onNavigate }: Props) {
  const project = projectsData[projectId] ?? projectsData["dfsa"];
  const dashboardImg = project.heroImage;

  // ── Coming-soon layout for placeholder projects ────────────────
  if (project.comingSoon) {
    return (
      <div
        className="min-h-screen bg-white text-neutral-700"
        style={{ fontFamily: MO, fontWeight: 300 }}
      >
        <main id="case-study-content">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            className="relative bg-[#1a1a1a] overflow-hidden"
            style={{ minHeight: "clamp(320px, 48vw, 520px)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] rounded-full bg-neutral-800/30 blur-[120px]" />
            </div>
            <div className="relative flex items-center justify-center w-full h-full px-10 sm:px-24 lg:px-40" style={{ minHeight: "clamp(320px, 48vw, 520px)" }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: 0.2 }}
                className="w-full"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                >
                  <div style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.7))" }}>
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full block rounded-lg"
                      style={{ height: "clamp(280px, 42vw, 460px)", objectFit: "contain", imageRendering: "crisp-edges" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Title + meta */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0, 0, 1], delay: 0.1 }}
            className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-14 sm:pt-20 lg:pt-28 pb-0"
          >
            <h1
              className="tracking-tight max-w-5xl text-neutral-900"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 500, lineHeight: 1.12, fontFamily: MO }}
            >
              {project.title}
            </h1>
            <div className="border-t border-neutral-900/15 mt-10 sm:mt-14" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 py-8 sm:py-10">
              <MetaItem label="Role" value={project.role} />
              <MetaItem label="Product" value={project.product} />
              <MetaItem label="Year" value={project.year} />
              <div className="sm:pl-8 lg:pl-12">
                <div className="text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase mb-2" style={{ fontFamily: MO, fontWeight: 400 }}>Tools</div>
                <div className="flex items-center gap-3">{project.tools.map(t => <ToolLogo key={t} name={t} />)}</div>
              </div>
            </div>
          </motion.section>

          {/* Coming soon message */}
          <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-24 sm:py-32 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
              <span style={{ fontSize: "1.75rem" }}>🚧</span>
            </div>
            <h2
              className="text-neutral-900 mb-4 tracking-tight"
              style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 500, fontFamily: MO }}
            >
              Full case study coming soon
            </h2>
            <p
              className="text-neutral-500 max-w-md leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
            >
              This case study is currently being written up. Check back soon for the full breakdown of the design process, research, and outcomes.
            </p>
          </section>

          <MoreCaseStudies currentId={projectId} onNavigate={onNavigate} />
        </main>
      </div>
    );
  }

  // ── Full DigitalQatalyst layout ───────────────────────────────
  if (projectId === "digitalqatalyst") {
    const dqAbout = project.about ?? [];

    return (
      <div className="min-h-screen bg-white text-neutral-700" style={{ fontFamily: MO, fontWeight: 300 }}>
        <main id="case-study-content">

          {/* ── Hero ── */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            className="relative bg-[#1a1a1a] overflow-hidden"
            style={{ minHeight: "clamp(320px, 48vw, 520px)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] rounded-full bg-amber-900/20 blur-[120px]" />
            </div>
            <div className="relative flex items-center justify-center w-full h-full px-10 sm:px-24 lg:px-40" style={{ minHeight: "clamp(320px, 48vw, 520px)" }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: 0.2 }}
                className="w-full"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                >
                  <div style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.7))" }}>
                    <img
                      src={dqHero}
                      alt="DigitalQatalyst Corporate Website Redesign"
                      className="w-full block rounded-lg"
                      style={{ height: "clamp(280px, 42vw, 460px)", objectFit: "contain", imageRendering: "crisp-edges" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* ── Title + metadata ── */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0, 0, 1], delay: 0.1 }}
            className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-14 sm:pt-20 lg:pt-28 pb-0"
          >
            <h1
              className="tracking-tight max-w-5xl text-neutral-900"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 500, lineHeight: 1.12, fontFamily: MO }}
            >
              {project.title}
            </h1>
            <div className="border-t border-neutral-900/15 mt-10 sm:mt-14" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 py-8 sm:py-10">
              <MetaItem label="Role" value={project.role} />
              <MetaItem label="Product" value={project.product} />
              <MetaItem label="Year" value={project.year} />
              <div className="sm:pl-8 lg:pl-12">
                <div className="text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase mb-2" style={{ fontFamily: MO, fontWeight: 400 }}>Tools</div>
                <div className="flex items-center gap-3">{project.tools.map(t => <ToolLogo key={t} name={t} />)}</div>
              </div>
            </div>
          </motion.section>

          {/* ── About the project ── */}
          <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
            <h2
              className="tracking-tight mb-10 sm:mb-12 text-neutral-900"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
            >
              About the project
            </h2>
            <div className="space-y-5 mb-12">
              {dqAbout.map((para, i) => (
                <p key={i} className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  {para}
                </p>
              ))}
              <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                The stakes were real: DQ was losing qualified leads to competitors with clearer, more confident digital presences. A site that couldn't communicate their value was actively costing them business.
              </p>
            </div>
          </section>

          {/* ── Discovery ── */}
          <div className="bg-[#f7f5f0]">
            <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">

              {/* Badge + rule */}
              <div className="flex items-center gap-4 mb-10">
                <span
                  className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
                  style={{ fontFamily: MO, fontWeight: 500 }}
                >
                  Discovery
                </span>
                <div className="flex-1 h-px bg-neutral-900/10" />
              </div>

              {/* White card */}
              <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
                <h3
                  className="text-neutral-900 mb-8 tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
                >
                  Understanding the Problem
                </h3>

                {/* Heuristic Evaluation */}
                <h4
                  className="text-neutral-900 mb-3"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}
                >
                  Heuristic Evaluation
                </h4>
                <p
                  className="text-neutral-600 leading-relaxed mb-8"
                  style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
                >
                  We audited the existing site against Nielsen's usability principles. Critical violations included poor information hierarchy, inconsistent UI patterns, unclear navigation, and a homepage that communicated nothing within the first 5 seconds.
                </p>

                {/* Heuristic evaluation SVGs — side by side on shared background */}
                <div className="mt-2 flex flex-col lg:flex-row gap-1">
                  <div className="flex-1 min-w-0">
                    <img
                      src={dqHeuristic1}
                      alt="Heuristic Evaluation — page 1"
                      className="w-full h-auto block" loading="lazy"
                      style={{ imageRendering: "crisp-edges", display: "block" }}
                    />
                  </div>
                  <div className="w-px bg-neutral-100 flex-shrink-0 hidden lg:block" />
                  <div className="flex-1 min-w-0">
                    <img
                      src={dqHeuristic2}
                      alt="Heuristic Evaluation — page 2"
                      className="w-full h-auto block" loading="lazy"
                      style={{ imageRendering: "crisp-edges", display: "block" }}
                    />
                  </div>
                </div>

                {/* Stakeholder Interviews */}
                <div className="mt-8">
                  <h4
                    className="text-neutral-900 mb-3"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}
                  >
                    Stakeholder Interviews
                  </h4>
                  <p
                    className="text-neutral-600 leading-relaxed"
                    style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
                  >
                    I interviewed key DQ leadership including the CEO, Head of Marketing and one Account Manager to deeply understand the vision, culture, and the DCO mission, which would ensure design decisions were rooted in what DQ truly is, not just what it offers.
                  </p>
                </div>

                {/* User Research */}
                <div className="mt-8">
                  <h4
                    className="text-neutral-900 mb-3"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}
                  >
                    User Research
                  </h4>
                  <p
                    className="text-neutral-600 leading-relaxed"
                    style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
                  >
                    The primary audience was enterprise decision-makers, prospective clients, and strategic partners. Their need was simple: quickly understand what DQ does, whether it's relevant to them, and why DQ over anyone else.
                  </p>
                </div>

                {/* Synthesis */}
                <div className="mt-8 pt-8 border-t border-neutral-100">
                  <p
                    className="text-neutral-700 leading-relaxed"
                    style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
                  >
                    Across all three research activities, a clear pattern emerged: DQ's expertise was invisible, their language was internal, and their site was built for themselves, not their clients. Every problem we uncovered pointed to the same root cause, a disconnect between who DQ truly is and how they were presenting themselves to the world.
                  </p>
                </div>

              </div>
            </section>
          </div>

          {/* ── Define ── */}
          <div className="bg-[#f7f5f0]">
          <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">

            {/* Badge + rule */}
            <div className="flex items-center gap-4 mb-10">
              <span
                className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
                style={{ fontFamily: MO, fontWeight: 500 }}
              >
                Define
              </span>
              <div className="flex-1 h-px bg-neutral-900/10" />
            </div>

            {/* White card */}
            <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
              <h3
                className="text-neutral-900 mb-5 tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
              >
                Defining the Core Problems
              </h3>
              <p
                className="text-neutral-500 mb-8 leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
              >
                Four core problems emerged from research and shaped the entire redesign:
              </p>
              <ol className="space-y-4">
                {[
                  { lead: "Outdated, Cluttered Visual Design:", body: "The site felt heavy and dated, misaligned with DQ's forward-thinking, futurist identity.", img: dqProblem1 },
                  { lead: "Unclear Value Proposition:", body: "Visitors couldn't understand what DQ does within the first few seconds. No clear hook, no clarity.", img: dqProblem2 },
                  { lead: "Jargon-Heavy Services:", body: "The services section was overwhelming and filled with internal terminology that meant nothing to a prospective client.", img: dqProblem3 },
                  { lead: "Poor Positioning:", body: "DQ had evolved into a product-oriented organisation but the site still positioned it as a generic service consultancy, completely underselling their IP.", img: dqProblem4 },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
                  >
                    {/* Text */}
                    <div className="flex-1 flex items-start gap-4">
                      <span
                        className="flex-shrink-0 text-neutral-400 font-medium mt-0.5 w-5 text-right"
                        style={{ fontFamily: MO, fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}
                      >
                        {i + 1}.
                      </span>
                      <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                        <span style={{ fontWeight: 600, color: "#171717" }}>{item.lead}</span>{" "}{item.body}
                      </p>
                    </div>
                    {/* Image */}
                    {item.img && (
                      <div className="w-full sm:w-96 lg:w-[440px] flex-shrink-0">
                        <img src={item.img} alt={item.lead} className="w-full h-auto block rounded-xl" />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>
          </div>

          {/* ── Ideate ── */}
          <div className="bg-[#f7f5f0]">
            <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">

              {/* Badge + rule */}
              <div className="flex items-center gap-4 mb-10">
                <span
                  className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
                  style={{ fontFamily: MO, fontWeight: 500 }}
                >
                  Ideate
                </span>
                <div className="flex-1 h-px bg-neutral-900/10" />
              </div>

              {/* White card */}
              <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
                <h3
                  className="text-neutral-900 mb-5 tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
                >
                  Design Strategy & Direction
                </h3>
                <p
                  className="text-neutral-500 mb-10 leading-relaxed"
                  style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
                >
                  With the problems clearly defined, we established four strategic pillars to guide every design decision. Each pillar maps directly to a problem uncovered in research:
                </p>

                {/* 4 pillars */}
                <div className="space-y-10">
                  {[
                    {
                      n: "1",
                      lead: "Modernise the Visual Language:",
                      body: "We decided to move to a minimalist, futurist aesthetic, and a purposeful visual system that reflected DQ's culture and forward looking identity. I developed the design system and published it on ZeroHeight.",
                    },
                    {
                      n: "2",
                      lead: "Clarify the Value Proposition:",
                      body: "Every page needed to answer within 5 seconds: what DQ does, who it's for, and why it's different. We restructured the homepage around a clear hero statement, sector entry points, and proof points.",
                    },
                    {
                      n: "3",
                      lead: "Simplify the Services Architecture:",
                      body: "We replaced jargon-heavy service descriptions with outcome-led language, grouped offerings by sector, and introduced a consistent service card pattern that made scanning and self-selection effortless.",
                    },
                    {
                      n: "4",
                      lead: "Surface the DQ DNA:",
                      body: "We created dedicated space for DQ's philosophy, the DCO vision, and their 15-year framework heritage, turning invisible differentiators into visible proof of expertise.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="flex items-start gap-5">
                      <span
                        className="flex-shrink-0 text-neutral-400 font-medium mt-0.5 w-5 text-right"
                        style={{ fontFamily: MO, fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}
                      >
                        {item.n}.
                      </span>
                      <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                        <span style={{ fontWeight: 600, color: "#171717" }}>{item.lead}</span>{" "}{item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ── Implement ── */}
          <div className="bg-[#f7f5f0]">
          <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">

            {/* Badge + rule */}
            <div className="flex items-center gap-4 mb-10">
              <span
                className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
                style={{ fontFamily: MO, fontWeight: 500 }}
              >
                Implement
              </span>
              <div className="flex-1 h-px bg-neutral-900/10" />
            </div>

            {/* White card */}
            <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12 space-y-14">

              {/* Intro */}
              <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                With strategy locked, we executed against all four pillars simultaneously. Here is how each one translated into a concrete design decision.
              </p>

              {/* Imagery System */}
              <div>
                <h4 className="text-neutral-900 mb-3" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}>Imagery System</h4>
                <p className="text-neutral-600 leading-relaxed mb-5" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  We established a clear imagery direction that depicts humans and AI working in harmony, reflecting DQ's core belief:
                </p>
                <blockquote className="border-l-4 border-amber-400 pl-6 py-4 rounded-r-xl mb-5" style={{ backgroundColor: "#fefce8" }}>
                  <p className="text-neutral-700 leading-relaxed italic" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                    "In today's digital economy, organizational success depends on the systematic orchestration of human and machine intelligence."
                  </p>
                </blockquote>
                <p className="text-neutral-600 leading-relaxed mb-6" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  This synergy is the foundation of what DQ terms as the Digital Cognitive Organization (DCO).
                </p>
                <div className="rounded-xl overflow-hidden bg-neutral-50">
                  <img src={dqImgImagery} alt="Imagery system" className="w-full h-auto block object-cover" loading="lazy" style={{ maxHeight: "420px" }} />
                </div>
              </div>

              {/* Homepage Redesign */}
              <div>
                <h4 className="text-neutral-900 mb-3" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}>Homepage Redesign</h4>
                <p className="text-neutral-600 leading-relaxed mb-6" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  The old homepage failed its most basic job - telling visitors what DQ does. We redesigned it to lead with a bold, jargon-free hero statement that immediately communicates DQ's value. Within 5 seconds, a visitor now understands who DQ is, what they do, and why it matters. Every section was intentionally designed to guide the visitor toward a single outcome: conversion.
                </p>
                <div className="rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                    <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-amber-400" /><span className="w-3 h-3 rounded-full bg-green-400" /></div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-400 ml-2" style={{ fontFamily: MO }}>https://www.digitalqatalyst.com</div>
                  </div>
                  <img src={dqImgHomepage} alt="Homepage redesign" className="w-full h-auto block object-cover" loading="lazy" style={{ maxHeight: "420px" }} />
                </div>
              </div>

              {/* Brand Positioning */}
              <div>
                <h4 className="text-neutral-900 mb-3" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}>Brand Positioning</h4>
                <p className="text-neutral-600 leading-relaxed mb-6" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  The concepts of a Digital Cognitive Organisation (DCO) and Digital Business Platforms (DBP) was DQ's biggest differentiator. We gave it dedicated real estate, using plain language and intentional visuals to make the DCO vision tangible and compelling to a non-technical decision maker.
                </p>
                <div className="rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                    <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-amber-400" /><span className="w-3 h-3 rounded-full bg-green-400" /></div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-400 ml-2" style={{ fontFamily: MO }}>https://www.digitalqatalyst.com</div>
                  </div>
                  <img src={dqImgBrand} alt="Brand positioning" className="w-full h-auto block object-cover" loading="lazy" style={{ maxHeight: "420px" }} />
                </div>
              </div>

              {/* Services Restructure */}
              <div>
                <h4 className="text-neutral-900 mb-3" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", fontFamily: MO, fontWeight: 600 }}>Services Restructure</h4>
                <p className="text-neutral-600 leading-relaxed mb-6" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  We dismantled the overwhelming services section and rebuilt it around 11 core sector-specific pages. Each page speaks directly to a client in that sector in their language, addressing their specific challenges, and closes with a tailored intake form. A financial services client and a healthcare client now have completely different, relevant entry points into DQ's offering. We also added pages for our product offerings.
                </p>
                <div className="rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  <div className="bg-neutral-100 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-200">
                    <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-amber-400" /><span className="w-3 h-3 rounded-full bg-green-400" /></div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-400 ml-2" style={{ fontFamily: MO }}>https://www.digitalqatalyst.com</div>
                  </div>
                  <img src={dqImgServices} alt="Services restructure" className="w-full h-auto block object-cover" loading="lazy" style={{ maxHeight: "420px" }} />
                </div>
              </div>

            </div>
          </section>
          </div>

          {/* ── Success Metrics ── */}
          <div className="bg-[#f7f5f0]">
            <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">

              {/* Badge + rule */}
              <div className="flex items-center gap-4 mb-10">
                <span
                  className="bg-[#c8f135] text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
                  style={{ fontFamily: MO, fontWeight: 600 }}
                >
                  Success Metrics
                </span>
                <div className="flex-1 h-px bg-neutral-900/10" />
              </div>

              {/* White card */}
              <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
                <h3
                  className="text-neutral-900 mb-8 tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
                >
                  Results and takeaways
                </h3>

                {/* Results */}
                <ul className="space-y-4 mb-10">
                  {[
                    "User testing showed 87% of participants could correctly describe what DQ does within 10 seconds of landing on the homepage.",
                    "NPS score improved from 28 to 61, moving DQ from passive to promoter territory.",
                    "Average session duration increased by 42%, indicating visitors were engaging more deeply with the content.",
                    "Bounce rate dropped by 31%, reflecting stronger relevance and clearer messaging from the first touchpoint.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[0.45em] w-2 h-2 rounded-full flex-shrink-0 bg-[#c8f135]" />
                      <span className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Takeaways */}
                <p className="text-neutral-700 mb-5" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  My key takeaway from this project was:
                </p>
                <ul className="space-y-4">
                  {[
                    "Strategy before aesthetics - The most impactful design decisions on this project weren't visual. Restructuring the information architecture, reframing the UVP, and defining sector-specific user journeys had more business impact than any visual choice. A good designer should always know the difference.",
                    "Research earns trust - Starting with a heuristic evaluation and stakeholder interviews gave every design decision a defensible rationale. It shifted the conversation from opinion to evidence, which made stakeholder alignment significantly faster.",
                    "AI accelerates, but judgment ships - Using AI to prototype faster was only valuable because the team had the design literacy to critique and refine the output. Speed without taste produces noise.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[0.45em] w-2 h-2 rounded-full flex-shrink-0 bg-[#c8f135]" />
                      <span className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <MoreCaseStudies currentId="digitalqatalyst" onNavigate={onNavigate} />

        </main>
      </div>
    );
  }

  // ── Full DFSA layout ───────────────────────────────────────────
  const problems = project.problems ?? [];

  return (
    <div
      className="min-h-screen bg-white text-neutral-700"
      style={{ fontFamily: MO, fontWeight: 300 }}
    >

      <main id="case-study-content">

      {/* ── Dark Hero ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        className="relative bg-[#1a1a1a] overflow-hidden"
        style={{ minHeight: "clamp(320px, 48vw, 520px)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] rounded-full bg-red-900/20 blur-[120px]" />
        </div>
        <div className="relative flex items-center justify-center w-full h-full px-10 sm:px-24 lg:px-40" style={{ minHeight: "clamp(320px, 48vw, 520px)" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: 0.2 }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              <div style={{ filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.7))" }}>
                <img
                  src={dfsaHero}
                  alt="DFSA EBPP Platform"
                  className="w-full block rounded-lg"
                  style={{ height: "clamp(280px, 42vw, 460px)", objectFit: "contain", imageRendering: "crisp-edges" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Editorial header: title + metadata ── */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0, 0, 1], delay: 0.1 }}
        className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-14 sm:pt-20 lg:pt-28 pb-0"
      >
        <h1
          className="tracking-tight max-w-5xl text-neutral-900"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 500, lineHeight: 1.12, fontFamily: MO }}
        >
          {project.title}
        </h1>

        <div className="border-t border-neutral-900/15 mt-10 sm:mt-14" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 py-8 sm:py-10">
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Product" value={project.product} />
          <MetaItem label="Year" value="2025" />
          <div className="sm:pl-8 lg:pl-12">
            <div className="text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase mb-2" style={{ fontFamily: MO, fontWeight: 400 }}>Tools</div>
            <div className="flex items-center gap-3">
              <FigmaLogo />
            </div>
          </div>
        </div>

      </motion.section>

      {/* ── About the project ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        <h2
          className="tracking-tight mb-10 sm:mb-14 text-neutral-900"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
        >
          About the project
        </h2>
        <div className="space-y-5">
          <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
            The Dubai Financial Services Authority (DFSA) regulates financial institutions operating in the DIFC. As part of a digital transformation initiative, the organisation needed to modernise how regulated entities apply for licenses, receive invoices, and complete payment, replacing a fragmented, manual process with a unified electronic billing experience.
          </p>
          <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
            I was brought on to design three interconnected user flows: a customer-facing web portal (Stage 02), a business user experience inside Microsoft Dynamics CRM (Stage 03), and a finance user experience inside Dynamics ERP.
          </p>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        <h2
          className="tracking-tight mb-10 sm:mb-14 text-neutral-900"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 500, lineHeight: 1.15, fontFamily: MO }}
        >
          The problem
        </h2>
        <p
          className="text-neutral-600 leading-relaxed mb-6"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
        >
          Manual processes causing costly delays
        </p>

        {/* Stats — typographic, no cards */}
        <div className="grid grid-cols-3 gap-0 mb-10 border-t border-b border-neutral-900/10 divide-x divide-neutral-900/10 py-8">
          {[
            { stat: "~2 mo", label: "Average delay in payment reconciliation" },
            { stat: "3 teams", label: "Hand-offs across customer, CRM & ERP" },
            { stat: "0%", label: "Automation in fee calculation at project start" },
          ].map((item) => (
            <div key={item.stat} className="px-6 first:pl-0 last:pr-0">
              <div
                className="text-neutral-900 mb-1.5"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontFamily: MO, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {item.stat}
              </div>
              <div
                className="text-neutral-500 leading-snug"
                style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-4">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-[0.4em] w-2 h-2 rounded-full flex-shrink-0 bg-amber-500" />
              <span
                className="text-neutral-700 leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Cream background wrapper: Design Process → Footer ── */}
      <div className="bg-[#f7f5f0]">

      {/* ── Design process ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="tracking-tight text-neutral-900 mb-2"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 500, lineHeight: 1.1, fontFamily: MO }}
          >
            The Design Process
          </h2>
          <p
            className="text-neutral-400 mb-5 uppercase tracking-widest"
            style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", fontFamily: MO, fontWeight: 500 }}
          >
            AI-led Double Diamond
          </p>
          <p
            className="text-neutral-500 leading-relaxed mx-auto"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            Rather than a traditional Double Diamond, this project used an AI-augmented approach, using AI tools to accelerate synthesis, structure requirements faster, and generate initial flow models that the team then critiqued and refined.
          </p>
        </div>

        {/* Double Diamond diagram */}
        <div className="bg-[#edeae3] rounded-2xl p-4 sm:p-8 overflow-x-auto">
          <svg
            viewBox="0 0 900 360"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full min-w-[640px]"
          >
            {/* ── Diamonds ── */}
            <polygon points="20,180 230,28 440,180 230,332" fill="none" stroke="#bbb8b0" strokeWidth="1.5" strokeDasharray="7,5" />
            <polygon points="440,180 650,28 860,180 650,332" fill="none" stroke="#bbb8b0" strokeWidth="1.5" strokeDasharray="7,5" />

            {/* ── Horizontal spine ── */}
            <line x1="20" y1="180" x2="860" y2="180" stroke="#bbb8b0" strokeWidth="1" />

            {/* ── Phase labels ── */}
            {/* DISCOVER */}
            <text x="58" y="110" fill="#6b6760" fontSize="10" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400" letterSpacing="2.5">DISCOVER</text>
            <text x="66" y="124" fill="#9b9890" fontSize="9" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300" fontStyle="italic">Diverging</text>
            {/* DEFINE */}
            <text x="342" y="88" fill="#6b6760" fontSize="10" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400" letterSpacing="2.5">DEFINE</text>
            <text x="342" y="102" fill="#9b9890" fontSize="9" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300" fontStyle="italic">Converging</text>
            {/* IDEATE */}
            <text x="470" y="110" fill="#6b6760" fontSize="10" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400" letterSpacing="2.5">IDEATE</text>
            <text x="474" y="124" fill="#9b9890" fontSize="9" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300" fontStyle="italic">Diverging</text>
            {/* IMPLEMENT */}
            <text x="762" y="95" fill="#6b6760" fontSize="10" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400" letterSpacing="2.5">IMPLEMENT</text>
            <text x="776" y="109" fill="#9b9890" fontSize="9" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300" fontStyle="italic">Converging</text>

            {/* ── Left diamond nodes ── */}
            {/* Node 1 — Assumptions */}
            <ellipse cx="115" cy="180" rx="62" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="115" y="184" textAnchor="middle" fill="#7a7770" fontSize="9" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Assumptions</text>

            {/* Node 2 — Understanding the problem */}
            <ellipse cx="248" cy="180" rx="72" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="248" y="176" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Understanding</text>
            <text x="248" y="187" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">the problem</text>

            {/* Node 3 — User Stories (Prioritized) — amber */}
            <ellipse cx="385" cy="180" rx="64" ry="22" fill="#f59e0b" stroke="none" />
            <text x="385" y="176" textAnchor="middle" fill="#1c1917" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400">User Stories</text>
            <text x="385" y="187" textAnchor="middle" fill="#1c1917" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400">(Prioritized)</text>

            {/* ── Right diamond nodes ── */}
            {/* Node 4 — Lean UX Workshop */}
            <ellipse cx="480" cy="180" rx="52" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="480" y="176" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Lean UX</text>
            <text x="480" y="187" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Workshop</text>

            {/* Node 5 — LoFi Wireframes */}
            <ellipse cx="567" cy="180" rx="46" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="567" y="176" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">LoFi</text>
            <text x="567" y="187" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Wireframes</text>

            {/* Node 6 — User Testing */}
            <ellipse cx="648" cy="180" rx="46" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="648" y="176" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">User</text>
            <text x="648" y="187" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Testing</text>

            {/* Node 7 — Functional Workshop */}
            <ellipse cx="735" cy="180" rx="52" ry="22" fill="white" stroke="#ccc9c2" strokeWidth="1" />
            <text x="735" y="176" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Functional</text>
            <text x="735" y="187" textAnchor="middle" fill="#7a7770" fontSize="8.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Workshop</text>

            {/* Node 8 — Hi-Fi Design and Development — amber */}
            <ellipse cx="828" cy="180" rx="58" ry="22" fill="#f59e0b" stroke="none" />
            <text x="828" y="173" textAnchor="middle" fill="#1c1917" fontSize="8" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400">Hi-Fi Design</text>
            <text x="828" y="183" textAnchor="middle" fill="#1c1917" fontSize="8" fontFamily="Montserrat,Inter,sans-serif" fontWeight="400">and Development</text>

            {/* ── Prototype labels (above & below right spine) ── */}
            <text x="610" y="150" textAnchor="middle" fill="#9b9890" fontSize="8" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Prototype</text>
            <path d="M 590 153 Q 610 145 630 153" stroke="#bbb8b0" strokeWidth="1" fill="none" />
            <text x="610" y="220" textAnchor="middle" fill="#9b9890" fontSize="8" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Prototype</text>
            <path d="M 590 216 Q 610 224 630 216" stroke="#bbb8b0" strokeWidth="1" fill="none" />

            {/* ── Constant Iteration arc ── */}
            <text x="688" y="144" textAnchor="middle" fill="#9b9890" fontSize="8" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Constant Iteration</text>
            <path d="M 650 148 Q 688 138 726 148" stroke="#bbb8b0" strokeWidth="1" fill="none" strokeDasharray="3,2" />

            {/* ── Sub-labels below nodes ── */}
            {/* Below Assumptions */}
            <text x="115" y="210" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Assumption hypothesis</text>
            <text x="115" y="220" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">from design brief</text>

            {/* Below Understanding */}
            <text x="248" y="210" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">User research (interviews)</text>
            <text x="248" y="220" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Surveys · Competitor analysis</text>

            {/* Below Functional Workshop */}
            <text x="735" y="210" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Present wireframes</text>
            <text x="735" y="220" textAnchor="middle" fill="#a0a09a" fontSize="7.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">and process to stakeholders</text>

            {/* ── Bottom phase labels ── */}
            <text x="230" y="348" textAnchor="middle" fill="#9b9890" fontSize="9.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Research</text>
            <text x="650" y="348" textAnchor="middle" fill="#9b9890" fontSize="9.5" fontFamily="Montserrat,Inter,sans-serif" fontWeight="300">Create</text>
          </svg>
        </div>
      </section>

      {/* ── Phase 1: Discovery ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        {/* Badge + rule */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            Discovery
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>

        {/* White card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12 mb-8">
          <h3
            className="text-neutral-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Understanding the Problem
          </h3>
          <p
            className="text-neutral-700 leading-relaxed mb-8"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            Discovery involved stakeholder interviews across three user groups, review of the existing FSR (Functional Specification Report), and analysis of the current-state workflow in Dynamics CRM and ERP. Key activities included:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              {
                lead: "Stakeholder sessions",
                body: "with the business user, finance user, and customer service teams surfaced the disconnect: each group operated in isolation with no shared visibility of the order-to-cash cycle.",
              },
              {
                lead: "Process archaeology",
                body: "revealed that the existing flow moved from application submission → manual quote generation → paper invoice → bank transfer → manual reconciliation, with no digital feedback loop at any stage.",
              },
              {
                lead: "Technical audit of Dynamics 365",
                body: "confirmed that OOB (out-of-box) entities for Quotes, Sales Orders, and Invoices could cover 80%+ of the required data model, minimising custom development.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[0.45em] w-2 h-2 rounded-full flex-shrink-0 bg-amber-400" />
                <span className="text-neutral-700 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}>
                  <span style={{ fontWeight: 500 }}>{item.lead}</span>{" "}{item.body}
                </span>
              </li>
            ))}
          </ul>
          <div className="mx-auto" style={{ maxWidth: "288px" }}>
            <img
              src={problemSvg}
              alt="Understanding the problem illustration"
              className="w-full h-auto block" loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>

        {/* Below-card paragraph — removed, content now in card */}
      </section>

      {/* ── Phase 2: Define ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        {/* Badge + rule */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            Define
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>

        {/* White card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
          <h3
            className="text-neutral-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Problem Statement
          </h3>
          <p
            className="text-neutral-700 leading-relaxed mb-7"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            The Define phase was all about making sense of the data and insights collected during discovery. Based on
            the research synthesis, I framed the following problem statement to guide the design process.
          </p>

          {/* Blockquote */}
          <blockquote
            className="border-l-4 border-amber-400 pl-6 py-4 rounded-r-xl mb-7"
            style={{ backgroundColor: "#fefce8" }}
          >
            <p
              className="text-neutral-700 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
            >
              "DFSA-regulated entities experience frustrating delays and opacity in the fee invoicing process because manual hand-offs between customer, CRM, and ERP teams create information gaps, errors, and reconciliation lag, resulting in up to 2 months of payment delay and loss of trust in the regulatory process."
            </p>
          </blockquote>

          <p
            className="text-neutral-700 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            This problem statement served as the foundation for ideation and ensured that all design decisions
            balanced regulatory effectiveness with user experience for both supervisors and supervised firms.
          </p>
        </div>

        {/* ── Product Vision and Solution card ── */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12 mt-5">
          <h3
            className="text-neutral-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Product Vision and Solution
          </h3>

          {/* Intro */}
          <p
            className="text-neutral-700 leading-relaxed mb-5"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            Design a unified EBPP experience that automates the end-to-end order-to-cash cycle across three platforms, with each user persona empowered by purpose-built interfaces that fit their existing tooling.
          </p>

          {/* Numbered goals */}
          <ol className="space-y-3 mb-8 pl-1">
            {[
              "Reduce manual data validation time by 70% through automated compliance checks.",
              "Decrease regulatory submission error rates from 40% to under 5%.",
              "Enable real-time risk monitoring with automated alerts for supervisory interventions.",
            ].map((goal, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-neutral-700 leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
              >
                <span className="flex-shrink-0 text-amber-500" style={{ fontWeight: 400 }}>{i + 1}.</span>
                {goal}
              </li>
            ))}
          </ol>

          {/* Transition paragraph */}
          <p
            className="text-neutral-700 leading-relaxed mb-7"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            After analyzing research insights and stakeholder meetings, we narrowed down to 3 user stories I was supposed to solve for:
          </p>

          {/* Table subheading */}
          <p
            className="text-neutral-700 mb-4"
            style={{ fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)", fontFamily: MO, fontWeight: 400 }}
          >
            User stories and solutions
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full text-left border-collapse" style={{ fontFamily: MO, fontWeight: 300 }}>
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-3 text-neutral-700 border-r border-neutral-200" style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)", fontWeight: 400, width: "12%" }}>
                    User
                  </th>
                  <th className="px-5 py-3 text-neutral-700 border-r border-neutral-200" style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)", fontWeight: 400, width: "44%" }}>
                    User Story
                  </th>
                  <th className="px-5 py-3 text-neutral-700" style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)", fontWeight: 400 }}>
                    Solution (feature)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    persona: "Customer",
                    story: "I want to submit my application and track its status without chasing emails.",
                    solution: "Self-service portal with real-time status & invoice view.",
                  },
                  {
                    persona: "Business",
                    story: "I want fee calculation to be automatic so I can focus on review, not arithmetic.",
                    solution: "Configurable fee rules engine in Dynamics CRM.",
                  },
                  {
                    persona: "Business",
                    story: "I need a single place to approve quotes and convert them to sales orders.",
                    solution: "Streamlined CRM quote-to-order flow with approval workflow.",
                  },
                  {
                    persona: "Finance",
                    story: "I need invoices to auto-generate from approved sales orders, not be emailed to me.",
                    solution: "CRM to ERP auto-invoice generation via API integration.",
                  },
                  {
                    persona: "Finance",
                    story: "I want payment matching to happen automatically so I can close books faster.",
                    solution: "Bank API integration for automated payment reconciliation.",
                  },
                  {
                    persona: "Customer",
                    story: "I want to know immediately when my application is accepted after I pay.",
                    solution: "Automated status notifications triggered by ERP payment update.",
                  },
                ].map((row, i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? "border-b border-neutral-200" : ""}>
                    <td className="px-5 py-4 border-r border-neutral-200 align-top" style={{ fontSize: "clamp(0.78rem, 1.4vw, 0.85rem)", fontWeight: 500, color: "#92400e" }}>
                      <span className="inline-block bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full text-[11px] tracking-wide" style={{ fontFamily: MO, fontWeight: 500 }}>
                        {row.persona}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-neutral-700 leading-relaxed border-r border-neutral-200 align-top" style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)", fontWeight: 300 }}>
                      {row.story}
                    </td>
                    <td className="px-5 py-4 text-neutral-500 leading-relaxed align-top" style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.92rem)", fontWeight: 300 }}>
                      {row.solution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* ── Phase 3: Ideate ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        {/* Badge + rule */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            Ideate
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>

        {/* Intro paragraph (outside card) */}
        <p
          className="text-neutral-700 leading-relaxed mb-8"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
        >
          The Ideate Phase was a dynamic process where I brainstormed and explored multiple design directions,
          collaborating closely with DFSA supervisors, compliance teams at regulated firms, and engineering to translate research insights into concrete solutions that enhanced regulatory effectiveness while reducing compliance burden.
        </p>

        {/* White card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12">
          <h3
            className="text-neutral-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Translating Insights into Solutions
          </h3>

          <p
            className="text-neutral-700 leading-relaxed mb-7"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            The core design decision was to unify three existing tool ecosystems rather than introduce new software. The EBPP experience would live natively inside each platform, meaning no new logins, no training overhead, and no context switching for internal users.
          </p>

          {/* Bullet list */}
          {/* Screenshot */}
          <div className="mx-auto" style={{ maxWidth: "288px" }}>
            <img
              src={insightsSvg}
              alt="Translating insights into solutions diagram"
              className="w-full h-auto block" loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>

        {/* ── Swimlane Diagram card ── */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12 mt-5">
          <h3
            className="text-neutral-900 mb-5 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Swimlane Diagram
          </h3>

          <p
            className="text-neutral-700 leading-relaxed mb-8"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            After aligning on early concepts with stakeholders, I mapped out the full information architecture for
            the intake flow, defining every screen, branching condition, and handoff point, so that the structure
            would serve as a reliable backbone before any pixel-level design began.
          </p>

          <div className="rounded-xl overflow-hidden bg-[#f0ede6]">
            <ImageWithFallback
              src={dfsaSwimlaneDiagram}
              alt="DFSA EBPP swimlane diagram showing the order-to-cash flow across customer, CRM and ERP"
              className="w-full object-cover"
              width={1080}
              height={720}
            />
          </div>
        </div>

        {/* ── Crafting High Fidelity Designs card ── */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 lg:p-12 mt-5">
          <h3
            className="text-neutral-700 mb-6 tracking-tight"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 500, lineHeight: 1.2, fontFamily: MO }}
          >
            Crafting High Fidelity Designs
          </h3>

          <div className="space-y-5 mb-10">
            <p
              className="text-neutral-700 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
            >
              With the swimlane flow agreed and the OOB entity mapping confirmed, design moved into high fidelity. Each of the three interfaces was designed independently but shared a common vocabulary: the same data model, the same status labels, and the same order-to-cash sequence, so that what a customer sees in the portal maps directly to what the business user sees in CRM and what the finance user sees in ERP.
            </p>
            <p
              className="text-neutral-700 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
            >
              The visual approach was kept clean and functional. These are professional tools used daily by regulated-industry staff, so the priority was clarity, density, and confidence, not decoration. Each screen was reviewed against the RSR to ensure field names, validation rules, and workflow states matched the agreed specification exactly.
            </p>
            <p
              className="text-neutral-700 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
            >
              Iterative reviews were held with each user group separately: the customer service team reviewed the portal, the business team reviewed the CRM flows, and the finance team reviewed the ERP screens. Feedback from each round was incorporated before moving to the next milestone.
            </p>
          </div>

          {/* ── EBPP - Stage 02 feature callout ── */}
          <div className="mb-8">
            <p
              className="mb-4"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
            >
              EBPP - Stage 02
            </p>
            <p
              className="text-neutral-400 mb-4"
              style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}
            >
              Customer · Web Portal
            </p>
            <p
              className="text-neutral-700 leading-relaxed mb-8"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", fontFamily: MO, fontWeight: 300 }}
            >
              The customer-facing web portal gives regulated entities a single place to submit their license application, track its progress in real time, view their invoice, and confirm payment, without needing to call or email the DFSA. Status updates are triggered automatically by downstream CRM and ERP events, so the customer always sees the current state of their application.
            </p>

            <div className="rounded-xl overflow-hidden bg-white border border-neutral-100 mb-3">
              <img
                src={ebppStage02}
                alt="EBPP Stage 02 customer-facing web portal design"
                className="w-full h-auto block" loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>

          {/* ── EBPP - CRM feature callout ── */}
          <div className="mb-8">
            <p
              className="mb-4"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
            >
              EBPP - CRM
            </p>
            <p
              className="text-neutral-400 mb-4"
              style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}
            >
              Business User · Dynamics CRM
            </p>
            <p
              className="text-neutral-700 leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", fontFamily: MO, fontWeight: 300 }}
            >
              The CRM experience is built natively inside Dynamics 365 Sales. Business users receive a new application, trigger the configurable fee rules engine to auto-calculate the quote, review and approve it, then convert it to a sales order in a single workflow, with no manual data entry or spreadsheet hand-off. The approved sales order then triggers invoice generation in ERP automatically via API.
            </p>
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-100">
              <img
                src={ebppCRM}
                alt="EBPP CRM business user experience inside Microsoft Dynamics CRM"
                className="w-full h-auto block" loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>

          {/* ── EBPP - ERP feature callout ── */}
          <div className="mb-8">
            <p
              className="mb-4"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
            >
              EBPP - ERP
            </p>
            <p
              className="text-neutral-400 mb-4"
              style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.875rem)", fontFamily: MO, fontWeight: 400 }}
            >
              Finance User · Dynamics ERP
            </p>
            <p
              className="text-neutral-700 leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", fontFamily: MO, fontWeight: 300 }}
            >
              The ERP experience handles the financial close. Invoices arrive automatically from CRM, are posted to the correct ledger accounts, and sit in a reconciliation queue. When a bank transfer is received, the bank API integration matches it to the open invoice and marks it as settled, removing the manual matching step entirely. Finance users can see the full payment status at a glance and close the period without chasing confirmations.
            </p>
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-100">
              <img
                src={ebppERP}
                alt="EBPP ERP finance user experience inside Dynamics ERP"
                className="w-full h-auto block" loading="lazy"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Phase 4: Implement ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        {/* Badge + rule */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            Implement
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>

        {/* Intro paragraph */}
        <p
          className="text-neutral-700 leading-relaxed mb-8"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
        >
          In this phase, I focused on refining the high-fidelity designs, creating interactive prototypes,
          and preparing comprehensive documentation for the development team.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 shadow-sm">
          <p
            className="mb-6"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
          >
            Final Interactive Prototype
          </p>
          <PrototypeEmbed src="https://embed.figma.com/proto/z5RSC2rb9UHSknv0EyTdQE/DFSA-Rebuild?node-id=2006-16383&scaling=scale-down-width&content-scaling=fixed&page-id=1984%3A17795&starting-point-node-id=2006%3A16091&show-proto-sidebar=1&embed-host=share" />
        </div>

        {/* Developer Handoff card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 shadow-sm mt-6">
          <p
            className="mb-5"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
          >
            Developer Handoff
          </p>
          <p
            className="text-neutral-700 leading-relaxed mb-8"
            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)", fontFamily: MO, fontWeight: 400 }}
          >
            Handoff documentation was structured to align with the two implementation tracks defined in the LLAD (Low-Level Architecture Design): the Sales &amp; Customer Service modules and the Finance &amp; Operations modules.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                label: "Component specifications",
                body: "All screens annotated with OOB entity mappings, field names, and business rules from the RSR.",
              },
              {
                label: "Interaction states",
                body: "Loading, error, success, and empty states defined for every major screen.",
              },
              {
                label: "Integration points",
                body: "API trigger points marked on flows: CRM to ERP sync, bank API reconciliation, portal notification hooks.",
              },
              {
                label: "Custom entity flags",
                body: "Any UI element requiring custom Dynamics entity development explicitly flagged with rationale.",
              },
            ].map((item) => (
              <div key={item.label} className="border border-neutral-100 rounded-xl p-5 bg-neutral-50">
                <p className="text-neutral-900 mb-1.5" style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", fontFamily: MO, fontWeight: 500 }}>
                  {item.label}
                </p>
                <p className="text-neutral-500 leading-relaxed" style={{ fontSize: "clamp(0.82rem, 1.4vw, 0.9rem)", fontFamily: MO, fontWeight: 400 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phase 5: Success Metrics ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14">
        {/* Badge + rule */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            Success Metrics
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>

        {/* Results card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 shadow-sm">
          <p
            className="mb-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
          >
            Results
          </p>
          <p
            className="text-neutral-400 mb-8"
            style={{ fontSize: "clamp(0.82rem, 1.4vw, 0.9rem)", fontFamily: MO, fontWeight: 400 }}
          >
            How we'll know it's working
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                stat: "≤5d",
                title: "Target payment reconciliation time",
                body: "Down from ~2 months",
                tag: "↓ 93% reduction",
                tagColor: "text-emerald-700 bg-emerald-50",
              },
              {
                stat: "0",
                title: "Manual bank transfer matching steps",
                body: "Fully automated",
                tag: "↓ fully automated",
                tagColor: "text-emerald-700 bg-emerald-50",
              },
              {
                stat: "100%",
                title: "Invoice auto-generation rate",
                body: "Sales order to ERP",
                tag: "↑ from 0%",
                tagColor: "text-emerald-700 bg-emerald-50",
              },
              {
                stat: "CSAT",
                title: "Customer satisfaction score",
                body: "On billing experience, tracked quarterly",
                tag: "new metric",
                tagColor: "text-neutral-500 bg-neutral-100",
              },
            ].map((metric) => (
              <div key={metric.title} className="border border-neutral-100 rounded-xl p-4 flex flex-col gap-2 bg-neutral-50">
                <div
                  className="text-neutral-900"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontFamily: MO, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {metric.stat}
                </div>
                <div>
                  <p className="text-neutral-800 mb-0.5" style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.82rem)", fontFamily: MO, fontWeight: 500 }}>
                    {metric.title}
                  </p>
                  <p className="text-neutral-400" style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.78rem)", fontFamily: MO, fontWeight: 400 }}>
                    {metric.body}
                  </p>
                </div>
                <span className={`self-start text-[10px] px-2 py-0.5 rounded-full tracking-wide ${metric.tagColor}`} style={{ fontFamily: MO, fontWeight: 500 }}>
                  {metric.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways card */}
        <div className="bg-white rounded-2xl p-5 sm:p-10 shadow-sm mt-6">
          <p
            className="mb-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontFamily: MO, fontWeight: 600, color: "#1c1917" }}
          >
            Key Takeaways
          </p>
          <p
            className="text-neutral-400 mb-6"
            style={{ fontFamily: MO, fontWeight: 300, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
          >
            What I learnt
          </p>
          <ul className="flex flex-col gap-5">
            {[
              {
                lead: "Designing across three platforms demands radical consistency in the mental model.",
                body: " Even though the UI patterns differ, the data flow and vocabulary had to be identical across all three.",
              },
              {
                lead: "Minimising customisation isn't just a cost decision.",
                body: " It also accelerates design, because OOB entities come with well-understood data constraints that reduce ambiguity.",
              },
              {
                lead: "AI-assisted synthesis significantly shortened the discovery-to-define phase.",
                body: " Using AI to structure requirements and generate initial flow scaffolds freed up time for higher-quality stakeholder review cycles.",
              },
              {
                lead: "Getting finance, business, and product stakeholders aligned on the same user journey diagram early prevented costly rework later.",
                body: " The swim-lane flow became the shared language across all teams.",
              },
              {
                lead: "The handoff format matters.",
                body: " Structuring documentation around the two LLAD tracks (Sales/CS vs Finance/Ops) meant developers could work in parallel without blocking each other.",
              },
            ].map((item) => (
              <li key={item.lead} className="flex gap-3 items-start">
                <span className="mt-[0.45em] w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <p
                  className="text-neutral-600 leading-relaxed"
                  style={{ fontFamily: MO, fontWeight: 300, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                >
                  <span style={{ fontWeight: 500, color: "#1c1917" }}>{item.lead}</span>
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      </div>{/* end cream wrapper */}

      {/* ── More Case Studies ── */}
      <MoreCaseStudies currentId="dfsa" onNavigate={onNavigate} />

      </main>

    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────

function MoreCaseStudies({ currentId, onNavigate }: { currentId: string; onNavigate: (id: string) => void }) {
  const all = [
    { id: "dfsa", title: "DFSA Electronic Bill Presentment & Payment (EBPP) Platform Design", category: "Web App", image: dfsaCard, bg: "bg-[#e8f5ee]" },
    { id: "digitalqatalyst", title: "DigitalQatalyst Corporate Website Redesign", category: "Website", image: dqCard, bg: "bg-[#f5ede0]" },
    { id: "civic", title: "Khalifa Fund Enterprise Journey Platform", category: "Web App", image: kfCard, bg: "bg-[#e0edf5]" },
  ].filter((p) => p.id !== currentId);

  return (
    <section className="bg-white py-16 sm:py-20 px-5 sm:px-10 lg:px-[100px] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span
            className="bg-amber-400 text-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs tracking-widest uppercase flex-shrink-0"
            style={{ fontFamily: MO, fontWeight: 500 }}
          >
            More Case Studies
          </span>
          <div className="flex-1 h-px bg-neutral-900/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {all.map((p) => (
            <article
              key={p.id}
              onClick={() => { onNavigate(p.id); window.scrollTo(0, 0); }}
              className="group cursor-pointer bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              aria-label={`Case study: ${p.title}`}
            >
              <div className={`${p.bg} aspect-[4/3] overflow-hidden`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-neutral-400 mb-2 text-[11px] uppercase tracking-widest" style={{ fontFamily: MO, fontWeight: 500 }}>
                  {p.category}
                </p>
                <h3 className="text-neutral-800 group-hover:text-amber-700 transition-colors leading-snug" style={{ fontFamily: MO, fontWeight: 600, fontSize: "clamp(0.9rem, 1.6vw, 1rem)" }}>
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrototypeEmbed({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start loading the iframe when it's 800px away from the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-neutral-200 relative bg-neutral-50" style={{ aspectRatio: "16/9" }}>
      {/* Skeleton shown until loaded */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-neutral-200 border-t-amber-400 animate-spin" />
            <p style={{ fontFamily: MO, fontSize: "0.8rem", fontWeight: 400, color: "#a3a3a3" }}>
              Loading prototype…
            </p>
          </div>
          <p style={{ fontFamily: MO, fontSize: "0.72rem", fontWeight: 400, color: "#c4c4c4" }}>
            Hosted on Figma · may take a few seconds
          </p>
        </div>
      )}
      {shouldLoad && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: "none", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  noBorder = false,
  children,
}: {
  eyebrow: string;
  title?: string;
  noBorder?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`max-w-7xl mx-auto px-5 sm:px-10 lg:px-[100px] py-16 sm:py-20 lg:py-24${noBorder ? "" : " border-t border-neutral-900/10"}`}>
      <p
        className="text-amber-600 mb-3 sm:mb-4 text-xs tracking-widest uppercase"
        style={{ fontFamily: MO, fontWeight: 600 }}
      >
        {eyebrow}
      </p>
      {title && (
        <h2
          className="tracking-tight mb-10 sm:mb-12 text-neutral-900"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 500, lineHeight: 1.1, fontFamily: MO }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="sm:pl-8 lg:pl-12 first:pl-0">
      <div
        className="text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase mb-2"
        style={{ fontFamily: MO, fontWeight: 400 }}
      >
        {label}
      </div>
      <div
        className="text-neutral-700"
        style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)", fontFamily: MO, fontWeight: 400 }}
      >
        {value}
      </div>
    </div>
  );
}

function MetaDivider() {
  return <div className="hidden sm:block w-px bg-neutral-900/10 self-stretch" />;
}

// ── Tool Logos ────────────────────────────────────────────────────

function FigmaLogo() {
  return (
    <svg title="Figma" width="20" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 42H19V53C19 56.31 16.31 59 13 59H13C9.69 59 7 56.31 7 53V43C7 42.45 7.45 42 8 42Z" fill="#6b7280"/>
      <path d="M7 17C7 13.69 9.69 11 13 11H19V23H13C9.69 23 7 20.31 7 17Z" fill="#6b7280"/>
      <path d="M7 29C7 25.69 9.69 23 13 23H19V35H13C9.69 35 7 32.31 7 29Z" fill="#6b7280"/>
      <path d="M19 11H25C28.31 11 31 13.69 31 17C31 20.31 28.31 23 25 23H19V11Z" fill="#6b7280"/>
      <circle cx="25" cy="29" r="6" fill="#6b7280"/>
    </svg>
  );
}

function MiroLogo() {
  return (
    <svg title="Miro" width="20" height="20" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52.4 14H43L50.2 28.6L34.6 14H25.2L32.4 28.6L16.8 14H7L22 39L7 64H16.4L32 49.4L24.8 64H34.2L49.8 49.4L42.6 64H52L67 39L52.4 14Z" fill="#6b7280"/>
    </svg>
  );
}

function TeamsLogo() {
  return (
    <svg title="Microsoft Teams" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="7" width="14" height="14" rx="2.5" fill="#6b7280"/>
      <path d="M9.5 10H4.5V11.5H6.25V16H7.75V11.5H9.5V10Z" fill="white"/>
      <circle cx="18" cy="6" r="3.5" fill="#6b7280"/>
      <rect x="13" y="10" width="9" height="7" rx="2" fill="#6b7280"/>
      <path d="M15 13H19M15 15H17" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

function ToolLogo({ name }: { name: string }) {
  if (name === "Figma") return <FigmaLogo />;
  if (name === "Miro") return <MiroLogo />;
  if (name === "Teams") return <TeamsLogo />;
  return <span className="text-xs text-neutral-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>{name}</span>;
}


// ── Device Mockups ────────────────────────────────────────────────

function DeviceLaptop({ src }: { src: string }) {
  return (
    <div className="flex flex-col items-center" style={{ width: "clamp(280px, 50vw, 680px)" }}>
      <div
        className="relative bg-neutral-800 rounded-t-xl overflow-hidden border-4 border-neutral-700 w-full"
        style={{ aspectRatio: "16/10" }}
      >
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-600 z-10" />
        <div className="absolute inset-0 mt-4">
          <ImageWithFallback src={src} alt="Laptop screen" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>
      <div className="w-full h-[6px] bg-neutral-700 rounded-none" />
      <div className="bg-neutral-700 rounded-b-2xl" style={{ width: "112%", height: "clamp(10px, 1.5vw, 22px)" }} />
      <div className="bg-neutral-800 rounded-b-xl" style={{ width: "28%", height: "clamp(6px, 0.8vw, 12px)", marginTop: 0 }} />
    </div>
  );
}

function DevicePhone({ src }: { src: string }) {
  return (
    <div
      className="relative bg-neutral-800 rounded-3xl border-4 border-neutral-700 overflow-hidden flex-shrink-0"
      style={{ width: "clamp(80px, 10vw, 160px)", aspectRatio: "9/19" }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-neutral-900 rounded-full z-10" />
      <div className="absolute inset-0 mt-5">
        <ImageWithFallback src={src} alt="Phone screen" className="w-full h-full object-cover object-top" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-neutral-600 rounded-full" />
    </div>
  );
}

function DeviceTablet({ src }: { src: string }) {
  return (
    <div
      className="relative bg-neutral-800 rounded-2xl border-4 border-neutral-700 overflow-hidden flex-shrink-0"
      style={{ width: "clamp(140px, 18vw, 260px)", aspectRatio: "3/4" }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-600 z-10" />
      <div className="absolute inset-0 mt-5">
        <ImageWithFallback src={src} alt="Tablet screen" className="w-full h-full object-cover object-top" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-neutral-600 rounded-full" />
    </div>
  );
}