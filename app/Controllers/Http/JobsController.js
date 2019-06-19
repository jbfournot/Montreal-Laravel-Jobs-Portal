'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} request */
/** @typedef {import('@adonisjs/framework/src/View')} view */

const Jobs = use('App/Models/Job');

class JobsController {
    
    async index({request, response, view}){
        let jobs = await Jobs.all();
        if(request.url().includes('api')){
            return response.json(jobs.toJSON());
        }
        return view.render('jobs.index', {jobs: jobs.toJSON()});
    }

}

module.exports = JobsController
