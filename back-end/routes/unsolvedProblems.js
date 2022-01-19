import express from "express";
const router = express.Router();
import {getAllUnsolvedProblems, getUnsolvedProblemsByID, createNewUnSolvedProblem, UpdateUnsolvedProblemByID, DeleteUnsolvedProblemByID} from "../models/users.js"

//Unsolved Problems

router.get("/", async function (req,res) {
    res.json({
        "success": true,
        "payload": await getAllUnsolvedProblems()
    })
  })
  
  
  router.get("/:id", async function (req,res){
    const id = req.params.id;
    res.json({
        "success": true,
        "payload": await getUnsolvedProblemsByID(id)    
    });
  })
  
  router.post("/", async function (req,res){
    const problem = req.body
    res.json({
        "success": true,
        "payload": await createNewUnSolvedProblem(problem)
    })
  })
  
  router.put("/:id", async function (req,res){
    const update = req.body
    const id = req.params.id
    res.json({
        "success": true,
        "payload": await UpdateUnsolvedProblemByID(id,update)
    })
  })
  
  router.delete("/:id", async function (req, res){
    const id = req.params.id;
    res.json({
        "success": true,
        "payload": await DeleteUnsolvedProblemByID(id) 
    })
  })
  
  export default router;