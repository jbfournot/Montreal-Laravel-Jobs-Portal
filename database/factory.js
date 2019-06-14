'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')

Factory.blueprint('App/Models/Job', async (faker) => {
    return {
        job_title: faker.sentence({words: 5}),
        job_description: faker.paragraph({sentences: 3}),
        company_name: faker.company()
    }
});