"use client";

import DotPattern from "@/components/ui/dot-pattern";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedTooltipPreview } from "@/constants/hero";

export function HeroSection() {
  return (
    <div className="py-20 relative w-full bg-black">
      <div className="relative z-10">
        <section className="grid items-center md:py-20">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HoverBorderGradient className="z-[1000] flex items-center gap-1 bg-gradient-to-r from-fuchsia-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                🎉 MediaKitsAi
                <span className="inline-block rounded-full  px-3 py-0.5">
                  Powered By AI
                </span>
              </HoverBorderGradient>
            </motion.div>
            <motion.h1
              className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Make <span className="text-teal-300">brand deals </span>
              <span>happen</span>
              <span
                className="mt-3 absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                style={{
                  maskImage: `url(/assets/images/underline.svg)`,
                  maskSize: "contain",
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                }}
              ></span>
              <br />
            </motion.h1>
            <motion.p
              className="max-w-[700px] text-lg text-muted-foreground sm:text-xl  text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Create, customize, and share a stunning media kit that does the
              talking. Attract brands and clients with automated analytics from
              your social media accounts.
            </motion.p>
            <AnimatedTooltipPreview />
            <motion.div
              className="flex flex-col gap-4 min-[400px]:flex-row"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex gap-6">
                <Button
                  size="lg"
                  className="bg-teal-300 text-primary-foreground"
                >
                  Get started for free
                </Button>

                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground"
                >
                  Sign up
                </Button>
              </div>
            </motion.div>
            <motion.p
              className="text-sm text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              7 day free trial. No credit card required.
            </motion.p>
          </div>
        </section>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          "opacity-40",
          "absolute inset-0 z-0"
        )}
      />
    </div>
  );
}
