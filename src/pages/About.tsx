import { Bio, Certificates, Info, Skills } from "@/components";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathname === "/about") {
      if (ref.current) {
        ref.current.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return (
    <div className="flex flex-col items-center h-screen lg:justify-center">
      {/* wrapper for adding animate-slide-in-from-bottom */}
      <div className="flex flex-col py-4 px-2 w-max ring-2 ring-teal-400 transition-all duration-200 ease-in-out lg:py-8 lg:px-8 lg:mt-0 animate-slide-in-from-bottom mt-[90px] max-h-[calc(100vh-170px)] max-w-[90vw] backdrop-blur-md lg:hover:shadow-[10px_10px_#1f2937,20px_20px_black]">
        <div ref={ref} className="overflow-auto w-full h-full">
          {/* main container */}
          <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
            <Info />
            <Certificates />
            <Bio />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
