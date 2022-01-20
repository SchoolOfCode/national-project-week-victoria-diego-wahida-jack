import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserByID,
  createNewUser,
  UpdateUserByID,
  DeleteUserByID,
} from "../models/users.js";

//ROUTES

//get all users
router.get("/", async function (req, res) {
  res.json({
    success: true,
    payload: await getAllUsers(),
  });
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await getUserByID(id),
  });
});

router.post("/", async function (req, res) {
  const person = req.body;
  res.json({
    success: true,
    payload: await createNewUser(person),
  });
});

router.put("/:id", async function (req, res) {
  const update = req.body;
  const id = req.params.id;
  res.json({
    success: true,
    payload: await UpdateUserByID(id, update),
  });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await DeleteUserByID(id),
  });
});

export default router;
