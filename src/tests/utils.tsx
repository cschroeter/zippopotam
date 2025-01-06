import { type RenderOptions, render } from '@testing-library/react'
import type { PropsWithChildren, ReactNode } from 'react'
import { Provider } from '~/components/ui/provider'
import { Toaster } from '~/components/ui/toaster'

const AllTheProviders = (props: PropsWithChildren) => {
  return (
    <Provider>
      {props.children}
      <Toaster />
    </Provider>
  )
}

const customRender = (ui: ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
