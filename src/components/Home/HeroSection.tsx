"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `There's no bound to one's imagination and capabilities. Your mind is ever curious, you just have to unlock it with precise pattern and set the condition to #NoLimitations.
This group will be the rendezvous of ideas and upcoming event notifications as a part of our club. We hope this to become the perfect stepping stone for all our future technological endeavors within our college and beyond.

`;

export default function HeroSection() {
  return (
    <HeroHighlight className="text-[1rem]">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-5xl lg:text-3xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <Highlight className="text-white">
          Tech o Nicks
        </Highlight>
        <TextGenerateEffect words={words} />
      </motion.h1>
    </HeroHighlight>
  );
}
