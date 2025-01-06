import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { LuMapPinned } from 'react-icons/lu'
import { Tooltip } from '~/components/ui/tooltip'

interface Props {
  latitude: string
  longitude: string
}

export const MapPreviewLink = (props: Props) => {
  const { latitude, longitude } = props
  return (
    <Tooltip content="View on map" openDelay={0}>
      <IconButton aria-label="View on map" unstyled asChild>
        <Link
          href={`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=12/${latitude}/${longitude}`}
          target="_blank"
        >
          <LuMapPinned size="16" />
        </Link>
      </IconButton>
    </Tooltip>
  )
}
