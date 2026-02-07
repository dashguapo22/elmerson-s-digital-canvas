import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated Orbs */}
      <div className="orb w-96 h-96 -top-48 -left-48 animate-pulse-slow" />
      <div className="orb w-[500px] h-[500px] -bottom-64 -right-64 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="orb w-64 h-64 top-1/3 right-1/4 animate-float opacity-10" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full overflow-hidden">
                  <img
                    src="/NEWpfp.jpg"
                    alt="Elmerson S. Lizano"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-6 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-6 w-6 h-6 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="section-title mb-6"
              >
                Creative Professional
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="text-foreground">Elmerson S.</span>
                <br />
                <span className="gradient-text">Lizano</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 text-balance"
              >
                Crafting impactful and engaging content that transforms ideas into 
                <span className="text-foreground font-medium"> visual experiences</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <a href="#contact" className="btn-glow">
                  Get in Touch
                </a>
                <a href="#about" className="btn-ghost-glow">
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
