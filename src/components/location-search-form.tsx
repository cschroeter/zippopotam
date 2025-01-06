'use client'
import { HStack, Input, Stack } from '@chakra-ui/react'
import { useActionState, useEffect, useState } from 'react'
import { searchLocation } from '~/app/actions'
import { Field } from '~/components/ui/field'
import { toaster } from '~/components/ui/toaster'
import { CountrySelect } from './country-select'
import { LocationSearchResultDialog } from './location-search-result-dialog'
import { SubmitButton } from './submit-button'

export const LocationSearchForm = () => {
  const [open, setOpen] = useState(false)
  const [state, formAction] = useActionState(searchLocation, {})

  useEffect(() => {
    state.status === 'success'
      ? setOpen(true)
      : state.message &&
        toaster.create({
          title: state.message,
          type: state.status,
        })
  }, [state])

  return (
    <form action={formAction}>
      <Stack gap="4" direction={{ base: 'column', md: 'row' }}>
        <HStack gap="3">
          <Field width="24">
            <CountrySelect name="countryCode" defaultValue={['us']} />
          </Field>
          <Field>
            <Input name="zip" required placeholder="Enter zip" autoFocus size="xl" />
          </Field>
        </HStack>
        <SubmitButton size={{ base: 'lg', md: 'xl' }}>Search</SubmitButton>
      </Stack>
      <LocationSearchResultDialog
        location={state.location}
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      />
    </form>
  )
}
