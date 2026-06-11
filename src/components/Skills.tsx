import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Eye,
  FileSpreadsheet,
  Handshake,
  MessageCircle,
  Palette,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
  delay?: number;
}

const SkillCard = ({ title, description, Icon, className = "", delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-card-hover p-4 md:p-5 flex flex-col ${className}`}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 pt-3 border-t border-border/30">
        <span className="text-sm text-primary font-medium hover:underline cursor-pointer">
          Learn more &gt;
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Graphic Designing",
      description: "Creating visually stunning designs that captivate audiences and communicate brand stories effectively through color, typography, and composition.",
      Icon: Palette,
      className: "bento-item-1",
    },
    {
      title: "Communication",
      description: "Building meaningful connections through clear, persuasive messaging that resonates with diverse audiences.",
      Icon: MessageCircle,
      className: "bento-item-2",
    },
    {
      title: "Office Proficiency",
      description: "Mastery of productivity tools and office applications to streamline workflows and maximize operational efficiency.",
      Icon: FileSpreadsheet,
      className: "bento-item-4",
    },
    {
      title: "Visualization",
      description: "Translating complex concepts into compelling visual narratives that inform and inspire action.",
      Icon: Eye,
      className: "bento-item-5",
    },
    {
      title: "Brand Management",
      description: "Maintaining consistent brand identity, voice, and positioning across campaigns and customer touchpoints.",
      Icon: BriefcaseBusiness,
      className: "bento-item-1",
    },
    {
      title: "Lead Generation",
      description: "Creating campaigns and funnels that attract qualified prospects and support sales growth.",
      Icon: Target,
      className: "bento-item-2",
    },
    {
      title: "Customer Relationship Management",
      description: "Organizing customer interactions and follow-ups to improve retention, loyalty, and service quality.",
      Icon: Handshake,
      className: "bento-item-3",
    },
    {
      title: "Marketing Strategy and Planning",
      description: "Planning campaign goals, channels, timelines, and messaging to support measurable marketing outcomes.",
      Icon: Users,
      className: "bento-item-4",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="section-title">Expertise</p>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set crafted through years of experience and continuous learning
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              {...skill}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
