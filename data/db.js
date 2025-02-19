import knex from "knex";
import knexConfig from "../knexfile"; // ✅ Import knex configuration

// Determine the environment (development, staging, or production)
const environment = process.env.NODE_ENV || "development";

// Initialize knex instance
const db = knex(knexConfig[environment]);

export default db;
