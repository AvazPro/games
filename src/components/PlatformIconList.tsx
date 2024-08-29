import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { BsPhoneFill, BsNintendoSwitch, BsGlobe } from "react-icons/bs";

interface PlatformIconListProps {
  platforms: Platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  nintendo: BsNintendoSwitch,
  ios: BsPhoneFill,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <>
      <HStack marginY={'5px'}>
        {platforms.map((p) => (
          <Icon
            key={p.id}
            as={iconMap[p.slug]}
            color="gray.500"
            fontSize={"20px"}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
