import { Bio, Certificates, Info, Skills } from "@/components";
import { Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack h={"100vh"} className="flex items-center lg:justify-center">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="overflow-auto py-8 px-2 ring-2 ring-teal-400 transition-all duration-200 ease-in-out lg:px-8 lg:mt-0 mt-[80px] max-h-[calc(100vh-170px)] max-w-[90vw] animate-slideInFromBottom backdrop-blur-md lg:hover:shadow-[10px_10px_#1f2937,20px_20px_black]"
      >
        {/* main container */}
        <div className="grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          <Info />
          <Certificates />
          <Bio />
          <Skills />
        </div>
      </Stack>
    </Stack>
  );
};

export default About;
