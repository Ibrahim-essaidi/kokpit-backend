export type AppInfo = { name: string; version: string }

type Endpoint = { method: 'GET'; path: string; description: string }

const endpoints: Endpoint[] = [
  { method: 'GET', path: '/', description: "Documentation d'entrée de l'API" },
  { method: 'GET', path: '/health', description: "État du process (status, uptime, timestamp)" },
  { method: 'GET', path: '/db-health', description: 'État de la base de données (status, latencyMs), 503 si injoignable' },
]

export function getApiInfo({ name, version }: AppInfo) {
  return { name, version, endpoints }
}
