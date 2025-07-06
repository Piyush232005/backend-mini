const express = require("express");

const app = express();
// express direct not convert express we use middleware
app.use(express.json()); // for parsing application/json

// notes => title & description
let notes = [];


//  to add the notes 
app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({
        message: "Note added successfully",
        note: notes
    });
});

// To Show the notes

app.get("/notes", (req, res) => {
    res.json(notes);
});

// To delete the notes
app.delete("/notes/:index", (req, res) =>{
    const index = req.params.index;
    delete notes[index];
    res.json({
        message: "Note deleted successfully"
    })
})

// To update the notes PATCH  /notes/:index =>{title, description}

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const {title} = req.body;
    notes[index].title = title;
    res.json({
        message: "Note updated successfully",
        note: notes[index]
    });
})




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});