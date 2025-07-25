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
          className="fixed right-6 bottom-6 z-20 p-2 text-white rounded-md cursor-pointer bg-secondary animate-text-focus"
          onClick={() => navigate({ pathname: "/", search })}
        >
          Scroll to top
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
