import React from 'react'
import { hydrateRoot } from 'react-dom/client'

export const Container = () => (
  <html>
    <body></body>
  </html>
)

const reactRoot = hydrateRoot(document.querySelector('#root')!, <Container />)
reactRoot.render(<Container />)
