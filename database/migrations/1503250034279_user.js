'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('users', (table) => {
			table.increments();
			table.string('userid').notNullable().unique();
			table.string('username').notNullable();
			table.string('email').notNullable().unique();
			table.string('password').notNullable();
			table.integer('score');
			table.timestamps();
		});
	}

	down() {
		this.drop('users');
	}
}

module.exports = UserSchema;
