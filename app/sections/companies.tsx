"use client";

import { companies } from "@/constants/companies";
import { motion } from "framer-motion";
import Image from "next/image";

export const Companies = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="font-Bricolage text-center text-lg font-bold uppercase text-white">
          Empowering creators at leading companies
        </h2>
        <div className="relative flex mt-20 overflow-x-clip -mx-4 lg:-mx-8">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            className="flex flex-nowrap gap-12 md:gap-24 px-6 md:px-12"
          >
            {/* Three sets of logos to ensure smooth transition */}
            {[...Array(3)].map((_, setIndex) =>
              companies.map(({ name, logo }, index) => (
                <div
                  key={`${name}-${setIndex}-${index}`}
                  className="flex-shrink-0"
                >
                  <Image
                    src={logo}
                    alt={name}
                    width={80}
                    height={80}
                    className="object-contain"
                    title={name}
                  />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
