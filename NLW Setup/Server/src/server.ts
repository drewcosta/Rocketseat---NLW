// Back-end API RESTful
// localhost:3333/xxxx -> rotas
// fastify ao inves de express

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server running')
})
