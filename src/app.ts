import express from 'express'

import { cors } from '@/middlewares/cors.js'
import { errorHandler } from '@/middlewares/errorHandler.js'
import { notFound } from '@/middlewares/notFound.js'
import { routes } from '@/routes/index.js'

export const app = express()

app.use(cors)
app.use(express.json())
app.use(routes)
app.use(notFound)
app.use(errorHandler)
