const express = require("express");
const friends = require("../data/friends.js");

const appRoute = express.Router();

console.log("API routes loaded");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
appRoute.get("/api/friends", function (req,res) {
    //res.sendFile(path.join(__dirname, "../data/friends.js"));
    res.json(friends);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
appRoute.post("/api/friends", function (req,res) {
    let userData = req.body;

    let friendDifferences = friends.map( (object) => {
        let arrayDifference = object.scores.map ( (num, index) => Math.abs(num -= userData.scores[index]) );
        // totalDifference
        return arrayDifference.reduce( (acc, current) => acc + current );
    });

    let matchIndex = friendDifferences.indexOf( friendDifferences.reduce( (min, current) => current < min ? current : min ) );
    
    console.log(friendDifferences, matchIndex);
    res.json(friends[matchIndex]);
});

module.exports = appRoute;
