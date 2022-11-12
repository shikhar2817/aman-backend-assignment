const express = require("express");
const app = express();
const port = 3000;

let candidates = [];

app.get("/", (req, res) => {});

app.post("/candidates", (req, res) => {
    const { id, name, skills } = req.body;
    if (
        id === null ||
        id === undefined ||
        name === null ||
        name === undefined ||
        skills === null ||
        skills === undefined
    ) {
        return res.status(204).json("No Content");
    }
    candidates.push({ id, name, skills });
    return res.status(200).json("OK");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
