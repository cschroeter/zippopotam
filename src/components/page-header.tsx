import { Heading, Stack, type StackProps, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export interface PageHeaderProps extends StackProps {
  tagline?: ReactNode
  headline: ReactNode
  description: ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
  const { tagline, headline, description, ...stackProps } = props
  return (
    <Stack gap={{ base: '6', md: '8' }} align="center" textAlign="center" {...stackProps}>
      <Stack gap={{ base: '5', md: '6' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          <Text textStyle={{ base: 'sm', md: 'md' }} fontWeight="medium">
            {tagline}
          </Text>
          <Heading as="h1" textStyle={{ base: '4xl', md: '5xl' }}>
            {headline}
          </Heading>
        </Stack>
        <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl">
          {description}
        </Text>
      </Stack>
    </Stack>
  )
}
