import pg from "pg";

import dbConfig from "../config.js"

const pool = new pg.Pool(
    {
        user: dbConfig.user,
        host: dbConfig.host,
        database: dbConfig.database,
        password: dbConfig.password,
        port: dbConfig.port,
        ssl: { rejectUnauthorized : false }
    }
); //creating a Pool connection which we will use to connect to the remote Heroku database server

function query(query, params) {
/* we dont use the optional third callback parameter, which means this exported function will return a promise because we are not dealing with it here in a callback */
    return pool.query( query, params);
}

export default query;