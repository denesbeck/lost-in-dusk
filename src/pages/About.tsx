import { Bio, Certificates, Info, MacOSBar } from "@/components";
import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "LostInDusk | About";
  }, []);

  return (
    <div className="mt-10 animate-slideInFromBottom">
      {/* wrapper for adding animate-slideInFromBottom */}
      <Stack
        w={"max-content"}
        className="max-w-[90vw] pb-8 ring-2 ring-teal-500 lg:!-skew-x-6 lg:pl-6 lg:shadow-[14px_14px_#14b8a6,28px_28px_black]"
      >
        {/* main container */}
        <div className="lg:skew-x-6">
          {/* wrapper to unskew content */}
          <MacOSBar />
          <div className="grid grid-cols-1 gap-8 px-8 lg:grid-cols-2">
            <Info />
            <Bio />
            <Certificates />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default About;
