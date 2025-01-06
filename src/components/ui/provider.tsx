'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Global
        styles={{
          html: {
            '--chakra-fonts-heading': 'var(--font-outfit)',
            '--chakra-fonts-body': 'var(--font-outfit)',
          },
        }}
      />
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
