import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (window.scrollY > 200) {
        ref.current.classList.remove("hidden");
      } else {
        ref.current.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={ref}
      className="fixed bottom-8 right-8 animate-textFocus rounded-md bg-gray-800 p-2 text-white"
      onClick={() => navigate("/")}
    >
      Scroll to top
    </button>
  );
};

export default ScrollToTop;
