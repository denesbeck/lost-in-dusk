import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
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
          className="fixed right-6 bottom-6 z-20 p-2 text-white rounded-md border transition-colors duration-200 ease-in-out cursor-pointer border-dark-500 bg-secondary animate-text-focus hover:bg-dark-900"
          onClick={() => navigate({ pathname: "/", search })}
        >
          Scroll to top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
