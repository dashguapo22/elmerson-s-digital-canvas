import { motion } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";
import type { FocusEvent, MouseEvent } from "react";
import { useEffect, useState } from "react";

type WorkType = "image" | "video";

interface SampleWorkItem {
  type: WorkType;
  src: string;
  title: string;
  description?: string;
  poster?: string;
}

interface SampleWorkProps extends SampleWorkItem {
  onSelect: (work: SampleWorkItem) => void;
  category: string;
  className?: string;
  delay?: number;
}

const imageWorks: SampleWorkItem[] = [
  { type: "image", src: "/MatchaLatteMUD.png", title: "Matcha Latte" },
  { type: "image", src: "/matcha3D.jpg", title: "Matcha 3D" },
  { type: "image", src: "/Ramen.jpg", title: "Ramen" },
  { type: "image", src: "/Nike.jpg", title: "Nike" },
  { type: "image", src: "/NBA.png", title: "NBA" },
  { type: "image", src: "/Coffee.jpg", title: "Coffee" },
  { type: "image", src: "/Climate Change.jpg", title: "Climate Change" },
  { type: "image", src: "/Car.jpg", title: "Car" },
  { type: "image", src: "/Bike.jpg", title: "Bike" },
  { type: "image", src: "/Bags.jpg", title: "Bags" },
  { type: "image", src: "/ADS.png", title: "Ad Design" },
  { type: "image", src: "/food.png", title: "Food Design" },
];

const videoWorks: SampleWorkItem[] = [
  { type: "video", src: "/gymmotivation1.mp4", title: "Gym Motivation" },
  { type: "video", src: "/Trading.mp4", title: "Trading Edit" },
  { type: "video", src: "/lifestylevid1.mp4", title: "Lifestyle Edit" },
  { type: "video", src: "/runningvid2.mp4", title: "Running Edit 2" },
  { type: "video", src: "/bikevid1.mp4", title: "Bike Edit" },
  { type: "video", src: "/runningvid1.mp4", title: "Running Video" },
  { type: "video", src: "/reels.mp4", title: "Reels Edit" },
  { type: "video", src: "/0302.mp4", title: "Short Form Edit" },
  {
    type: "video",
    src: "/dogfriendlyADS1.mp4",
    title: "Dog Friendly Ad 1",
    poster: "/dogfriendlyHOOK1S-Cover.jpg",
  },
  {
    type: "video",
    src: "/dogfriendlyADS2.mp4",
    title: "Dog Friendly Ad 2",
    poster: "/dogfriendlyHOOK1S-Cover.jpg",
  },
  { type: "video", src: "/EDIT4.mp4", title: "Video Edit 4" },
  { type: "video", src: "/TiktokNIZORAL.mp4", title: "TikTok Nizoral" },
];

const SampleWork = ({
  type,
  src,
  title,
  description,
  poster,
  onSelect,
  category,
  className = "",
  delay = 0,
}: SampleWorkProps) => {
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
      onClick={() => onSelect({ type, src, title, description, poster })}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect({ type, src, title, description, poster });
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${title}`}
      className={`group relative aspect-[4/5] overflow-hidden rounded-xl glass-card-hover cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
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
            <p className="px-3 text-xs opacity-80">{description || category}</p>
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

const WorksGrid = ({
  title,
  works,
  onSelect,
}: {
  title: string;
  works: SampleWorkItem[];
  onSelect: (work: SampleWorkItem) => void;
}) => (
  <div className="mb-12 last:mb-0">
    <div className="mb-5 max-w-5xl mx-auto">
      <h3 className="text-left text-xl md:text-2xl font-bold text-foreground">{title}</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
      {works.map((work, index) => (
        <SampleWork
          key={`${title}-${work.src}`}
          {...work}
          category={title}
          onSelect={onSelect}
          delay={index * 0.04}
        />
      ))}
    </div>
  </div>
);

const SampleWorks = () => {
  const [selectedWork, setSelectedWork] = useState<SampleWorkItem | null>(null);

  useEffect(() => {
    if (!selectedWork) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedWork]);

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
            A showcase of my graphic design and video editing work.
          </p>
        </motion.div>

        <WorksGrid title="Video Editing" works={videoWorks} onSelect={setSelectedWork} />
        <WorksGrid title="Graphic Design" works={imageWorks} onSelect={setSelectedWork} />

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

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={selectedWork.title}
          onClick={() => setSelectedWork(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
              <div className="min-w-0 text-left">
                <h3 className="truncate text-base md:text-lg font-semibold text-foreground">
                  {selectedWork.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {selectedWork.type === "image" ? "Graphic Design" : "Video Editing"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex max-h-[82vh] items-center justify-center bg-black">
              {selectedWork.type === "video" ? (
                <video
                  key={selectedWork.src}
                  src={selectedWork.src}
                  poster={selectedWork.poster}
                  className="max-h-[82vh] w-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedWork.src}
                  alt={selectedWork.title}
                  className="max-h-[82vh] w-full object-contain"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default SampleWorks;
