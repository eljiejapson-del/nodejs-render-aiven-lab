const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: "mysql-13fe6d3b-eljiejapson-cf5e.e.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_zuELSdgARy8NwusZX6A",
    database: "peteros_db",
    port: "16573"
});

app.get("/", (req, res)=> {
    db.query("SELECT NOW()", (err, result)=>{
        if(err) throw err;
        res.send("Database Connected Successfully: "+ result[0]["NOW()"]);

    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port" + PORT);
});