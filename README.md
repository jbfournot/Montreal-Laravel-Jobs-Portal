## Étape 1
- Découverte de l'architecture du framework
## Étape 2
- Création d'[une nouvelle route](/start/routes.js) pour la page d'accueil
- Création d'un [nouveau controller](app/Controllers/Http/JobsController.js) en utilisant la commande `adonis make:controller JobsController`
- Création d'une [vue qui listera nos jobs](resources/views/jobs/index.edge) et du [layout principal](resources/views/app.edge)
## Étape 3
- Connexion à notre base de données sqlite. Pour commencer, installation du pilote avec la commande `npm install sqlite3 --save` puis on lance les migrations avec la commande `adonis migration:run`
- Création du [fichier de migration](database/migrations/1560470053996_jobs_schema.js) de la table jobs avec la commande `adonis make:migration jobs`
- Création du [model Job](app/Models/Job.js) avec la commande `adonis make:model Job`
- Création de [notre seeder](database/seeds/JobSeeder.js) et de [notre factory](database/factory.js) qui va créer pour nous 10 jobs
- On lance le seed avec la commande `adonis seed`