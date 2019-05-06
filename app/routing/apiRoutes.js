const path = require("path");
var friends = require('../data/friends.js');

module.exports = function(app) {

    console.log("API Routes");
    
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req,res) {
        //res.sendFile(path.join(__dirname, "../data/friends.js"));
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req,res) {
        let userData = req.body;

        let friendDifferences = friends.map( (object) => {
            let arrayDifference = object.scores.map ( (num, index) => Math.abs(num -= userData.scores[index]) );
            // totalDifference
            return arrayDifference.reduce( (acc, current) => acc + current );
        });

        let matchIndex = friendDifferences.indexOf( friendDifferences.reduce( (min, current) => current < min ? current : min ) );
        
        console.log(friendDifferences, matchIndex);
        res.json(friends[matchIndex]);
    })
};
