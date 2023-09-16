import { fastify } from 'fastify'
import { getAllPromptsRoute } from './Routes/get-all-prompts'
import { uploadVideoRoute } from './Routes/upload-video'
import { createTranscriptionRoute } from './Routes/create-transciption'
import { generateAiCompletionRoute } from './Routes/generate-ai-completion'
import fastifyCors from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP server running!")
})