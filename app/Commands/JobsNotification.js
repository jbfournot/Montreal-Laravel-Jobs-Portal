'use strict'

const { Command } = require('@adonisjs/ace');
const Mail = use('Mail');
const Env = use('Env');
const Database = use('Database');
const Job = use('App/Models/Job');
const JobSubscription = use('App/Models/JobSubscription');

class JobsNotification extends Command {
    
    static get signature () {
        return 'jobs:notifications';
    }

    static get description () {
        return 'Send a notification to all laravel members';
    }

    async handle (args, options){
        let jobs = await Job.query().limit(3).fetch();
        let emails = await JobSubscription.query().select('email').fetch();
        emails = emails.toJSON().map(email => email.email);
        Mail.send('emails.jobs.notification', {jobs: jobs.toJSON()}, message => {
            message.from('hello@world.com');
            message.subject('Selection of customized job offers');
            message.to(emails);
        });
        Database.close();
    }
}

module.exports = JobsNotification
