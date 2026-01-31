import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/elmerson-lizano-61487a366/" },
    { name: "Twitter", Icon: Twitter, href: "https://x.com/dashgotthed1" },
    { name: "GitHub", Icon: Github, href: "https://github.com/dashguapo22" },
    { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/elmwoww/" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="section-title">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Work{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear from you. 
            Let's create something amazing together.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@elmerson.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="btn-glow inline-flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          {/* Social Links */}
          <motion.div             
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mt-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Elmerson S. Lizano. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};
export default Contact;
