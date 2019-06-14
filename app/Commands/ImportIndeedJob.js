'use strict'

const { Command } = require('@adonisjs/ace');
const Axios = require('axios');
const Env = use('Env');
const Database = use('Database')
const Job = use('App/Models/Job');

class ImportIndeedJob extends Command {
    
    static get signature () {
        return 'jobs:import';
    }

    static get description () {
        return 'Import all montreal laravel jobs from the Indeed API';
    }

    async handle (args, options) {
        let indeed_publisher_key = Env.get('INDEED_PUBLISHER_KEY');
        let {data: {results: jobs}} = await Axios.get(`http://api.indeed.com/ads/apisearch?publisher=${indeed_publisher_key}&q=laravel&format=json&l=Montr%C3%A9al&co=CA`);
        await Job.createMany(jobs.map(job => {
            return {
                job_title: job.jobtitle, 
                job_description: job.snippet, 
                company_name: job.company
            }
        }));
        Database.close();
        this.success(`${this.icon('success')} Jobs imported on database`);
    }

}

module.exports = ImportIndeedJob;
