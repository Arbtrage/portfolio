// import { HamburgerIcon } from '@chakra-ui/icons'
// "use client"
import { AnimatePresence, motion } from "framer-motion";
import { Box, Heading } from "@chakra-ui/react";
import Image from 'next/image'
import ProfileImage from './profile.jpg'

export default function Index() {
  return (
    <div className="grid grid-flow-col auto-cols-max">
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          style={{ display: "inline-block" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            className="text-xl grid grid-cols-1 md:grid-cols-2 md:gap-60 font-extrabold"
          >
            <Box flexGrow={1} className="">
              Hello
              <Heading
                className=" text-5xl pb-6 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
                as="h1"
                variant="page-title"
              >
                I&apos;m Sayantan
              </Heading>
              This site is under development
            </Box>
            <Box
                borderWidth={2}
                borderStyle="transparent"
                w="300px"
                h="300px"
                display="inline-block"
                overflow="hidden"
                borderRadius="full"
              >
                <Image
                  src={ProfileImage}
                  alt="Profile image"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
