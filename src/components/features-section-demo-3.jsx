import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Fun, trainer-led group classes",
      description:
        "Burn calories and build strength with high-energy group workouts led by expert trainers.",
      skeleton: <SkeletonOne />,
      className:
        "border-b md:border-r md:border-b-0 lg:col-span-4 dark:border-neutral-800",
    },
    {
      title: "Access to 400+ premium gyms",
      description:
        "Get unlimited access to our network of top-tier gyms and fitness centers across the city.",
      skeleton: <SkeletonTwo />,
      className: "border-b lg:border-b-0 dark:border-neutral-800 lg:col-span-2",
    },
    {
      title: "Live at-home workouts",
      description:
        "Follow along with live and recorded workouts from the comfort of your home.",
      skeleton: <SkeletonThree />,
      className:
        "border-b md:border-r md:border-b-0 dark:border-neutral-800 lg:col-span-3",
    },
    {
      title: "Track your fitness journey",
      description:
        "Monitor your progress, set goals, and stay motivated with our advanced fitness tracking.",
      skeleton: <SkeletonFour />,
      className: "dark:border-neutral-800 lg:col-span-3",
    },
  ];
  return (
    <section
      id="why-cult"
      className="scroll-m-20 relative z-20 mx-auto max-w-7xl py-6 lg:py-12"
      aria-labelledby="features-heading"
    >
      <div className="px-4 lg:px-8">
        <h2
          id="features-heading"
          className="mx-auto max-w-5xl text-center text-2xl font-medium tracking-tight text-black lg:text-4xl lg:leading-tight dark:text-white"
        >
          Why cult.fit
        </h2>

        <p className="mx-auto my-2 max-w-2xl text-center text-xs font-normal text-neutral-500 lg:text-sm dark:text-neutral-400">
          Group classes, gym access, live workouts, and more — designed to fit
          how you actually move.
        </p>
      </div>
      <div className="relative">
        <div className="mt-6 grid grid-cols-1 rounded-md md:grid-cols-2 lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-fit w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`relative overflow-hidden p-3 h-fit sm:p-5`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="max-w-5xl text-left text-base font-medium tracking-tight text-black md:text-xl md:leading-snug dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p className="my-2 max-w-sm text-left text-xs font-normal text-neutral-500 md:text-sm dark:text-neutral-300">
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-fit items-center justify-center px-2 py-4">
      <div className="group h-fit w-full bg-white p-3 shadow-2xl dark:bg-neutral-900 dark:shadow-neutral-800/50">
        <div className="flex h-fit w-full flex-col space-y-2">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop"
            alt="Group fitness class with trainer leading workout"
            width={800}
            height={600}
            loading="eager"
            className="w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="group/image relative flex h-fit">
      <div className="group mx-auto h-fit w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-fit w-full flex-col">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop"
            alt="Live workout session with trainer"
            width={800}
            height={500}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const firstRowImages = [
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      alt: "Gym equipment and weights",
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      alt: "Group workout session",
    },
    {
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=400&fit=crop",
      alt: "Cardio training area",
    },
    {
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop",
      alt: "Strength training zone",
    },
    {
      src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=400&fit=crop",
      alt: "Modern gym interior",
    },
  ];

  const secondRowImages = [
    {
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
      alt: "Fitness trainer demonstrating exercise",
    },
    {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
      alt: "HIIT workout in progress",
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      alt: "Yoga and stretching session",
    },
    {
      src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop",
      alt: "Boxing fitness class",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      alt: "Personal training session",
    },
  ];

  const firstRowRotations = [-5, 8, -3, 12, -8];
  const secondRowRotations = [7, -4, 10, -6, 3];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div
      className="relative flex h-fit flex-col items-center justify-center gap-4 overflow-hidden p-3 sm:p-4"
      role="img"
      aria-label="Gallery of gym facilities and workout sessions"
    >
      <div className="flex flex-row flex-wrap gap-1.5">
        {firstRowImages.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: firstRowRotations[idx],
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="shrink-0 overflow-hidden rounded-lg border border-neutral-100 bg-white p-0.5 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image.src}
              alt={image.alt}
              width="120"
              height="120"
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-md object-cover sm:h-20 sm:w-20"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-1.5">
        {secondRowImages.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: secondRowRotations[idx],
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="shrink-0 overflow-hidden rounded-lg border border-neutral-100 bg-white p-0.5 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image.src}
              alt={image.alt}
              width="120"
              height="120"
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-md object-cover sm:h-20 sm:w-20"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDI%3D"
          alt="Fitness progress tracking dashboard"
          width={800}
          height={800}
          loading="lazy"
          className="rounded-xl w-full h-full object-cover shadow-lg sm:h-52 dark:shadow-neutral-800/50 object-center"
        />
      </div>
    </>
  );
};
