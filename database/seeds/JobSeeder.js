'use strict'

/*
|--------------------------------------------------------------------------
| JobSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory');

class JobSeeder{
    
    async run(){
        Factory.model('App/Models/Job').createMany(10);
    }

}

module.exports = JobSeeder
