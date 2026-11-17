import type { Request, Response } from 'express'

import { dbHealthRepository } from '@/repositories/dbHealth/dbHealthRepository.js'
import { checkDbHealth } from '@/services/dbHealth/dbHealthService.js'

export async function getDbHealth(_req: Request, res: Response) {
  const dbHealth = await checkDbHealth(dbHealthRepository)

  res.status(dbHealth.status === 'ok' ? 200 : 503).json(dbHealth)
}
