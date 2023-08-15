"use client";
import Index from ".";
import About from "@/components/About";
import Bio from "@/components/bio";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Index />
          <div className="text-center	mt-8 text-lg backdrop-blur-sm	bg-white/10 border-2 p-3 ml-8 mr-8 border-transparent rounded-full" 
          >
           I&apos;m a Software Engineer based in India !
          </div>
          <About/>
          <Bio/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
