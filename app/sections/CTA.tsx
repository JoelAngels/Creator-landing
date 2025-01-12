"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
    title: "Supercharge your influencer game with AI",
    subtitle:
      "Making a lasting impression with a media kit that highlights your talents and brand uniqueness",
    cta: "Create a Media Kit For Free",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3270&auto=format&fit=crop",
    title: "Showcase Your Authentic Story",
    subtitle:
      "Step into the spotlight with an eye-catching media kit that captivates brands and drives meaningful collaborations",
    cta: "Start Building Your Media Kit",
  },
  {
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=3270&auto=format&fit=crop",
    title: "Elevate Your Influence to New Heights",
    subtitle:
      "Reach the pinnacle of your brand's potential with analytics-driven insights and stunning visuals tailored for success",
    cta: "Design Your Kit Today",
  },
];

export function CTA() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-xl aspect-[16/9]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 bg-black/30 z-10 rounded-2xl"
              style={{
                background: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%),

                linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)`,
              }}
            />
            <img
              src={images[currentIndex].url}
              alt="Hero background"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16">
                <div className="max-w-xl">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {images[currentIndex].title}
                  </motion.h1>
                  <motion.p
                    className="text-lg text-white/90 mb-8 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {images[currentIndex].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium">
                      {images[currentIndex].cta}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-8 z-30 flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 border-white/20 hover:bg-black/70"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 border-white/20 hover:bg-black/70"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
