import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Navitem } from "components";
import { GiHamburgerMenu } from "react-icons/gi";

const ITEMS = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="flex animate-textFocus">
      <div className="py-2 px-4 mr-auto text-lg font-semibold">LostInDusk</div>
      <div className="hidden justify-center items-center py-1 px-4 mb-4 space-x-4 w-max sm:flex">
        {ITEMS.map((item) => (
          <Navitem key={item.path} label={item.label} path={item.path} />
        ))}
      </div>
      <div className="flex z-10 justify-end py-2 px-4 w-full sm:hidden">
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
