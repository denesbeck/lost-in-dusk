import { ContactButton } from "@/components";
import { useTypewriter } from "@/hooks";
import { Stack } from "@chakra-ui/react";
import { INFO } from "@/config/data/about";

interface HomeProps {
  contactAction: () => void;
}
const Home = ({ contactAction }: HomeProps) => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    `  Hello, my name is ${INFO.Name.split(" ")[0]}.|I'm a ${INFO.Role}.`,
  );

  return (
    <Stack className="h-screen min-h-screen w-full items-center justify-center px-4">
      <div className="relative min-h-8 text-center text-2xl">
        {output.split("|")[0]}
        {!output.includes(`${INFO.Name.split(" ")[0]}.`) && (
          <div className="absolute -right-4 top-0 h-max w-max animate-blink bg-white px-0.5 text-2xl text-white">
            *
          </div>
        )}
      </div>
      <div className="relative mt-2 min-h-6 text-center text-base">
        {output.split("|")[1]}
        {output.includes("|") && (
          <div className="absolute -right-3 top-0 h-max w-max animate-blink bg-white px-0.5 text-base text-white">
            *
          </div>
        )}
      </div>
      <ContactButton label={"Contact me"} action={contactAction} />
    </Stack>
  );
};

export default Home;
