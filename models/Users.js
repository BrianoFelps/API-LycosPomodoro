import { db } from "../database/db.js";

export const getUsers = () =>{
    return new Promise((resolve, reject) => {
        const sql = 'select * from usuario';
        db.query(sql, (error, results) =>{
            if(error){
                reject(error)
                return;
            }
            resolve(results);
        })
    })
};