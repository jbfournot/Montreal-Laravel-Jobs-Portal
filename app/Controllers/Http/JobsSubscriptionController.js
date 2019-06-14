'use strict'

const JobSubscription = use('App/Models/JobSubscription')

class JobsSubscriptionController {

    async index({view}){
        return view.render('jobs.subscription')
    }

    async store({request, response}){
        JobSubscription.create(request.only('email'));
        return response.redirect('/');
    }

}

module.exports = JobsSubscriptionController;
