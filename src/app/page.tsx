import { Stack } from '@chakra-ui/react'
import { LocationSearchForm } from '~/components/location-search-form'
import { PageHeader } from '~/components/page-header'

export default function Page() {
  return (
    <Stack gap={{ base: '16', md: '24' }} alignItems="center">
      <PageHeader
        tagline="Zippopotam"
        headline="Location Lookup"
        description="Pop in a postal code and uncover all the details about that spot."
      />
      <LocationSearchForm />
    </Stack>
  )
}
