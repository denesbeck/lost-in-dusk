import { useTypewriter } from "hooks";

const Home = () => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    "  Hello, my name is Denes.|🚀 I'm a DevOps Engineer.",
  );

  return (
    <div className="flex flex-col justify-center items-center px-4 w-full h-[70vh]">
      <div className="text-2xl">{output.split("|")[0]}</div>
      <div className="text-base">{output.split("|")[1]}</div>
    </div>
  );
};

export default Home;
