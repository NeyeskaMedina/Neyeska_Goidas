import pool from "../../../../config/db/dbConection.js";

const verifyUsersDB = async (email, name) => {
    
    const SQLquery = {
        text: `SELECT * FROM users WHERE LOWER(email) = LOWER($1) AND LOWER(name) = LOWER($2) AND "like" = TRUE`,
        values: [email, name]
    };
    const response = await pool.query(SQLquery);        
    
    return response.rows;
}

const insertLikeUsersDB = async(name, email, check) => {
    const SQLquery = {
        text: `INSERT INTO users (name, email, marketing, "like")
            VALUES ( $1, $2, $3, TRUE ) RETURNING *`,
        values: [name, email, check]
    };
    const response = await pool.query(SQLquery);
    
    return response.rows;
}

const getLikeDB = async () =>{
    const SQLquery = {
            text: `SELECT COUNT(*) FROM users`
        };
        
          const response = await pool.query(SQLquery);
          return response.rows;
}


export {
    verifyUsersDB,
    insertLikeUsersDB,
    getLikeDB
}