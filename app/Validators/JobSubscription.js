'use strict'

class JobSubscription {

    get rules () {
        return {
            email: 'required|email|unique:job_subscriptions'
        }
    }

}

module.exports = JobSubscription;
