"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { SectionHeader } from "@/components/SectionHeader";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function ProductPreview() {
  return (
    <div className="relative px-4 py-10 items-center mx-auto">
      <div className="py-6">
        <SectionHeader
          eyebrow="Product Preview"
          description="Empower your team with a dynamic tool to plan, track, and manage
          progress seamlessly, driving collaboration and celebrating milestones
          together"
        />
      </div>
      <motion.div
        className="relative mx-auto max-w-[1200px] rounded-xl border bg-background shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/dashboard.jpg"
          width={1200}
          height={800}
          alt="Product preview"
          className="rounded-lg"
          priority
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        ></motion.div>
        <BorderBeam size={350} duration={12} delay={9} />
      </motion.div>
    </div>
  );
}
