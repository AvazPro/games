import logoPath from "../assets/logo3.png";
import { HStack, Image, Input } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import  NavBarProps  from "./SearchInput";


interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: NavBarProps) => {
 const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  onSearch(event.target.value);
 }
  return (
    <HStack justify={"space-between"} p={5}>
      <Image
        src={logoPath}
        boxSize={{ base: "45px", sm: "70px" }}
        borderRadius="50%"
        alt="logo"
      />
      <Input type="text" onChange={handleClick} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
