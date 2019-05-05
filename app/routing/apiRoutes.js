const path = require("path");
var friends = require('../data/friends.js');

module.exports = function(app) {

    console.log("API Routes");
    
    app.get("/test", function (req,res) {
        res.sendFile(path.join(__dirname, "../../README.md"));
    });


};
