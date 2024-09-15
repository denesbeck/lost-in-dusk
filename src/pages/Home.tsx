import { ContactButton } from "@/components";
import { useTypewriter } from "@/hooks";
import { Stack } from "@chakra-ui/react";

interface HomeProps {
  contactAction: () => void;
}
const Home = ({ contactAction }: HomeProps) => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    "  Hello, my name is Denes.|I'm a DevOps Engineer.",
  );

  return (
    // The height of the div is calculated by subtracting the height of the Navbar, Footer, and the two 5rem paddings from the viewport height.
    <Stack className="h-[calc(100vh-150px)] min-h-screen w-full items-center justify-center px-4">
      <div className="relative text-2xl text-center min-h-8">
        {output.split("|")[0]}
        {!output.includes("Denes.") && (
          <div className="absolute top-0 -right-4 px-0.5 w-max text-2xl text-white bg-white h-max animate-blink">
            *
          </div>
        )}
      </div>
      <div className="relative mt-2 text-base text-center min-h-6">
        {output.split("|")[1]}
        {output.includes("|") && (
          <div className="absolute top-0 -right-3 px-0.5 w-max text-base text-white bg-white h-max animate-blink">
            *
          </div>
        )}
      </div>
      <ContactButton label={"Contact me"} action={contactAction} />
    </Stack>
  );
};

export default Home;
