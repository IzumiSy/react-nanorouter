# react-nanorouter
[![react-nanorouter](https://circleci.com/gh/IzumiSy/react-nanorouter.svg?style=svg)](https://app.circleci.com/pipelines/github/IzumiSy/react-nanorouter)
[![npm version](https://badge.fury.io/js/%40izumisy%2Freact-nanorouter.svg)](https://www.npmjs.com/package/@izumisy/react-nanorouter)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

Terribly simple router for React

## Example
Only `useRouter` function is available.
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
