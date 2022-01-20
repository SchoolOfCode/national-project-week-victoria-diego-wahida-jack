import query from "../../connection.js"
import {users, unsolvedProblems, solvedProblems} from "../../dummyData.js"


async function populateUsersTable() {
    
    users.forEach(async user => {
       let response = await query(`INSERT INTO users (username, roomNumber) VALUES ($1, $2) RETURNING *`, [user.username, user.roomNumber]);
       
       console.log(`This is populateUsersTable() response: `, response);
    });
}

populateUsersTable();





async function populateUnsolvedProblemsTable() {
    
    unsolvedProblems.forEach(async problem => {

        const sqlValues = [problem.roomnumber, problem.title,problem.text, problem.dateandtime, problem.time, problem.beingsolved];
       let response = await query(`INSERT INTO unsolvedProblems (roomNumber,title,text, dateandtime, time, beingsolved) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, sqlValues);
       
       console.log(`This is populateUnSolvedProblemsTable() response: `, response);
    });
}

populateUnsolvedProblemsTable();






async function populateSolvedProblemsTable() {
    
    solvedProblems.forEach(async problem => {

        const sqlValues = [problem.roomNumber, problem.title,problem.text];
       let response = await query(`INSERT INTO solvedProblems (roomNumber,title,text) VALUES ($1, $2, $3) RETURNING *;`, sqlValues);
       
       console.log(`This is populateSolvedProblemsTable() response: `, response);
    });
}

populateSolvedProblemsTable();