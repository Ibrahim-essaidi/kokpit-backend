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
├── src/
│   ├── index.ts       # démarrage du serveur
│   ├── app.ts         # assemblage de l'app Express
│   ├── config/        # configuration (env, infos du package)
│   ├── routes/        # déclaration des routes
│   ├── controllers/   # handlers
│   └── services/      # logique métier
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```
