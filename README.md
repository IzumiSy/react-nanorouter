# react-nanorouter
Terribly simple router for React

## Example
`useReactor` functions is available. This is all.
```javascript
import { useRouter } from 'react-nanorouter'
import { ProductsPage } from './pages/products'
import { UsersPage } from './pages/users'

function App() {
  const [history, router] = useRouter({
    '/products': <ProductsPage />,
    '/users': <UsersPage />,
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
