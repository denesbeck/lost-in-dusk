import { ContactButton } from "./components";
import { INFO } from "@/components/About/config/data";

interface HomeProps {
  contactAction: () => void;
}
const Home = ({ contactAction }: HomeProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 w-full h-screen min-h-screen">
      <div className="text-2xl text-center animate-text-focus">
        👋🏻 Hello, my name is {INFO.Name.split(" ")[0]}.
      </div>
      <div className="mt-2 text-base text-center animate-text-focus">
        I'm a {INFO.Role}.
      </div>
      <ContactButton label={"Contact me"} action={contactAction} />
    </div>
  );
};

export default Home;
