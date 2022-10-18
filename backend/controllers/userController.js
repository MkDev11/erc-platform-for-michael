import path from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import asyncHandler from "express-async-handler";

const __dirname = path.resolve();

const file = path.join(__dirname, "/backend/data/db.json");
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

  db.data = db.data || { users: [] };

  const { users } = db.data;
  let okay = true;

  for (let i = 0; i < users.length; i++) {
    Object.keys(users[i]).forEach((key) => {
      if (users[i][key] != req.body[key]) okay = false;
    });
    if (okay == true) {
      res.status(201).json({ result: 0 });
      return;
    }
  }

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

  res.status(201).json({ result: 1 });
});

const getUser = asyncHandler(async (req, res) => {
  await db.read();

  db.data ||= { users: [] };

  const { users } = db.data;

  res.json(users);
});

export { registerUser, getUser };
