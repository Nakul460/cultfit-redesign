import { motion, useReducedMotion } from "motion/react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Vortex from "@/components/ui/vortex";

const stats = [
  { value: "10M+", label: "Members trained", icon: "bi-people-fill" },
  { value: "400+", label: "Centers across India", icon: "bi-geo-alt-fill" },
  { value: "50+", label: "Workout formats", icon: "bi-lightning-charge-fill" },
  { value: "4.8", label: "App store rating", icon: "bi-star-fill" },
];

const reasons = [
  {
    icon: "bi-trophy-fill",
    title: "Expert-led programs",
    description: "Every class is designed and delivered by certified trainers who know how to push you safely.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Track everything",
    description: "Energy meters, workout logs, and progress dashboards keep you accountable and motivated.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Switch anytime",
    description: "Move between centers, formats, and schedules. Your membership adapts to your life, not the other way around.",
  },
];

export default function WhySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#0a0a0a] py-20">
      {/* Stats row with vortex background */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a0a0a]">
          {!shouldReduceMotion && (
            <Vortex
              particleCount={30}
              baseHue={25}
              className="absolute inset-0 opacity-40"
            />
          )}
          <div className="relative z-10 grid grid-cols-2 gap-6 p-8 md:grid-cols-4 md:p-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                className="text-center"
              >
                <i className={`bi ${stat.icon} mb-3 text-2xl text-orange-400`} aria-hidden="true" />
                <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-[#9a9a9a]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reasons with CardSpotlight */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.12 }}
            >
              <CardSpotlight
                color="rgba(255, 87, 34, 0.15)"
                radius={200}
                className="h-full rounded-2xl border-white/[0.06] bg-[#111111]"
              >
                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                    <i className={`bi ${reason.icon} text-lg text-orange-400`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9a9a9a]">{reason.description}</p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
