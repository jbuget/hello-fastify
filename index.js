import dotenv from 'dotenv';
import Fastify from 'fastify';

dotenv.config();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const fastify = Fastify({
  logger: true
});

fastify.get('/', () => {
  return 'Hello world!'
});

const start = async () => {
  try {
    await fastify.listen({ port, host });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
