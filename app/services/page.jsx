import Link from "next/link";
import { FiArrowRight, FiCode, FiLayers, FiPenTool, FiZap } from "react-icons/fi";

import { Button } from "../../components/ui/button";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive marketing sites, portfolio builds, and interface-heavy pages that feel polished across desktop and mobile.",
    icon: <FiCode />,
    points: ["Next.js builds", "Tailwind styling systems", "Performance-minded UI polish"],
  },
  {
    title: "UI Design",
    description:
      "Clean, brand-aware interfaces with better hierarchy, stronger rhythm, and a clearer user experience from the first screen.",
    icon: <FiLayers />,
    points: ["Page structure and layout", "Component direction", "Design cleanup and refinement"],
  },
  {
    title: "Brand + Visual Design",
    description:
      "Visual systems that help small brands look more intentional, cohesive, and memorable across digital touchpoints.",
    icon: <FiPenTool />,
    points: ["Logo exploration", "Color and typography direction", "Graphics for web presence"],
  },
];

const process = [
  {
    step: "01",
    title: "Align",
    description:
      "We start with your goals, audience, references, and the pieces that need the most improvement first.",
  },
  {
    step: "02",
    title: "Shape",
    description:
      "I turn that direction into cleaner structure, visual hierarchy, and a more confident presentation.",
  },
  {
    step: "03",
    title: "Refine",
    description:
      "We tighten spacing, interactions, copy, and responsiveness so the final result feels considered instead of rushed.",
  },
];

const fit = [
  "Personal portfolio sites and redesigns",
  "Landing pages and brand-forward websites",
  "UI cleanup for existing frontend projects",
  "Design-to-code support for creative ideas",
];

export default function ServicesPage() {
  return (
    <section className="page-shell py-12 xl:py-16">
      <div className="section-wrap">
        <div className="glass-panel soft-grid overflow-hidden rounded-[2.5rem] p-8 md:p-10 xl:p-12">
          <div className="grid items-start gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:gap-14">
            <div>
              <span className="section-kicker">Services</span>
              <h1 className="section-title mt-5 max-w-4xl">
                Design-forward web work for people who want their site to feel sharper, clearer, and more professional.
              </h1>
              <p className="section-copy mt-5 max-w-[700px]">
                I help turn rough ideas, dated pages, and underwhelming layouts into portfolio sites and frontend experiences that feel more intentional. The focus is usually a mix of design cleanup, visual direction, and practical implementation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start a Project
                    <FiArrowRight className="text-lg" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="border border-[var(--border-soft)] bg-white/70 text-[var(--text)] shadow-none hover:-translate-y-0.5 hover:bg-white hover:text-black dark:bg-white/6 dark:text-[var(--text)]"
                >
                  <Link href="/work">See My Work</Link>
                </Button>
              </div>
            </div>

            <aside className="solid-panel rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl">
                  <FiZap />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">Best Fit</p>
                  <h2 className="mt-1 text-2xl font-black text-[var(--text)]">Projects I can help with</h2>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {fit.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-[var(--border-soft)] bg-white/6 px-4 py-4 leading-7 text-[var(--muted-text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-[2rem] p-6 md:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent)]">
                {service.icon}
              </div>
              <h2 className="mt-5 text-2xl font-black text-[var(--text)]">{service.title}</h2>
              <p className="mt-3 leading-8 text-[var(--muted-text)]">{service.description}</p>
              <ul className="mt-5 space-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-text)]">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] p-7 md:p-8">
            <span className="section-kicker">Process</span>
            <h2 className="mt-5 text-3xl font-black text-[var(--text)]">A simple way of working that keeps momentum moving.</h2>
            <p className="mt-4 leading-8 text-[var(--muted-text)]">
              I like collaborative projects, but I also try to make the process easy to follow. The goal is to keep communication clear, move quickly on the highest-value improvements, and end up with work that feels stronger than where it started.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="solid-panel rounded-[2rem] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">{item.step}</p>
                <h3 className="mt-4 text-2xl font-black text-[var(--text)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted-text)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="glass-panel rounded-[2rem] p-7 md:p-8">
            <span className="section-kicker">Next Step</span>
            <h2 className="mt-5 text-3xl font-black text-[var(--text)]">If you already know what you need, we can start with a quick message.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-[var(--muted-text)]">
              Send over what you are building, what feels off right now, and whether you need design, development, or both. I can help scope the right direction from there.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="h-fit bg-[var(--accent)] px-7 text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] p-4 font-bold"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
