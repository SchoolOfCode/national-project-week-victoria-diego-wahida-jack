import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserByID,
  createNewUser,
  UpdateUserByID,
  DeleteUserByID,
  getAllUnsolvedProblems,
  getUnsolvedProblemsByID,
  createNewUnSolvedProblem,
  UpdateUnsolvedProblemByID,
  DeleteUnsolvedProblemByID,
  getAllSolvedProblems,
  getSolvedProblemsByID,
  createNewSolvedProblem,
  UpdateSolvedProblemByID,
  DeleteSolvedProblemByID,
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
    payload: await DeleteUser(id),
  });
});

//Unsolved Problems
router.get("/unsolvedproblems", async function (req, res) {
  res.json({
    success: true,
    payload: await getAllUnsolvedProblems(),
  });
});

router.get("/unsolvedproblems/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await getUnsolvedProblemsByID(id),
  });
});

router.post("/unsolvedproblems", async function (req, res) {
  const problem = req.body;
  res.json({
    success: true,
    payload: await createNewUnSolvedProblem(problem),
  });
});

router.put("/unsolvedproblems/:id", async function (req, res) {
  const update = req.body;
  const id = req.params.id;
  res.json({
    success: true,
    payload: await UpdateUnsolvedProblemByID(id, update),
  });
});

router.delete("/unsolvedproblems/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await DeleteUnsolvedProblemByID(id),
  });
});

//Solved Problems
router.get("/solvedproblems", async function (req, res) {
  res.json({
    success: true,
    payload: await getAllSolvedProblems(),
  });
});

router.get("/solvedproblems/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await getSolvedProblemsByID(id),
  });
});

router.post("/solvedproblems", async function (req, res) {
  const problem = req.body;
  res.json({
    success: true,
    payload: await createNewSolvedProblem(problem),
  });
});

router.put("/solvedproblems/:id", async function (req, res) {
  const update = req.body;
  const id = req.params.id;
  res.json({
    success: true,
    payload: await UpdateSolvedProblemByID(id, update),
  });
});

router.delete("/solvedproblems/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await DeleteSolvedProblemByID(id),
  });
});

export default router;
