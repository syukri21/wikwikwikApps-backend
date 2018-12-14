'use strict';

const Database = use('Database');

class UserController {
	async getAllScore({ request, response }) {
		const results = await Database.select('username', 'score')
			.from('users')
			.orderBy('score', 'desc')
			.limit(5);

		response.send({
			messages : 'success',
			results
		});
	}
}

module.exports = UserController;
