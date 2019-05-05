const path = require("path");

module.exports = function(app) {

    console.log("HTML Routes");
    
    app.get("/survey", function (req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
    



/*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/wishes", function(req, res) {
    connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) {
            throw err;
    }

    // Test it
    // console.log('The solution is: ', data);

    res.json(data);
    });
});

// Post route -> back to home
app.post("/api/wishes", function(req, res) {
    // Test it
    // console.log('You sent, ' + req.body.wish);

    // Test it
    // res.send('You sent, ' + req.body.wish)

    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
        if (err) {
            throw err;
        }

        res.status(201).end();
    });
});
*/