const express = require("express");

const app = express();
// express direct not convert express we use middleware
app.use(express.json()); // for parsing application/json

// notes => title & description
let notes = [];



app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Note added successfully",
        note: notes
    });
    
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});