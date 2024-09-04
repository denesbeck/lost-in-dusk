import { Bio, Certificates, Info } from "@/components";
import { Center, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h={"100vh"} className="animate-slideInFromBottom">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="max-h-[80vh] max-w-[90vw] overflow-auto px-6 py-8 ring-2 ring-teal-400 lg:shadow-[20px_20px_black]"
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
