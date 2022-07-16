import React from 'react'
import Fastify from 'fastify'
import { renderToString } from 'react-dom/server'
import { Container } from './client'

const fastify = Fastify({ logger: true })

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
  async (_, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return renderToString(<Container />)
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
