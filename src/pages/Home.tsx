import { useTypewriter } from "@/hooks";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "LostInDusk | Home";
  }, []);

  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    "  Hello, my name is Denes.|🚀 I'm a DevOps Engineer.",
  );

  return (
    // The height of the div is calculated by subtracting the height of the Navbar, Footer, and the two 5rem paddings from the viewport height.
    <div className="flex h-[calc(100vh-5.25rem-5rem-5rem)] w-full flex-col items-center justify-center px-4">
      <div className="text-2xl text-center">{output.split("|")[0]}</div>
      <div className="text-base text-center">{output.split("|")[1]}</div>
    </div>
  );
};

export default Home;
