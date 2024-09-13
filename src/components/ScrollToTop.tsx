import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {visible && (
        <button
          className="fixed right-6 bottom-6 z-50 p-2 text-white bg-gray-800 rounded-md animate-textFocus"
          onClick={() => navigate("/")}
        >
          Scroll to top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
