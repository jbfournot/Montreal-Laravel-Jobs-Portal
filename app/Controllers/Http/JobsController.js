'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} request */
/** @typedef {import('@adonisjs/framework/src/View')} view */

class JobsController {

    
    async index({request, view}){
        return view.render('jobs.index');
    }

}

module.exports = JobsController
