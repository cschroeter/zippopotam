import { describe, expect, it } from 'vitest'
import Page from '~/app/page'
import { render, screen } from './utils'

describe('Page', () => {
  it("should render the page's heading", () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1, name: 'Location Lookup' })).toBeDefined()
  })
})
