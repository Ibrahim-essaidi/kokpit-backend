# kokpit-backend

API Express et TypeScript du projet Kokpit, avec Prisma et PostgreSQL. Les règles de l'équipe (architecture, nommage, imports, tests) sont dans `.claude/rules/`.

## Arborescence

À mettre à jour à chaque fois que le repo évolue (nouveau dossier, fichier déplacé ou supprimé).

```
kokpit-backend/
├── CLAUDE.md          # ce fichier
├── .claude/
│   ├── rules/         # règles de l'équipe
│   └── skills/        # skills du projet
├── docs/
│   └── TECH.md        # stack technique
├── prisma/
│   └── schema.prisma  # schéma de la base (sans modèle pour l'instant)
├── src/
│   ├── index.ts       # démarrage du serveur
│   ├── app.ts         # assemblage de l'app Express
│   ├── config/        # configuration (env, infos du package)
│   ├── middlewares/   # CORS, 404, gestion d'erreur, ApiError
│   ├── routes/        # déclaration des routes
│   ├── controllers/   # handlers
│   ├── services/      # logique métier
│   ├── repositories/  # accès aux données (client Prisma)
│   └── types/         # contrat de l'API partagé avec le front
├── .env.example       # variables d'environnement attendues
├── package.json
├── pnpm-lock.yaml
├── prisma.config.ts   # config du CLI Prisma
├── pnpm-workspace.yaml
└── tsconfig.json
```
