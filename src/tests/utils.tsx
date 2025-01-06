import { type RenderOptions, render } from '@testing-library/react'
import type { PropsWithChildren, ReactNode } from 'react'
import { Provider } from '~/components/ui/provider'

const AllTheProviders = (props: PropsWithChildren) => {
  return <Provider>{props.children}</Provider>
}

const customRender = (ui: ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
