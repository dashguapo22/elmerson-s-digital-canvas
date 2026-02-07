import { motion } from "framer-motion";
import { Play, Image as ImageIcon } from "lucide-react";

interface SampleWorkProps {
  type: "image" | "video";
  src: string;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
}

const SampleWork = ({ type, src, title, description, className = "", delay = 0 }: SampleWorkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-2xl glass-card-hover cursor-pointer ${className}`}
    >
      <div className="h-full w-full relative overflow-hidden">
        {type === "video" ? (
          <video
            src={src}
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            {type === "video" ? (
              <Play className="w-12 h-12 mx-auto mb-2" />
            ) : (
              <ImageIcon className="w-12 h-12 mx-auto mb-2" />
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="text-sm opacity-80">{description}</p>}
          </div>
        </div>

        {/* Type indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          {type === "video" ? (
            <Play className="w-4 h-4 text-white" />
          ) : (
            <ImageIcon className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SampleWorks = () => {
  const sampleWorks = [
    {
      type: "image" as const,
      src: "/ADS.png",
      title: "Black Friday Sale",
      description: "Complete brand identity for a tech startup",
      className: "md:row-span-2",
    },
    {
      type: "image" as const,
      src: "/food.png",
      title: "Web Design Mockup",
      description: "Modern website design for e-commerce",
      className: "md:row-span-2",
    },
    {
      type: "image" as const,
      src: "/NBA.png",
      title: "Sports Design",
      description: "Instagram post series for fashion brand",
      className: "md:row-span-2",
    },
    {
      type: "video" as const,
      src: "/reels.mp4",
      title: "Short Video",
      description: "Kinetic typography logo reveal",
      className: "md:row-span-2",
    },
    {
      type: "image" as const,
      src: "/MatchaLatteMUD.png",
      title: "Food Graphic Design",
      description: "Eye catching poster design for a local event",
      className: "md:row-span-2",
    },
    {
      type: "image" as const,
      src: "/matcha3D.jpg",
      title: "3D Graphic Design",
      description: "3D Frame-Break",
      className: "md:row-span-2",
    }



  ];

  return (
    <section id="sample-works" className="py-24 md:py-32 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <p className="section-title">Portfolio</p>
          <h2 className="section-heading">
            Sample <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work spanning design, motion graphics, and digital experiences
          </p>
        </motion.div>

        {/* Sample Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 max-w-7xl mx-auto">
          {sampleWorks.map((work, index) => (
        <SampleWork
          key={work.title}
            {...work}
            delay={index * 0.1}
    />
  ))}
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-glow">
            View More Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleWorks;