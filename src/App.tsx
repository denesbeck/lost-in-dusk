import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { About, Blog, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-1 items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
