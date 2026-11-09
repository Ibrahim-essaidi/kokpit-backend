import { readFileSync } from 'node:fs'
import { join } from 'node:path'

type PackageJson = { name: string; version: string }

// Le serveur est toujours lancé depuis la racine du projet (dev, build et prod).
const { name, version } = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
) as PackageJson

export const appInfo = { name, version }
