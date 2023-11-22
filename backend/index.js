import express from "express"
import mysql from "mysql"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
});

app.get("/", (req, res) => {
    res.json("hello this is the backend test")
    if (err)
        console.log(err);
    else
        return res.json(data);

});

app.use(express.json());

app.get("/names", (req, res) => {
    const q = "SELECT * FROM names"
    db.query(q, (err, data) => {
        if (err)
            console.log(err)
        else
            return res.json(data)
    });
});

app.post("/names", (req, res) => {
    const q = "INSERT INTO names (id, name) VALUES (?)";
    const values = [req.body.id,
    req.body.name];

    db.query(q, [values], (err, data) => {
        if (err)
            return res.json(err);
        else
            return res.json(data);
    })

});

app.listen(8800, () => {
    console.log("Connected to backend")
});



