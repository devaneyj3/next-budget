/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("transactions").del();

	// Inserts seed entries
	await knex("transactions").insert([
		{
			id: 1,
			description: "Freelance Payment",
			amount: 500.0,
			type: "inc",
			account: "Checking",
			category: "Checking",
			date: new Date(),
		},
		{
			id: 2,
			description: "Groceries",
			amount: 75.49,
			type: "exp",
			account: "Checking",
			category: "Checking",
			date: new Date(),
		},
		{
			id: 3,
			description: "Car Payment",
			amount: 250.0,
			type: "exp",
			account: "CreditCard",
			category: "CreditCard",
			date: new Date(),
		},
	]);
};
