import { Bio, Certificates, Info } from "@/components";
import { Center, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h={"100vh"} className="animate-slideInFromBottom">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="px:2 max-h-[calc(100vh-170px)] max-w-[95vw] overflow-auto py-8 ring-2 ring-teal-400 backdrop-blur-md lg:px-6 lg:shadow-[20px_20px_black]"
      >
        {/* main container */}
        <div className="grid grid-cols-1 gap-8 px-8 lg:grid-cols-2">
          <Info />
          <Bio />
          <Certificates />
        </div>
      </Stack>
    </Center>
  );
};

export default About;
