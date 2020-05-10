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
    const runRender = () => {
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

      return result
    }

    const result1 = runRender()
    const [history1, _] = result1.current

    act(() => {
      history1.push('/aaa')
    })

    // Usually history.push triggers re-rendering by browsers.
    // I am not sure about why, but jest does not emulate history API
    // so here manually tries to do the same thing like re-rendering
    // just by calling runRender() again.

    const result2 = runRender()
    const [history2, router] = result2.current

    render(<>{router}</>)
    expect(screen.getByTestId('text')).toHaveTextContent('Here is aaa')
  })
})
