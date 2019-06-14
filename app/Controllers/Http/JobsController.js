'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} request */
/** @typedef {import('@adonisjs/framework/src/View')} view */

const Jobs = use('App/Models/Job');

class JobsController {

    
    async index({request, view}){
        let jobs = await Jobs.all();
        return view.render('jobs.index', {jobs: jobs.toJSON()});
    }

}

module.exports = JobsController
