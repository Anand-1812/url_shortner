import 'dotenv/config';

import {defineConfig} from 'drizzle-kit'

export default defineConfig({
  out: './dizzle',
  schema: './models/index.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABSE_URL
  },
})

