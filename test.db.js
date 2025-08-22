import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

console.log("DATABASE_URL =>", process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => {
    console.log("✅ Connected successfully!");
    return client.end();
  })
  .catch(err => {
    console.error("❌ Connection failed:", err);
  });

