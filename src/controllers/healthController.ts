import type { Request, Response } from 'express'

import { getHealth } from '@/services/health/healthService.js'

export function getHealthStatus(_req: Request, res: Response) {
  res.json(getHealth({ uptimeSeconds: process.uptime(), now: new Date() }))
}
