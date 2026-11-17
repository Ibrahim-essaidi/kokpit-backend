import { Router } from 'express'

import { healthRoutes } from '@/routes/healthRoutes.js'
import { rootRoutes } from '@/routes/rootRoutes.js'

export const routes = Router()

routes.use('/health', healthRoutes)
routes.use('/', rootRoutes)
