import { app } from '@/app.js'
import { env } from '@/config/env.js'

app.listen(env.port, () => {
  console.log(`Serveur démarré sur http://localhost:${env.port}`)
})
