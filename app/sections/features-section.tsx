"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const features = [
  {
    title: "Intelligent AI Assistant",
    description:
      "Leverage cutting-edge AI to simplify media kit creation and automate complex tasks effortlessly.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
  {
    title: "Insightful Real-Time Analytics",
    description:
      "Access up-to-the-minute insights on your social media performance to make data-driven decisions.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
  {
    title: "Always-On Automation",
    description:
      "Set it and forget it. Automate essential workflows to keep your media kit updated 24/7.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
  {
    title: "Seamless API Integration",
    description:
      "Integrate with your favorite tools using our powerful API, customized for your workflow.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
  {
    title: "Centralized Control Hub",
    description:
      "Streamline your workflow with an all-in-one dashboard to manage media kits, analytics, and automations.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
  {
    title: "Top-Tier Security",
    description:
      "Your data is safe with enterprise-level encryption and compliance with global standards.",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3270&auto=format&fit=crop",
  },
];

export function FeaturesSection() {
  return (
    <section className="overflow-x-hidden flex items-center justify-center w-full bg-black">
      <div className="max-w-7xl container mx-auto px-4 py-20">
        <motion.div
          className="mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="Features"
            description="Powerful features for powerful automation"
          />
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between rounded-lg"
            >
              <MagicCard className="h-full">
                <div className="flex flex-col gap-4 p-6">
                  <div className="relative flex h-48 w-full rounded-lg bg-white">
                    <Image
                      src={feature.url}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
