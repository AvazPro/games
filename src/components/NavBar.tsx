import logoPath from '../assets/logo.png'
import { HStack, Image, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <HStack >
        <Image src={logoPath} boxSize={{ base: '45px', sm: '70px' }} borderRadius='50%' alt="logo" />
        <Text fontSize={{ base: '20px', md: '30px' }}>React Game Platform</Text>
    </HStack>
  )
}
export default NavBar
