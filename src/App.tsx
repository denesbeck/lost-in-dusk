import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Blog, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 justify-center items-start mt-20 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
