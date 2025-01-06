import user from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Page from '~/app/page'
import { render, screen, waitFor } from '~/tests/utils'

describe('Page', () => {
  it('renders the heading', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1, name: 'Location Lookup' })).toBeInTheDocument()
  })

  it('searches for a US location by zip code', async () => {
    render(<Page />)

    await user.type(screen.getByPlaceholderText('Enter zip'), '90210')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() => {
      expect(screen.getByText('Beverly Hills, CA')).toBeInTheDocument()
    })
  })

  it('searches for a DE location by zip code', async () => {
    render(<Page />)

    await user.click(screen.getByRole('combobox', { name: 'Select a country' }))
    await user.click(screen.getByTitle('Germany'))

    await user.type(screen.getByPlaceholderText('Enter zip'), '76829')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() => {
      expect(screen.getByText('Landau in der Pfalz, RP')).toBeInTheDocument()
    })
  })

  it('displays a message when no location is found', async () => {
    render(<Page />)

    await user.type(screen.getByPlaceholderText('Enter zip'), '00000')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    await waitFor(() => {
      expect(screen.getByText('Invalid postal code')).toBeInTheDocument()
    })
  })
})
