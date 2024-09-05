import { useRef } from "react";
import { Footer, Navbar } from "./components";
import { About, Blog, Home, Contact } from "./pages";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const home = useRef<HTMLDivElement | null>(null);
  const blog = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      label: "Home",
      path: "/",
      action: () => {
        (home.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
        navigate("/");
      },
    },
    {
      label: "Blog",
      path: "/blog",
      action: () => {
        (blog.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/blog");
      },
    },
    {
      label: "About",
      path: "/about",
      action: () => {
        (about.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/about");
      },
    },
  ];

  const handleContactAction = () => {
    (contact.current as HTMLDivElement).scrollIntoView({
      behavior: "smooth",
    });
    navigate("/contact");
  };

  return (
    <>
      <div ref={home} />
      <Navbar items={items} />
      <Stack className="z-10 my-10 w-screen">
        <Home contactAction={handleContactAction} />
        <div ref={blog}>
          <Blog />
        </div>
        <div ref={about}>
          <About />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </Stack>
      <Footer />
    </>
  );
}

export default App;
