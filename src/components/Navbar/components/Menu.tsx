import { ReactElement, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCheckBrowser } from "@/hooks";

interface MenuProps {
  children: ReactElement;
}

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const browser = useCheckBrowser();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`z-50 cursor-pointer p-1 ${!isOpen && "hover:bg-secondary ring-1"} ring-slate-200 transition-colors duration-200 ease-in-out`}
      >
        <RxHamburgerMenu
          className={`text-3xl transition-all duration-200 ease-in-out ${isOpen && "rotate-90"}`}
        />
      </button>
      {isOpen && (
        <div
          className={`animate-text-focus fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center space-y-4 p-8 ${["Safari", "Chrome"].includes(browser) ? "bg-root" : "bg-root/30 backdrop-blur-md backdrop-brightness-90"}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Menu;
