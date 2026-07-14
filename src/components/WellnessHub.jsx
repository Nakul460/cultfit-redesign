import { motion, useReducedMotion } from "motion/react";

const products = [
  {
    name: "Resistance Bands Set",
    price: "₹899",
    image: "resistanceBand.jpeg",
  },
  {
    name: "Premium Yoga Mat",
    price: "₹1,499",
    image: "yogaMat.jpeg",
  },
  {
    name: "Foam Roller",
    price: "₹699",
    image: "foamRoller.jpeg",
  },
  {
    name: "Jump Rope Pro",
    price: "₹499",
    image: "jumpRope.jpeg",
  },
  {
    name: "Training Gloves",
    price: "₹1,199",
    image: "gloves.jpeg",
  },
  {
    name: "Shaker Bottle",
    price: "₹399",
    image: "shaker.jpeg",
  },
];

const gradientCircles = [
  {
    color: "rgba(255,87,34,0.12)",
    position: "top-10 left-1/4",
    size: "w-72 h-72",
  },
  {
    color: "rgba(251,191,36,0.10)",
    position: "top-20 right-1/4",
    size: "w-80 h-80",
  },
  {
    color: "rgba(6,182,212,0.08)",
    position: "bottom-10 left-1/3",
    size: "w-64 h-64",
  },
];

export default function WellnessHub() {
  const shouldReduceMotion = useReducedMotion();
  const doubled = [...products, ...products];

  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="scroll-m-10 relative overflow-hidden bg-[#0a0a0a] py-20"
    >
      {gradientCircles.map((circle, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute ${circle.position} ${circle.size} rounded-full blur-3xl`}
          style={{
            background: `radial-gradient(circle, ${circle.color}, transparent)`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-4 text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#9a9a9a]">
            gear up
          </span>
          <h2
            id="shop-heading"
            className="mx-auto max-w-xl text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Built to move
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#a3a3a3]">
            Performance essentials designed for every way you move.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
          className="mb-10 flex justify-center"
        >
          <button className="rounded-lg border border-white/8 px-6 py-2.5 text-sm font-bold text-white">
            EXPLORE STORE
            <i className="bi bi-arrow-right ml-2" aria-hidden="true" />
          </button>
        </motion.div>

        <div
          className="relative"
          role="region"
          aria-label="Training gear showcase"
        >
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#0a0a0a] to-transparent md:w-32"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#0a0a0a] to-transparent md:w-32"
            aria-hidden="true"
          />

          <div
            className={`flex gap-5 ${shouldReduceMotion ? "" : "animate-marquee"}`}
            style={{ width: "max-content" }}
          >
            {doubled.map((product, index) => (
              <motion.article
                key={`${product.name}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion
                    ? 0
                    : (index % products.length) * 0.05,
                }}
                className="group relative w-52 shrink-0 overflow-hidden rounded-xl border border-white/6 bg-[#111111] transition-all duration-300 hover:border-white/12 hover:shadow-[0_8px_40px_rgba(255,87,34,0.08)] md:w-60"
              >
                <div className="aspect-square overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={`products/${product.image}`}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3.5">
                  <h3 className="text-sm font-semibold text-[#d0d0d0] transition-colors group-hover:text-white">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-[11px] text-[#757575]">cult store</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
