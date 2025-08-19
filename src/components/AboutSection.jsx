import React, { useEffect, useState } from "react";

import images from "../slideshow_images";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Graduate
            </h3>
            <p className="text-muted-foreground">
              I am a recent graduate with a focus on full-stack development.
              Currently I am learning the MERN stack and working on developing
              my Java skills. I enjoy building clean, user-friendly applications
              and thrive in collaborative settings.
            </p>
            <p className="text-muted-foreground">
              Away from my desk, you can usually find me biking, at the gym, or
              capturing photos! I am always looking for new perspectives in both
              work and life!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/portfolio/resume.pdf"
                download="Oscar_Zheng_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primay text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right column: slideshow */}
          <div className="relative w-full h-128 rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence>
              <motion.img
                key={index}
                src={images[index]}
                alt="slideshow"
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
