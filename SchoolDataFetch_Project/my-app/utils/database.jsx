import mysql from 'mysql2/promise'

const con=mysql.createPool({
        host: "localhost",
        port:"3306",
        user: "root",
        password: "password",
        database: "databasee",
})

export { con };

   