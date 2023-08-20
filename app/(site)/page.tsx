"use client";
import Index from ".";
import Link from "next/link";
import About from "@/components/About";
import Bio from "@/components/bio";
import Contact from "@/components/contact";
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
          <div className="text-center	mt-8 text-lg backdrop-blur-sm	bg-white/10 border-2 p-3 ml-8 mr-8 border-transparent rounded-full">
            I&apos;m a Software Engineer based in India !
          </div>
          <About />
          <Bio />
          <Contact />
          <div className="mt-8 mx-8 flex flex-col justify-center ">
            <Link
              href="/projects"
              className="text-center text-black font-bold text-lg align-center mt-6 mx-auto px-6 py-1 rounded-md bg-teal-500 hover:bg-teal-300"
            >
              Check out my cool projects !!!
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
