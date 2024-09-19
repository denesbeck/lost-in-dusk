import { ReactElement, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

interface MenuProps {
  children: ReactElement;
}

const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

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
        className={`z-50 p-1 ${!isOpen && "ring-1 hover:bg-gray-800"} ring-slate-200 transition-colors duration-200 ease-in-out`}
      >
        <RxHamburgerMenu
          className={`text-3xl transition-all duration-200 ease-in-out ${isOpen && "rotate-90"}`}
        />
      </button>
      {isOpen && (
        <div className="flex fixed top-0 left-0 flex-col justify-center items-center p-8 space-y-4 w-screen h-screen bg-gray-900 animate-textFocus">
          {children}
        </div>
      )}
    </>
  );
};

export default Menu;
