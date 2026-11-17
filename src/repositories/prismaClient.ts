import { PrismaPg } from '@prisma/adapter-pg'

import { env } from '@/config/env.js'
import { PrismaClient } from '@/generated/prisma/client.js'

const adapter = new PrismaPg({
  connectionString: env.databaseUrl,
  // Sans délai, une base injoignable bloquerait la requête indéfiniment.
  connectionTimeoutMillis: 5000,
})

export const prisma = new PrismaClient({ adapter })
