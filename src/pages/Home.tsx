import { useTypewriter } from "../hooks";

const Home = () => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    "  Hello, my name is Denes.|🚀 I'm a DevOps Engineer.",
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-2xl">{output.split("|")[0]}</div>
      <div className="text-base">{output.split("|")[1]}</div>
    </div>
  );
};

export default Home;
