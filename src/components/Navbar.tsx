import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Navitem, Title } from "@/components";
import { GiHamburgerMenu } from "react-icons/gi";

interface Item {
  label: string;
  path: string;
  action: () => void;
}

interface NavbarProps {
  items: Item[];
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <div className="flex fixed top-0 py-2 px-6 w-full animate-textFocus">
      <Title mr />
      <div className="hidden justify-center items-center py-1 mb-4 space-x-4 w-max sm:flex">
        {items.map((item) => (
          <Navitem
            key={item.label}
            label={item.label}
            path={item.path}
            action={item.action || (() => {})}
          />
        ))}
      </div>
      <div className="flex z-10 justify-end py-2 w-full sm:hidden">
        <Menu>
          <MenuButton
            className="ring-1 ring-slate-700"
            p={6}
            as={IconButton}
            icon={<GiHamburgerMenu className="w-6 h-6" />}
            w="max-content"
            bg={"black"}
          />
          <MenuList className="py-4 px-6 space-y-2 bg-gray-900 ring-1 -skew-x-6 shadow-[8px_8px_0px_black] ring-slate-700">
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
    </div>
  );
};

export default Navbar;
