import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Navitem, Title } from "@/components";
import { GiHamburgerMenu } from "react-icons/gi";

const ITEMS = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="flex animate-textFocus py-2">
      <Title mr />
      <div className="mb-4 hidden w-max items-center justify-center space-x-4 px-8 py-1 sm:flex">
        {ITEMS.map((item) => (
          <Navitem key={item.path} label={item.label} path={item.path} />
        ))}
      </div>
      <div className="z-10 flex w-full justify-end px-4 py-2 sm:hidden">
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
            {ITEMS.map((item) => (
              <MenuItem key={item.path}>
                <Navitem label={item.label} path={item.path} />
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
