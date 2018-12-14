'use strict';

const Database = use('Database');
const User = use('App/Models/User');

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

	async userData({ request, response }) {
		const { userid } = request.all();
		const getData = await this.middlewareUserData(userid);
		if (getData.length !== 0) {
			response.send(getData);
		} else {
			return await this.creatUser(request.all());
		}
	}

	async middlewareUserData(userid) {
		const results = await Database.select('userid', 'username', 'score')
			.from('users')
			.where({ userid });
		return results;
	}

	async creatUser({ userid, username, score = 0 }) {
		await User.create({
			userid,
			username,
			score
		});
		return {
			userid,
			username,
			score
		};
	}
}

module.exports = UserController;
