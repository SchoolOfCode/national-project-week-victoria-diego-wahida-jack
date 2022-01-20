import query from "../../connection.js";
console.log(query);

const sqlUsersString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, roomnumber INT);`;

async function createUsersTable() {
  const res = await query(sqlUsersString);
  console.log("Created users table", res);
}

createUsersTable();

const sqlUnsolvedProblemsString = `CREATE TABLE IF NOT EXISTS unsolvedProblems (id SERIAL PRIMARY KEY, roomnumber INT, title TEXT, text TEXT);`;

async function createUnsolvedProblemsTable() {
  const res = await query(sqlUnsolvedProblemsString);
  console.log("Created unsolvedProblems table", res);
}

createUnsolvedProblemsTable();

const sqlAddColumnsString = `ALTER TABLE unsolvedProblems ADD COLUMN dateandtime TEXT`;

async function addColumns() {
  const res = await query(sqlAddColumnsString);
  console.log("Created new columns", res);
}

const sqlAddColumnsString2 = `ALTER TABLE unsolvedProblems ADD COLUMN time TEXT`;

async function addColumns2() {
  const res = await query(sqlAddColumnsString2);
  console.log("Created new columns", res);
}

addColumns2();

const sqlAddColumnsString3 = `ALTER TABLE unsolvedProblems ADD COLUMN beingsolved BOOLEAN`;

async function addColumns3() {
  const res = await query(sqlAddColumnsString3);
  console.log("Created new columns", res);
}

addColumns3();

const sqlSolvedProblemsString = `CREATE TABLE IF NOT EXISTS solvedProblems (id SERIAL PRIMARY KEY, roomnumber INT, title TEXT, text TEXT);`;

async function createSolvedProblemsTable() {
  const res = await query(sqlSolvedProblemsString);
  console.log("Created solvedProblems table", res);
}

createSolvedProblemsTable();
