import * as React from 'react'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'
import { useRouter } from '../index'

function PageA() {
  return (
    <div data-testid="text">This is PageA</div>
  )
}

function PageB() {
  return (
    <div data-testid="text">This is PageB</div>
  )
}

describe('useRouter', () => {
  test('default', () => {
    const { result } = renderHook(() =>
      useRouter({
        '/': () => PageA(),
      })
    )

    const [history, router] = result.current

    render(<>{router}</>)
    expect(screen.getByTestId('text')).toHaveTextContent('This is PageA')
  })
})
