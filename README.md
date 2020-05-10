# react-nanorouter
[![react-nanorouter](https://circleci.com/gh/IzumiSy/react-nanorouter.svg?style=svg)](https://github.com/IzumiSy/react-nanorouter)

Terribly simple router for React

## Example
Only `useReactor` function is available.
```javascript
import { useRouter } from 'react-nanorouter'
import { ProductsPage } from './pages/products'
import { UsersPage } from './pages/users'

function App() {
  const [history, router] = useRouter({
    '/products': (history) => <ProductsPage />,
    '/users': (history) => <UsersPage />,
  })

  return (
    <>{router}</>
  )
}
```

## Contributions
PRs accepted

## LICENSE
MIT
