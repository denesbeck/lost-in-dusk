import { Bio, Certificates, Info, Skills } from "./components";
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
    <div className="flex flex-col items-center h-screen lg:justify-center w-dvw">
      {/* wrapper for adding animate-slide-in-from-bottom */}
      <div className="flex flex-col py-4 px-2 transition-all duration-200 ease-in-out sm:w-max sm:ring-2 lg:py-8 lg:px-8 lg:mt-0 ring-secondary animate-slide-in-from-bottom mt-[90px] max-h-[calc(100dvh-180px)] backdrop-blur-md sm:max-w-[90dvw] sm:hover:shadow-[10px_10px_#46ecd5,20px_20px_black]">
        <div ref={ref} className="overflow-auto w-full h-full">
          {/* main container */}
          <div className="grid grid-cols-1 px-4 sm:gap-8 lg:grid-cols-2">
            <Info />
            <div className="block my-2 border-b-2 sm:hidden border-secondary" />
            <Certificates />
            <div className="block my-2 border-b-2 sm:hidden border-secondary" />
            <Bio />
            <div className="block my-2 border-b-2 sm:hidden border-secondary" />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
