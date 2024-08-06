import logoPath from '../assets/logo.png'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justify={"space-between"} p={5}>
        <Image src={logoPath} boxSize={{ base: '45px', sm: '70px' }} borderRadius='50%' alt="logo" />
       <ColorModeSwitch />
    </HStack>
  )
}
export default NavBar
