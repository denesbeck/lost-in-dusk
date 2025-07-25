import { Menu, Navitem, Title } from "./components";
import { useLocation } from "react-router-dom";

interface Item {
  label: string;
  path: string;
  action: () => void;
}

interface NavbarProps {
  items: Item[];
}

const Navbar = ({ items }: NavbarProps) => {
  const { pathname } = useLocation();

  return (
    <nav className="flex fixed top-0 z-50 items-center py-2 px-6 w-full animate-text-focus h-max backdrop-blur-md">
      <Title mr />
      {pathname !== "/contact" && (
        <>
          <div className="hidden justify-center items-center py-1 space-x-4 w-max sm:flex animate-text-focus">
            {items.map((item) => (
              <Navitem
                key={item.label}
                label={item.label}
                path={item.path}
                action={item.action || (() => {})}
              />
            ))}
          </div>
          <div className="flex justify-end py-2 w-full sm:hidden animate-text-focus">
            <Menu>
              <>
                {items.map((item) => (
                  <Navitem
                    key={item.label}
                    label={item.label}
                    path={item.path}
                    action={item.action || (() => {})}
                  />
                ))}
              </>
            </Menu>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
