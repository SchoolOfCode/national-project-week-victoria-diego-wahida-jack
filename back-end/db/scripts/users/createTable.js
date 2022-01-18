import query from "../../connection.js"

console.log(query)

const sqlUsersString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, roomNumber INT);`;

async function createUsersTable(){
      const res = await query(sqlUsersString);
      console.log("Created users table", res);
}

createUsersTable()

const sqlUnsolvedProblemsString = `CREATE TABLE IF NOT EXISTS unsolvedProblems (id SERIAL PRIMARY KEY, roomNumber INT, title TEXT, text TEXT);`;

async function createUnsolvedProblemsTable(){
      const res = await query(sqlUnsolvedProblemsString);
      console.log("Created unsolvedProblems table", res);
}

createUnsolvedProblemsTable()

const sqlSolvedProblemsString = `CREATE TABLE IF NOT EXISTS solvedProblems (id SERIAL PRIMARY KEY, roomNumber INT, title TEXT, text TEXT);`;

async function createSolvedProblemsTable(){
      const res = await query(sqlSolvedProblemsString);
      console.log("Created solvedProblems table", res);
}

createSolvedProblemsTable()

