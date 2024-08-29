import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import {
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Platforms } from "../hooks/usePlatforms";

interface SelectorPlatformProps {
  selectedPlatform: Platforms | null;
  onSelectPlatform: (platform: Platforms) => void;
}

const SelectorPlatform = ({ selectedPlatform, onSelectPlatform }: SelectorPlatformProps) => {
  const { data, error } = usePlatforms();

  if (error) return <Text>{error}</Text>; 


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>{selectedPlatform ? selectedPlatform?.name : 'Platforms'}</MenuButton>
      <MenuList >
        {data.map((platform) => (
          <MenuItem
          onClick={() => onSelectPlatform(platform)}
            key={platform.id}
            >
            {platform.name}
            </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectorPlatform;
