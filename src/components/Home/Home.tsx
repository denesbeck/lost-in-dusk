import { ContactButton } from "./components";
import { useTypewriter } from "./hooks";
import { INFO } from "@/components/About/config/data";

interface HomeProps {
  contactAction: () => void;
}
const Home = ({ contactAction }: HomeProps) => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    `  Hello, my name is ${INFO.Name.split(" ")[0]}.|I'm a ${INFO.Role}.`,
  );

  return (
    <div className="flex flex-col justify-center items-center px-4 w-full h-screen min-h-screen">
      <div className="relative text-2xl text-center min-h-8">
        {output.split("|")[0]}
        {!output.includes(`${INFO.Name.split(" ")[0]}.`) && (
          <div className="absolute top-0 -right-4 px-0.5 w-max text-2xl text-white bg-white animate-blink h-max">
            *
          </div>
        )}
      </div>
      <div className="relative mt-2 text-base text-center min-h-6">
        {output.split("|")[1]}
        {output.includes("|") && (
          <div className="absolute top-0 -right-3 px-0.5 w-max text-base text-white bg-white animate-blink h-max">
            *
          </div>
        )}
      </div>
      <ContactButton label={"Contact me"} action={contactAction} />
    </div>
  );
};

export default Home;
