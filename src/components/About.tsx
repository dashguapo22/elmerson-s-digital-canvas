import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 md:p-12"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
              <User className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <p className="section-title">About Me</p>
            <h2 className="section-heading">
              Driven by <span className="gradient-text">Purpose</span>
            </h2>

            {/* Content */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To contribute to the achievement of the organization's vision with my knowledge, 
              capabilities in communication, ability to learn quickly, and seeking a challenging 
              role where I can leverage my skills to deliver{" "}
              <span className="text-foreground font-medium">impactful and engaging content</span>.
            </p>

            {/* Stats or Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "30+" },
                { label: "Happy Clients", value: "3+" },
                { label: "Skills Mastered", value: "10+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
