import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();

  const home = useRef<HTMLDivElement | null>(null);
  const blog = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);

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
