import * as React from 'react'
import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'
import { useRouter } from '../index'

describe('useRouter', () => {
  test('default', () => {
    const { result } = renderHook(() =>
      useRouter({
        '/': () => (
          <div data-testid="text">Here is root</div>
        ),
      })
    )

    const [history, router] = result.current

    render(<>{router}</>)
    expect(screen.getByTestId('text')).toHaveTextContent('Here is root')
  })

  test('transition', () => {
    const { result } = renderHook(() =>
      useRouter({
        '/': () => (
          <div data-testid="text">Here is root</div>
        ),
        '/aaa': () => (
          <div data-testid="text">Here is aaa</div>
        )
      })
    )

    const [history, router] = result.current
    render(<>{router}</>)

    act(() => {
      history.push('/aaa')
    })

    expect(screen.getByTestId('text')).toHaveTextContent('Here is aaa')
  })
})
