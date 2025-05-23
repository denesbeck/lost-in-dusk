import { About, AlertBox, Blog, Contact, Home, Navbar } from "@/components";
import { useNav } from "@/components/Navbar/hooks";

function App() {
  const { navItems, refs, contactAction } = useNav();
  const { home, blog, about, contact } = refs;

  return (
    <>
      <AlertBox />
      <div ref={home} />
      <Navbar items={navItems} />
      <div className="flex z-10 flex-col w-screen">
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
      </div>
    </>
  );
}

export default App;
