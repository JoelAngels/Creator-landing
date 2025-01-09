"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

export function ProductPreview() {
  return (
    <div className="relative mx-auto px-4">
      <motion.div
        className="relative mx-auto max-w-[1200px] rounded-xl border bg-background p-2 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/assets/images/dashboard.jpg"
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
        <BorderBeam size={250} duration={12} delay={9} />
      </motion.div>
    </div>
  );
}
