import query from "../db/connection.js";

/* 
C - CREATE A NEW DATA
R - READ EVERYTHING
U - UPDATE
D - DELETE
*/

//USERS TABLE
export async function getAllUsers() {
  const data = await query("SELECT * FROM users;");
  return data.rows;
}

export async function getUserByID(id) {
  const data = await query("SELECT * FROM users WHERE id = $1;", [id]);
  return data.rows;
}

export async function createNewUser(person) {
  const { username, roomnumber } = person;
  const data = await query(
    "INSERT INTO users (username,roomnumber) VALUES ($1,$2) RETURNING*;",
    [username, roomnumber]
  );
  return data.rows;
}

export async function UpdateUserByID(id, update) {
  const { username, roomnumber } = update;
  const data = await query(
    "UPDATE users SET username = $2, roomnumber = $3  WHERE id= $1 RETURNING*;",
    [id, username, roomnumber]
  );
  return data.rows;
}

export async function DeleteUserByID(id) {
  const data = await query("DELETE FROM users WHERE id= $1 RETURNING*;", [id]);
  return data.rows;
}

//UNSOLVED PROBLEMS TABLE
export async function getAllUnsolvedProblems() {
  const data = await query("SELECT * FROM unsolvedProblems;");
  return data.rows;
}

export async function getUnsolvedProblemsByID(id) {
  const data = await query("SELECT * FROM unsolvedProblems WHERE id = $1;", [
    id,
  ]);
  return data.rows;
}

export async function createNewUnSolvedProblem(problem) {
  const { roomnumber, title, text, dateandtime, time, beingsolved } = problem;
  const data = await query(
    "INSERT INTO unsolvedProblems (roomnumber, title, text, dateandtime, time, beingsolved) VALUES ($1,$2, $3, $4, $5, $6) RETURNING*;",
    [roomnumber, title, text, dateandtime, time, beingsolved]
  );
  return data.rows;
}

export async function UpdateUnsolvedProblemByID(id, update) {
  const { roomnumber, title, text, dateandtime, time, beingsolved } = update;
  const data = await query(
    "UPDATE unsolvedProblems SET roomnumber = $2, title = $3, text = $4, dateandtime = $5,  time = $6, beingsolved = $7 WHERE id= $1 RETURNING*;",
    [id, roomnumber, title, text, dateandtime, time, beingsolved]
  );
  return data.rows;
}

export async function DeleteUnsolvedProblemByID(id) {
  const data = await query(
    "DELETE FROM unsolvedProblems WHERE id= $1 RETURNING*;",
    [id]
  );
  return data.rows;
}

//SOLVED PROBLEMS TABLE
export async function getAllSolvedProblems() {
  const data = await query("SELECT * FROM solvedProblems;");
  return data.rows;
}

export async function getSolvedProblemsByID(id) {
  const data = await query("SELECT * FROM solvedProblems WHERE id = $1;", [id]);
  return data.rows;
}

export async function createNewSolvedProblem(problem) {
  const { roomnumber, title, text } = problem;
  const data = await query(
    "INSERT INTO solvedProblems (roomnumber, title, text) VALUES ($1,$2, $3) RETURNING*;",
    [roomnumber, title, text]
  );
  return data.rows;
}

export async function UpdateSolvedProblemByID(id, update) {
  const { roomnumber, title, text } = update;
  const data = await query(
    "UPDATE solvedProblems SET roomnumber = $2, title = $3, text = $4 WHERE id= $1 RETURNING*;",
    [id, roomnumber, title, text]
  );
  return data.rows;
}

export async function DeleteSolvedProblemByID(id) {
  const data = await query(
    "DELETE FROM solvedProblems WHERE id= $1 RETURNING*;",
    [id]
  );
  return data.rows;
}
