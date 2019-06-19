'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', 'JobsController.index').as('jobs.index');
Route.get('/subscription', 'JobsSubscriptionController.index').as('jobs.subscription');
Route.post('/subscription', 'JobsSubscriptionController.store').validator('JobSubscription');

Route.group(() => {
    Route.get('/jobs', 'JobsController.index');
}).prefix('api/v1').formats(['json']);