import { type SelectRootProps, VisuallyHidden, createListCollection } from '@chakra-ui/react'
import type { JSX } from 'react'
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '~/components/ui/select'
import { DE } from './flags/de'
import { US } from './flags/us'

// with more flags, you probably want to lazy load them
const countries = createListCollection({
  items: [
    { value: 'us', label: 'United States', flag: US },
    { value: 'de', label: 'Germany', flag: DE },
  ],
})

export const CountrySelect = (props: Omit<SelectRootProps, 'collection'>) => {
  return (
    <SelectRoot collection={countries} {...props}>
      <VisuallyHidden>
        <SelectLabel>Select a country</SelectLabel>
      </VisuallyHidden>
      <SelectTrigger>
        <SelectValueItem />
      </SelectTrigger>
      <SelectContent portalled={false}>
        {countries.items.map((item) => (
          <SelectItem item={item} key={item.value} justifyContent="flex-start">
            {item.flag()} {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

const SelectValueItem = () => (
  <SelectValueText placeholder="Select movie">
    {(items: Array<{ flag: () => JSX.Element }>) => {
      return items[0].flag()
    }}
  </SelectValueText>
)
