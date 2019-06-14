# Fil de présentation du meetup
Les étapes dans ce document correspondent aux différentes branches du projet. 

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
## Étape 4
- Ajouter notre model au [controller JobsController](app/Controllers/Http/JobsController.js) et [modifier la vue](resources/views/jobs/index.edge) pour boucler sur les jobs proposéss
- Ajouter [au model Job](app/Models/Job.js) le getter pour le champ created_at. Une instance de **momentjs** est retournée et on va pouvoir modifier le format de l'affichage.
- Création de [notre commande](App/Commands/ImportIndeedJob.js) pour télécharger les jobs via l'API de Indeed. On lance la commande `adonis make:command ImportIndeedJobs`
- On ajoute notre commande [au fichier de démarrage de l'application](/start/app.js)
- Pour stocker la clef de l'API de Indeed, et sécuriser l'information, on place dans [les variables d'environnement](/.env) avec la clef **INDEED_PUBLISHER_KEY**
## Étape 5
- Création du nouveau controller [JobsSubscriptionController](app/Controllers/Http/JobsSubscriptionController.js) et de [deux nouvelles routes](/start/routes.js)
- Création de [la nouvelle vue](resources/views/jobs/subscription.edge) pour l'affichage du formulaire de connexion qui appellera la méthode **store** du contrôleur.
- Modification du [layout principal](resources/views/app.edge) pour ajouter le menu de navigation avec le helper `route()`
- Installation du package `adonis install @adonisjs/validator`pour la validation du formulaire et enregistrement dans les providers de notre application depuis le fichier [start/app.js](/start/app.js)
- Création d'un Validator avec la commande `adonis make:validator JobSubscription`
- On termine l'écriture de la méthode **store** dans notre controller [JobsSubscriptionController](app/Controllers/Http/JobsSubscriptionController.js) avec l'écriture en base de données et la redirection vers la page d'accueil
## Étape 6
- Installation de Mail Provider avec la commande `adonis install @adonisjs/mail` et enregistrement dans les providers de notre application depuis le fichier [start/app.js](/start/app.js)
- Création de [notre commande](App/Commands/JobsNotification.js) pour envoyer les 3 derniers jobs disponibles par courriel aux membres. On lance la commande `adonis make:command JobsNotifications`
- On ajoute notre commande [au fichier de démarrage de l'application](/start/app.js)
- Création du [layout principale](resources/views/emails/app.edge) pour les courriels et du [layout pour les notifications](resources/views/emails/jobs/notification.edge)
- Modification des variables dans [le fichier .env](.env) pour se connecter au SMTP de notre instance de maildev
