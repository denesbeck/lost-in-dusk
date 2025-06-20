import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

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
    if (pathname === "/") {
      (home.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    } else if (/^\/blog\/\d+/.test(pathname)) {
      (blog.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    } else if (pathname === "/about") {
      (about.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    } else if (pathname === "/contact") {
      (contact.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [windowSize, pathname]);

  const navItems = [
    {
      label: "Home",
      path: "/",
      action: () => {
        (home.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
        navigate({ pathname: "/", search });
      },
    },
    {
      label: "Blog",
      path: "/blog",
      action: () => {
        (blog.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        // INFO: Concatenate the search params for tags.
        navigate({ pathname: `/blog`, search });
      },
    },
    {
      label: "About",
      path: "/about",
      action: () => {
        (about.current as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
        navigate({ pathname: "/about", search });
      },
    },
  ];

  const contactAction = () => {
    (contact.current as HTMLDivElement).scrollIntoView({
      behavior: "smooth",
    });
    navigate({ pathname: "/contact", search });
  };

  return { navItems, refs: { home, blog, about, contact }, contactAction };
};

export default useNav;
