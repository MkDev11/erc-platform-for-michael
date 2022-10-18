import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import asyncHandler from "express-async-handler";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "data/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    legalBusinessName,
    numberOfW2,
    industry,
  } = req.body;

  await db.read();

  db.data ||= { users: [] };

  const { users } = db.data;
  users.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    legalBusinessName: legalBusinessName,
    numberOfW2: numberOfW2,
    industry: industry,
  });

  await db.write();
});

const getUser = asyncHandler(async (req, res) => {
  await db.read();

  db.data ||= { users: [] };

  const { users } = db.data;

  res.json(users);
});

export { registerUser, getUser };
