export type DbHealthRepository = { ping(): Promise<void> }

export type DbHealth =
  | { status: 'ok'; latencyMs: number }
  | { status: 'unreachable' }

export async function checkDbHealth(
  repository: DbHealthRepository,
  now: () => number = Date.now,
): Promise<DbHealth> {
  const start = now()

  try {
    await repository.ping()
  } catch {
    return { status: 'unreachable' }
  }

  return { status: 'ok', latencyMs: now() - start }
}
