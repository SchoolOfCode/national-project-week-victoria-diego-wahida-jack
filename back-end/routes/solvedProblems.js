import express from "express";
const router = express.Router();
import {
  getAllSolvedProblems,
  getSolvedProblemsByID,
  createNewSolvedProblem,
  UpdateSolvedProblemByID,
  DeleteSolvedProblemByID,
} from "../models/users.js";

//Solved Problems
router.get("/", async function (req, res) {
  res.json({
    success: true,
    payload: await getAllSolvedProblems(),
  });
});

router.get("/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await getSolvedProblemsByID(id),
  });
});

router.post("/", async function (req, res) {
  const problem = req.body;
  res.json({
    success: true,
    payload: await createNewSolvedProblem(problem),
  });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  res.json({
    success: true,
    payload: await DeleteSolvedProblemByID(id),
  });
});

export default router;
