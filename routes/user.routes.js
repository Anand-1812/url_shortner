import express from "express";
import db from '../db/index.js'
import { userTable } from '../models/index.js'
import { eq } from "drizzle-orm";
import { randomBytes, createHmac } from "crypto";

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const [existingUser] = db
    .select({
      id: userTable.id,
    })
    .from(userTable)
    .where(eq(userTable.id, id));

  const salt = randomBytes(256).toString('hex');
  const hashedPass = createHmac('sha256', salt).update(password).digest('hex');

  if (existingUser) {
    return res.status(400).json({ error: `User with email ${email} already exists.` });
  }

  const user = await db.insert(userTable).values({
    email,
    firstName,
    lastName,
    salt,
    password: hashedPass
  }).returning({ id: userTable.id });


  return res.status(201).json({ data: { UserId: user.id } });

});

export default userRouter;

