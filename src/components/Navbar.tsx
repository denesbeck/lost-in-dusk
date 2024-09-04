import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Navitem, Title } from "@/components";
import { GiHamburgerMenu } from "react-icons/gi";
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
    <nav className="fixed top-0 flex h-max w-full animate-textFocus items-start px-6 py-2 backdrop-blur-sm">
      <Title mr />
      {pathname !== "/contact" && (
        <>
          <div className="mb-4 hidden w-max animate-textFocus items-center justify-center space-x-4 py-1 sm:flex">
            {items.map((item) => (
              <Navitem
                key={item.label}
                label={item.label}
                path={item.path}
                action={item.action || (() => {})}
              />
            ))}
          </div>
          <div className="flex w-full animate-textFocus justify-end py-2 sm:hidden">
            <Menu>
              <MenuButton
                className="ring-1 ring-slate-700"
                p={6}
                as={IconButton}
                icon={<GiHamburgerMenu className="h-6 w-6" />}
                w="max-content"
                bg={"black"}
              />
              <MenuList className="-skew-x-6 space-y-2 bg-gray-900 px-6 py-4 shadow-[8px_8px_0px_black] ring-1 ring-slate-700">
                {items.map((item) => (
                  <MenuItem key={item.label}>
                    <Navitem
                      label={item.label}
                      path={item.path}
                      action={item.action || (() => {})}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
