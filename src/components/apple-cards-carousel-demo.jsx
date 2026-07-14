import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const WorkoutContent = ({ description, highlights, ctaText = "BOOK A CLASS" }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {description}
      </span>
    </p>
    <div className="mt-6 grid grid-cols-2 gap-4 max-w-3xl mx-auto">
      {highlights.map((h) => (
        <div
          key={h}
          className="rounded-xl bg-orange-500/10 px-4 py-3 text-center text-sm font-semibold text-orange-500 dark:text-orange-400"
        >
          {h}
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center">
      <button className="rounded-xl bg-orange-500 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,87,34,0.3)]">
        {ctaText}
      </button>
    </div>
  </div>
);

const cards = [
  {
    category: "CARDIO",
    title: "Boxing",
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2600&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="High-energy boxing sessions that build endurance, strength, and coordination. Burn up to 800 calories per session."
        highlights={["Fat Burn", "Core Strength", "Coordination", "Stamina"]}
      />
    ),
  },
  {
    category: "MIND & BODY",
    title: "Yoga",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2560&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="From power yoga to restorative flows, find your balance with expert-led sessions for every level."
        highlights={["Flexibility", "Mindfulness", "Balance", "Recovery"]}
      />
    ),
  },
  {
    category: "STRENGTH",
    title: "Adidas Strength+",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2600&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="Build lean muscle and boost metabolism with structured strength training programs designed by experts."
        highlights={["Muscle Gain", "Metabolism", "Posture", "Endurance"]}
      />
    ),
  },
  {
    category: "DANCE",
    title: "Dance Fitness",
    src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2600&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="Groove to Bollywood, hip-hop, and international beats. The most fun way to get fit and stay active."
        highlights={["Cardio", "Coordination", "Fun", "Full Body"]}
      />
    ),
  },
  {
    category: "PERFORMANCE",
    title: "HRX",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2600&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="Hrithik Roshan's exclusive workout format. High-intensity functional training for total body transformation."
        highlights={["HIIT", "Functional", "Agility", "Power"]}
      />
    ),
  },
  {
    category: "BURN",
    title: "Burn",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2600&auto=format&fit=crop",
    content: (
      <WorkoutContent
        description="Maximum calorie burn in minimum time. Circuit-based workouts that push your limits every session."
        highlights={["Calorie Burn", "Circuit Training", "Speed", "Power"]}
      />
    ),
  },
];

export default function CultCarousel() {
  const items = cards.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div id="workouts" className="scroll-m-20 w-full py-20 bg-neutral-950">
      <h2 className="max-w-7xl pl-4 mx-auto text-sm font-medium uppercase tracking-[0.3em] text-orange-300/70 mb-2">
        Workout Formats
      </h2>
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-white font-sans mb-12">
        Fun, trainer-led group classes
      </h2>
      <Carousel items={items} autoScroll autoScrollSpeed={0.8} />
    </div>
  );
}
