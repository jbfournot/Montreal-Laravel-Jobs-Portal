'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {

    getCreatedAt(value){
        return value.fromNow();
    }

}

module.exports = Job
