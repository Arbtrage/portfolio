"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggle=()=>{
    if(theme=="light") setTheme("dark");
    else setTheme("light");
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <AnimatePresence mode="wait" initial={false}>
    <motion.div
      style={{ display: "inline-block" }}
      key={theme}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
      // className=""
        aria-label="Toggle theme"
        colorScheme={theme === "light" ? "purple" : "orange"}
        icon={theme === "light" ? <SunIcon />:<MoonIcon />} // Conditional icon based on color mode
        onClick={toggle}
      />
    </motion.div>
  </AnimatePresence>

  );
};

export default ThemeSwitcher;