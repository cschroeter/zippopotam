import { Container } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { Navbar } from '~/components/navbar'
import { Provider } from '~/components/ui/provider'
import { Toaster } from '~/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zippopotam',
  description: 'An easy way to look up postal codes',
}

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  fallback: ['system-ui', 'sans-serif'],
})

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning className={outfit.variable}>
      <body>
        <Provider>
          <Navbar />
          <Container as="main" py={{ base: '16', md: '24' }} maxW="2xl" flex="1">
            {children}
          </Container>
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
