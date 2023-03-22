"use strict"
import db from "../config/db.js";



export const listUsers = () => {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT * FROM users`;
        db.query(sql, (err, result) => {
            if (err) reject(err);

            resolve(result);
        });
    });
};

export const byIdUsers = (params) => {
    return new Promise(function (resolve, reject) {
        var sql = `SELECT * FROM users WHERE id=${param.id}`;
        db.query(sql, (err, result) => {
            if (err) reject(err);

            resolve(result);
        });
    });
};

export const insertUsers = (params) => {

    return new Promise(function (resolve, reject) {
        var sql = `INSERT INTO users (name,email,created_at) VALUES ('${params.name}','${params.email}',now())`;
        db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

export const updateUsers = (params) => {

    return new Promise(function (resolve, reject) {
        var sql = `UPDATE users SET 
                    name = '${params.name}'
                    email = '${params.email}' WHERE id = ${params.id}`;
        db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

export const deleteUsers = (params) => {
    return new Promise(function (resolve, reject) {
        var sql = `DELETE FROM users WHERE id = ${params.id}`;
        db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
