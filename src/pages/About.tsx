import { Bio, Certificates, Info, Skills } from "@/components";
import { Center, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h={"100vh"} className="animate-slideInFromBottom">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="px:2 max-h-[calc(100vh-170px)] max-w-[90vw] overflow-auto py-10 ring-2 ring-teal-400 backdrop-blur-md transition-all duration-200 ease-in-out lg:px-8 lg:hover:shadow-[20px_20px_black]"
      >
        {/* main container */}
        <div className="grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          <Info />
          <Bio />
          <Certificates />
          <Skills />
        </div>
      </Stack>
    </Center>
  );
};

export default About;
