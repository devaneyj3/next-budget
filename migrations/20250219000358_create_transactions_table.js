/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = async function (knex) {
	return knex.schema.createTable("transactions", (table) => {
		table.increments("id").primary();
		table.string("description").notNullable();
		table.decimal("amount", 10, 2).notNullable();
		table.string("type").notNullable(); // "inc" for income, "exp" for expenses
		table.string("account").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = async function (knex) {
	return knex.schema.dropTableIfExists("transactions");
};
