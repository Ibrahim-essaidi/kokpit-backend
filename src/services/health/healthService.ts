export type ProcessState = { uptimeSeconds: number; now: Date }

export function getHealth({ uptimeSeconds, now }: ProcessState) {
  return {
    status: 'ok',
    uptime: uptimeSeconds,
    timestamp: now.toISOString(),
  }
}
