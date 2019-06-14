'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */

const Schema = use('Schema')

class JobsSchema extends Schema {
    
    up(){
        this.create('jobs', (table) => {
            table.increments();
            table.string('job_title').notNullable();
            table.text('job_description', 'longtext');
            table.string('company_name').notNullable();
            table.timestamps();
        });
    }

    down(){
        this.drop('jobs');
    }

}

module.exports = JobsSchema
