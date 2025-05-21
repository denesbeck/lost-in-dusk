import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const home = useRef<HTMLDivElement | null>(null);
  const blog = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);

  // Capture the window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Make sure to position the current page at the correct position based on the window size
  useEffect(() => {
    if (typeof window === "undefined") return;
    switch (pathname) {
      case "/":
        (home.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/");
        break;
      case "/blog":
        (blog.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/blog");
        break;
      case "/about":
        (about.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/about");
        break;
      case "/contact":
        (contact.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/contact");
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  const navItems = [
    {
      label: "Home",
      path: "/",
      action: () => {
        (home.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
        navigate("/");
      },
    },
    {
      label: "Blog",
      path: "/blog",
      action: () => {
        (blog.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/blog");
      },
    },
    {
      label: "About",
      path: "/about",
      action: () => {
        (about.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate("/about");
      },
    },
  ];

  const contactAction = () => {
    (contact.current as HTMLDivElement).scrollIntoView({
      behavior: "smooth",
    });
    navigate("/contact");
  };

  return { navItems, refs: { home, blog, about, contact }, contactAction };
};

export default useNav;
