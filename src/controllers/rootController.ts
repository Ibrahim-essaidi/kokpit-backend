import type { Request, Response } from 'express'

import { appInfo } from '@/config/appInfo.js'
import { getApiInfo } from '@/services/root/rootService.js'

export function getRoot(_req: Request, res: Response) {
  res.json(getApiInfo(appInfo))
}
