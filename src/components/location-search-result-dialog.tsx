import { type DialogRootProps, For, HStack, Heading, Separator, Stack } from '@chakra-ui/react'
import { Button } from '~/components/ui/button'
import { DataListItem, DataListRoot } from '~/components/ui/data-list'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '~/components/ui/dialog'
import type { Location } from '~/lib/client'
import { MapPreviewLink } from './map-preview-link'

interface Props extends Omit<DialogRootProps, 'children'> {
  location?: Location
}

export const LocationSearchResultDialog = (props: Props) => {
  const { location, ...dialogProps } = props
  return (
    <DialogRoot placement="center" size="xs" {...dialogProps}>
      <DialogContent>
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Search Results for {location?.['post code']}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack gap="8">
            <For each={location?.places}>
              {(place) => {
                const location = `${place['place name']}, ${place['state abbreviation']}`
                return (
                  <Stack gap="3" key={location}>
                    <HStack justify="space-between">
                      <Heading textStyle="sm">{location}</Heading>
                      <MapPreviewLink latitude={place.latitude} longitude={place.longitude} />
                    </HStack>
                    <Separator />
                    <DataListRoot orientation="horizontal" gap="3">
                      <DataListItem grow label="Location" value={place['place name']} />
                      <DataListItem grow label="State" value={place.state} />
                      <DataListItem grow label="Latitude" value={place.latitude} />
                      <DataListItem grow label="Longitude" value={place.longitude} />
                    </DataListRoot>
                  </Stack>
                )
              }}
            </For>
          </Stack>
        </DialogBody>
        <DialogFooter justifyContent="center" pb="6">
          <DialogActionTrigger asChild>
            <Button width="full">Done</Button>
          </DialogActionTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  )
}
