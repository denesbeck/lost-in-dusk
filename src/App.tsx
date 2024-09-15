import { Footer, Navbar } from "@/components";
import { About, Blog, Home, Contact } from "./pages";
import { Stack } from "@chakra-ui/react";
import { useNav } from "@/hooks";

function App() {
  const { navItems, refs, contactAction } = useNav();
  const { home, blog, about, contact } = refs;

  return (
    <>
      <div ref={home} />
      <Navbar items={navItems} />
      <Stack className="z-10 w-screen">
        <Home contactAction={contactAction} />
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
