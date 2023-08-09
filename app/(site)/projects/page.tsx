// import { getProject } from "@/sanity/sanityUtils";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";

// type Props = {
//   params: { project: string };
// };
"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Project() {
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
      This is my projects page....
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
