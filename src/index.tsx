import React from 'react'
import Fastify from 'fastify'
import { renderToString } from 'react-dom/server'

const fastify = Fastify({ logger: true })

const App = () => (
  <html>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
)

fastify.get(
  '/',
  {
    schema: {
      response: {
        200: {
          type: 'string',
        },
      },
    },
  },
  async (_request, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return renderToString(<App />)
  }
)

// start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
