import type { ButtonProps } from '@chakra-ui/react'
import { useFormStatus } from 'react-dom'
import { Button } from '~/components/ui/button'

export const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus()

  return <Button type="submit" loading={pending} {...props} />
}
