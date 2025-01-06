import { Container } from '@chakra-ui/react'
import { ColorModeButton } from '~/components/ui/color-mode'

export const Navbar = () => {
  return (
    <Container as="nav" maxW="6xl" py="3" display="flex" justifyContent="flex-end">
      <ColorModeButton />
    </Container>
  )
}
