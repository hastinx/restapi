import db from "../config/db.js";



export const list = () => {
    return new Promise(function (resolve, reject) {
        var sql = `select * from users`;
        db.query(sql, (err, result) => {
            if (err) reject(err);

            resolve(result);
        });
    });
};
