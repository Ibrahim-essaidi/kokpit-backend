export type AppInfo = { name: string; version: string }

type Endpoint = { method: 'GET'; path: string; description: string }

const endpoints: Endpoint[] = [
  { method: 'GET', path: '/', description: "Documentation d'entrée de l'API" },
]

export function getApiInfo({ name, version }: AppInfo) {
  return { name, version, endpoints }
}
