const express = require("express");
const path = require("path");

const appRoute = express.Router();

console.log("HTML routes loaded");

appRoute.get("/survey", function (req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

appRoute.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = appRoute;