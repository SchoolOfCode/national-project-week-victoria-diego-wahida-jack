import query from "../db/connection.js"

/* 
C - CREATE A NEW DATA
R - READ EVERYTHING
U - UPDATE
D - DELETE
*/

//USERS TABLE
export async function getAllUsers() {
    const data = await query('SELECT * FROM users;')
    return data.rows;
}

export async function getUserByID(id) {
    const data = await query('SELECT * FROM users WHERE id = $1;', [id])
    return data.rows;
}

export async function createNewUser(person) {
    const {username,roomNumber} = person;
    const data = await query('INSERT INTO users (username,roomNumber) VALUES ($1,$2) RETURNING*;', [username,roomNumber])
    return data.rows;
}

export async function UpdateUserByID(id, update) {
    const {username, roomNumber} = update
    const data = await query('UPDATE users SET username = $2, roomNumber = $3  WHERE id= $1 RETURNING*;', [id,username, roomNumber])
    return data.rows
}


export async function DeleteUserByID(id) {
    const data = await query('DELETE FROM users WHERE id= $1 RETURNING*;', [id]);
    return data.rows;
}


//UNSOLVED PROBLEMS TABLE
export async function getAllUnsolvedProblems() {
    const data = await query('SELECT * FROM unsolvedProblems;')
    return data.rows;
}

export async function getUnsolvedProblemsByID(id) {
    const data = await query('SELECT * FROM unsolvedProblems WHERE id = $1;', [id])
    return data.rows;
}

export async function createNewUnSolvedProblem(problem) {
    const {roomNumber, title, text, dateandtime, time, beingsolved} = problem;
    const data = await query('INSERT INTO unsolvedProblems (roomNumber, title, text, dateandtime, time, beingsolved) VALUES ($1,$2, $3, $4, $5, $6) RETURNING*;', [roomNumber, title, text, dateandtime, time, beingsolved])
    return data.rows;
}

export async function UpdateUnsolvedProblemByID(id, update) {
    const {roomNumber, title, text, dateandtime, time, beingsolved} = update
    const data = await query('UPDATE unsolvedProblems SET roomNumber = $2, title = $3, text = $4, dateandtime = $5,  time = $6, beingsolved = $7 WHERE id= $1 RETURNING*;', [id, roomNumber, title,text, dateandtime, time, beingsolved])
    return data.rows
}


export async function DeleteUnsolvedProblemByID(id) {
    const data = await query('DELETE FROM unsolvedProblems WHERE id= $1 RETURNING*;', [id]);
    return data.rows;
}


//SOLVED PROBLEMS TABLE
export async function getAllSolvedProblems() {
    const data = await query('SELECT * FROM solvedProblems;')
    return data.rows;
}

export async function getSolvedProblemsByID(id) {
    const data = await query('SELECT * FROM solvedProblems WHERE id = $1;', [id])
    return data.rows;
}

export async function createNewSolvedProblem(problem) {
    const {roomNumber, title, text} = problem;
    const data = await query('INSERT INTO solvedProblems (roomNumber, title, text) VALUES ($1,$2, $3) RETURNING*;', [roomNumber, title, text])
    return data.rows;
}

export async function UpdateSolvedProblemByID(id, update) {
    const {roomNumber, title, text} = update
    const data = await query('UPDATE solvedProblems SET roomNumber = $2, title = $3, text = $4 WHERE id= $1 RETURNING*;', [id, roomNumber, title,text])
    return data.rows
}


export async function DeleteSolvedProblemByID(id) {
    const data = await query('DELETE FROM solvedProblems WHERE id= $1 RETURNING*;', [id]);
    return data.rows;
}
