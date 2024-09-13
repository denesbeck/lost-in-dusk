import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
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
    <nav className="flex fixed top-0 z-50 items-start py-2 px-6 w-full h-max animate-textFocus backdrop-blur-sm">
      <Title mr />
      {pathname !== "/contact" && (
        <>
          <div className="hidden justify-center items-center py-1 space-x-4 w-max sm:flex animate-textFocus">
            {items.map((item) => (
              <Navitem
                key={item.label}
                label={item.label}
                path={item.path}
                action={item.action || (() => {})}
              />
            ))}
          </div>
          <div className="flex justify-end py-2 w-full sm:hidden animate-textFocus">
            <Menu>
              <MenuButton
                rounded={"none"}
                py={2}
                color={"slate.900"}
                as={IconButton}
                icon={<GiHamburgerMenu className="w-5 h-5" />}
                h="max-content"
                bg={"black"}
                border={"1px solid gray"}
                _hover={{ bg: "gray.800" }}
                _active={{ bg: "gray.800" }}
              />
              <MenuList
                border={"1px solid gray"}
                p={4}
                bg={"gray.900"}
                rounded={"none"}
                shadow={"8px 8px 0px black"}
                className="grid gap-2"
              >
                {items.map((item) => (
                  <Navitem
                    key={item.label}
                    label={item.label}
                    path={item.path}
                    action={item.action || (() => {})}
                  />
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
