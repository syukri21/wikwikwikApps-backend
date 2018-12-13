'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Database = use('Database');
const User = use('App/Models/User');
Route.get('/', () => {
	return { greeting: 'Hello world in JSON' };
});

Route.group(() => {
	Route.get('scores', 'UserController.getAllScore');
}).prefix('api/v1/');
