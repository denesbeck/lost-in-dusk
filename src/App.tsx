// import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { Footer, Navbar } from "./components";
import { About, Blog, Home } from "./pages";
import { Stack } from "@chakra-ui/react";

function App() {
  const home = useRef<HTMLDivElement | null>(null);
  const blog = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      label: "Home",
      path: "/",
      action: () =>
        (home.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Blog",
      path: "/blog",
      action: () =>
        (blog.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "About",
      path: "/about",
      action: () =>
        (about.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        }),
    },
  ];

  return (
    <>
      <div ref={home} />
      <Navbar items={items} />
      <Stack className="my-10 w-screen">
        <Home />
        <div ref={blog}>
          <Blog />
        </div>
        <div ref={about}>
          <About />
        </div>
      </Stack>
      <Footer />
    </>
  );
}

export default App;
