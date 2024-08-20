import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Blog, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="mb-10 mt-20 flex h-full flex-1 items-start justify-center">
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
