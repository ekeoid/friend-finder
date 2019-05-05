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
