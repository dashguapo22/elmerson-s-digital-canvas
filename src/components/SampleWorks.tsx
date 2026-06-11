import { motion } from "framer-motion";
import { Play, Image as ImageIcon } from "lucide-react";
import type { FocusEvent, MouseEvent } from "react";

interface SampleWorkProps {
  type: "image" | "video";
  src: string;
  title: string;
  description?: string;
  poster?: string;
  className?: string;
  delay?: number;
}

const SampleWork = ({ type, src, title, description, poster, className = "", delay = 0 }: SampleWorkProps) => {
  const playPreview = (event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
    const video = event.currentTarget.querySelector("video");
    video?.play().catch(() => undefined);
  };

  const pausePreview = (event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) => {
    const video = event.currentTarget.querySelector("video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
      tabIndex={0}
      className={`group relative aspect-[4/5] overflow-hidden rounded-xl glass-card-hover cursor-pointer ${className}`}
    >
      <div className="h-full w-full relative overflow-hidden">
        {type === "video" ? (
          <video
            src={src}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            {type === "video" ? (
              <Play className="w-8 h-8 mx-auto mb-2" />
            ) : (
              <ImageIcon className="w-8 h-8 mx-auto mb-2" />
            )}
            <h3 className="text-sm md:text-base font-semibold">{title}</h3>
            {description && <p className="px-3 text-xs opacity-80">{description}</p>}
          </div>
        </div>

        {/* Type indicator */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          {type === "video" ? (
            <Play className="w-3.5 h-3.5 text-white" />
          ) : (
            <ImageIcon className="w-3.5 h-3.5 text-white" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SampleWorks = () => {
  const sampleWorks = [
    {
      type: "video" as const,
      src: "/TiktokNIZORAL.mp4",
      title: "Ai Talking Object",
      description: "Creative AI talking objects video",
    },
    {
      type: "image" as const,
      src: "/food.png",
      title: "Web Design Mockup",
      description: "Modern website design for e-commerce",
    },
    {
      type: "video" as const,
      src: "/SecondEditCapcut.mp4",
      title: "Short Video",
      description: "Shortform Video Reels",
    },
    {
      type: "video" as const,
      src: "/reels.mp4",
      title: "Short Video",
      description: "Kinetic typography logo reveal",
    },
    {
      type: "image" as const,
      src: "/MatchaLatteMUD.png",
      title: "Food Graphic Design",
      description: "Eye catching poster design for a local event",
    },
    {
      type: "image" as const,
      src: "/matcha3D.jpg",
      title: "Matcha 3D",
      description: "3D matcha product visual",
    },
    {
      type: "image" as const,
      src: "/Bags.jpg",
      title: "Bags Design",
      description: "Product-focused creative visual",
    },
    {
      type: "image" as const,
      src: "/Car.jpg",
      title: "Car Design",
      description: "Automotive creative visual",
    },
    {
      type: "image" as const,
      src: "/Climate Change.jpg",
      title: "Climate Change",
      description: "Awareness campaign graphic",
    },
    {
      type: "image" as const,
      src: "/Coffee.jpg",
      title: "Coffee Design",
      description: "Cafe product promotion visual",
    },
    {
      type: "image" as const,
      src: "/Nike.jpg",
      title: "Nike Design",
      description: "Sports brand creative visual",
    },
    {
      type: "image" as const,
      src: "/Ramen.jpg",
      title: "Ramen Design",
      description: "Food poster creative visual",
    },
    {
      type: "video" as const,
      src: "/0302.mp4",
      title: "Short form Video",
      description: "Inspirational short video for social media",
    },
    {
      type: "video" as const,
      src: "/dogfriendlyADS1.mp4",
      title: "Dog Ad",
      description: "Pet-friendly promotional video",
      poster: "/dogfriendlyHOOK1S-Cover.jpg",
    },
    {
      type: "video" as const,
      src: "/dogfriendlyADS2.mp4",
      title: "Dog Ad Variation",
      description: "Alternate pet-friendly ad edit",
      poster: "/dogfriendlyHOOK1S-Cover.jpg",
    },
    {
      type: "video" as const,
      src: "/Trading.mp4",
      title: "Trading Video",
      description: "Trading-focused social media edit",
    }
  ];

  return (
    <section id="sample-works" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">
            Sample <span className="gradient-text">Works</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work spanning design, motion graphics, and digital experiences
          </p>
        </motion.div>

        {/* Sample Works Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {sampleWorks.map((work, index) => (
        <SampleWork
          key={`${work.title}-${work.src}`}
            {...work}
            delay={index * 0.05}
    />
  ))}
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="https://elmoportfolio.my.canva.site/" target="_blank" rel="noopener noreferrer" className="btn-glow">
            View More Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleWorks;
