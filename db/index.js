import "dotenv/config";
import { drizzle } from 'drizzle-orm/node-postgres';

// connect with the database
const db = drizzle(process.env.DATABASE_URL);
export default db;

