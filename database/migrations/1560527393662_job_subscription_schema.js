'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */

const Schema = use('Schema')

class JobSubscriptionSchema extends Schema {
    
    up(){
        this.create('job_subscriptions', (table) => {
            table.increments();
            table.string('email').notNullable();
            table.timestamps();
        });
    }

    down(){
        this.drop('job_subscriptions');
    }

}

module.exports = JobSubscriptionSchema
