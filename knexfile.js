module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/dev.sqlite3",
		},
		useNullAsDefault: true, // ✅ Required for SQLite
		migrations: {
			directory: "./migrations", // ✅ Make sure migrations are stored correctly
		},
	},
};
