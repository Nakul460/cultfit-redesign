import { motion, useReducedMotion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const plans = [
  {
    name: "cultpass",
    tier: "ELITE",
    popular: true,
    icon: (
      <i className="bi bi-lightning-charge-fill text-sm" aria-hidden="true" />
    ),
    price: "1,599",
    tagline: "Best value for serious fitness",
    features: [
      "Unlimited group classes",
      "Access to all ELITE & PRO gyms",
      "At-home live workouts",
      "Personalized workout plans",
    ],
    cta: "START FREE TRIAL",
  },
  {
    name: "cultpass",
    tier: "PRO",
    popular: false,
    icon: <i className="bi bi-shield-fill-check text-sm" aria-hidden="true" />,
    price: "1,199",
    tagline: "Gym-focused with extras",
    features: [
      "Unlimited access to all PRO gyms",
      "2 sessions/month at ELITE gyms",
      "At-home live workouts",
      "Energy meter tracking",
    ],
    cta: "START FREE TRIAL",
  },
  {
    name: "cultpass",
    tier: "PLAY",
    popular: false,
    icon: <i className="bi bi-play-circle text-sm" aria-hidden="true" />,
    price: "899",
    tagline: "Sports & activities focused",
    features: [
      "Badminton, swimming & sports",
      "Guaranteed playing partner",
      "Guided sessions with experts",
      "Community events",
    ],
    cta: "START FREE TRIAL",
  },
  {
    name: "cultpass",
    tier: "SELECT",
    popular: false,
    icon: <i className="bi bi-person-fill text-sm" aria-hidden="true" />,
    price: "699",
    tagline: "Single center access",
    features: [
      "Unlimited access to one center",
      "At-home live workouts",
      "Trainer-led group classes",
      "Flexible scheduling",
    ],
    cta: "START FREE TRIAL",
  },
];

export default function CultpassPlans() {
  const shouldReduceMotion = useReducedMotion();

  const newLocal = "border border-white/6";
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(10, 10, 10)"
      gradientBackgroundEnd="rgb(20, 10, 5)"
      firstColor="255, 107, 53"
      secondColor="255, 87, 34"
      thirdColor="255, 152, 0"
      fourthColor="244, 67, 54"
      fifthColor="255, 193, 7"
      pointerColor="255, 107, 53"
      size="60%"
      blendingValue="soft-light"
      interactive={true}
      containerClassName="relative min-h-[auto] w-full"
      className="relative z-10 flex flex-col items-center justify-center pt-12 pb-16 px-4"
    >
      <section
        id="plans"
        className="scroll-m-20 relative z-10 w-full max-w-6xl"
        aria-labelledby="pricing-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#a3a3a3]">
            cultpass
          </span>
          <h2
            id="pricing-heading"
            className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl max-w-xl mx-auto"
          >
            One membership. Every way you move.
          </h2>
          <p className="mx-auto max-w-md text-sm text-[#a3a3a3]">
            From high-energy group workouts to gym sessions and at-home
            training, find a membership built around how you like to move.
          </p>
        </motion.div>

        <div
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Pricing plans"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className={
                plan.popular ? "lg:scale-[1.03] lg:-translate-y-1" : ""
              }
            >
              <div
                className={`relative flex h-full flex-col rounded-xl bg-[#111111] p-5 overflow-hidden transition-shadow ${
                  plan.popular
                    ? "border border-orange-500/50 shadow-[0_8px_40px_rgba(255,87,34,0.12)]"
                    : newLocal
                }`}
                aria-label={`${plan.name} ${plan.tier} plan - ₹${plan.price} per month. ${plan.tagline}`}
              >
                {plan.popular && (
                  <div
                    className="absolute -right-6 top-3.5 rotate-45 bg-orange-500 px-10 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
                    aria-label="Most popular plan"
                  >
                    POPULAR
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <span
                    className={`${plan.popular ? "text-orange-400" : "text-[#a3a3a3]"} aria-hidden="true"`}
                    aria-hidden="true"
                  >
                    {plan.icon}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider ${plan.popular ? "text-orange-400" : "text-[#a3a3a3]"}`}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                      plan.popular
                        ? "bg-orange-500/15 text-orange-400"
                        : "bg-white/6 text-[#a3a3a3]"
                    }`}
                  >
                    {plan.tier}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-[#9a9a9a]">
                  {plan.tagline}
                </p>

                <div className="mt-3">
                  <span className="text-[10px] text-[#9a9a9a]">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#a3a3a3]">₹</span>
                    <span className="text-2xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#9a9a9a]">/mo</span>
                  </div>
                </div>

                <ul
                  className="mt-3 flex flex-1 flex-col gap-2"
                  aria-label={`${plan.tier} plan features`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[13px] text-[#c4c4c4]"
                    >
                      <i
                        className={`bi bi-check2 mt-0.5 text-sm shrink-0 ${plan.popular ? "text-orange-400" : "text-[#757575]"}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-white/6">
                  <button
                    className={`w-full rounded-lg py-2.5 text-sm font-bold transition-all duration-200 ${
                      plan.popular
                        ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,87,34,0.2)]"
                        : "bg-[#1c1c1c] text-[#d0d0d0] border border-white/8 hover:bg-[#222222] hover:text-white"
                    }`}
                    aria-label={`${plan.cta} for ${plan.tier} plan`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-[#9a9a9a]">
            All plans include 7-day free trial &bull; Cancel anytime
          </p>
          <p className="mt-1.5 text-[11px] text-[#757575]">
            No hidden fees &bull; Instant access after signup
          </p>
        </motion.div>
      </section>
    </BackgroundGradientAnimation>
  );
}
