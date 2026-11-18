import type { NextFunction, Request, Response } from 'express'

import { ApiError } from '@/middlewares/apiError.js'

// Erreurs levées par Express lui-même (ex. JSON malformé dans express.json()) :
// elles portent leur code HTTP et indiquent si leur message peut être montré au client.
type ExpressHttpError = Error & { status: number; expose: boolean }

function isExpressHttpError(error: unknown): error is ExpressHttpError {
  return (
    error instanceof Error &&
    typeof (error as Partial<ExpressHttpError>).status === 'number' &&
    (error as Partial<ExpressHttpError>).expose === true
  )
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof ApiError || isExpressHttpError(error)) {
    res.status(error.status).json({ error: error.message })
    return
  }

  console.error(error)
  res.status(500).json({ error: 'Erreur interne du serveur' })
}
