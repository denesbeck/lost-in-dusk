import { Bio, Certificates, Info } from "@/components";
import { Center, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h={"100vh"} className="animate-slideInFromBottom">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="max-w-[90vw] px-6 py-8 ring-2 ring-teal-400 lg:shadow-[14px_14px_#2dd4bf,28px_28px_black]"
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
