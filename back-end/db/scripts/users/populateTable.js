import query from '../index.js'
import {users} from "../../dummyData"


async function populateUsersTable() {
    
    users.forEach(async user => {
   
        const sqlTable = `INSERT INTO users (id, username, roomNumber) VALUES ($1, $2, $3) RETURNING *;`;
        const sqlValues = [user.id, user.username, user.roomNumber];
       let response = await query(sqlTable, sqlValues);
       
       console.log(`This is populateUsersTable() response: `, response);
    });
}

populateUsersTable();





async function populateUnsolvedProblemsTable() {
    
    unsolvedProblems.forEach(async problem => {
   
        const sqlTable = `INSERT INTO unsolvedProblemsTable (id,roomNumber,title,text) VALUES ($1, $2, $3, $4) RETURNING *;`;
        const sqlValues = [problem.id, problem.roomNumber, problem.title,problem.text];
       let response = await query(sqlTable, sqlValues);
       
       console.log(`This is populateUnSolvedProblemsTable() response: `, response);
    });
}

populateUnsolvedProblemsTable();






async function populateSolvedProblemsTable() {
    
    solvedProblems.forEach(async problem => {
   
        const sqlTable = `INSERT INTO solvedProblemsTable (id, roomNumber,title,text) VALUES ($1, $2, $3, $4) RETURNING *;`;
        const sqlValues = [problem.id, problem.roomNumber, problem.title,problem.text];
       let response = await query(sqlTable, sqlValues);
       
       console.log(`This is populateSolvedProblemsTable() response: `, response);
    });
}

populateSolvedProblemsTable();