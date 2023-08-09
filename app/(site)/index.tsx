import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import ProfileImage from "./profile.jpg";

export default function Index() {
  return (
    <div className="grid grid-flow-col auto-cols-max">
      <Box className="text-xl grid grid-cols-1 md:grid-cols-2 md:gap-60 font-extrabold">
        <Box flexGrow={1} className="">
          Hello
          <Heading
            className=" text-5xl pb-6 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
            as="h1"
            variant="page-title"
          >
            I&apos;m Sayantan
          </Heading>
          <h2 className="font-bold italic">( Wanderer / Developer / Weeb )</h2>
        </Box>
        <Box
          borderWidth={2}
          borderRadius={50}
          borderColor="transparent"
          w="300px"
          h="300px"
          display="inline-block"
          overflow="hidden"
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
    </div>
  );
}
