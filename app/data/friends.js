function getScores() {
    var string = "";
    
    for (var i=1; i <= 10; i++) {
        string += "\t\t\t";
        string += "\"";
        string += Math.floor(Math.random() * 5) + 1;
        string += "\",\n";
    }
    return string.slice(0, -2);
}

var Friends = [
    {
        "name": "Andrea Asselin",
        "photo": "https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif",
        "scores": [
            "2",
            "5",
            "4",
            "3",
            "4",
            "1",
            "3",
            "2",
            "2",
            "1"
        ]
    }, {
        "name": "Alberto Vargas",
        "photo": "https://media.giphy.com/media/Lp5wuqMOmLUaAd0jBG/giphy.gif",
        "scores": [
			"1",
			"2",
			"2",
			"1",
			"5",
			"4",
			"2",
			"5",
			"3",
			"3"
        ]
    }, {
        "name": "Alyssa Capps",
        "photo": "https://media.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif",
        "scores": [
			"3",
			"3",
			"3",
			"1",
			"1",
			"4",
			"5",
			"4",
			"3",
			"2"
            ]
    }, {
        "name": "Caglar Panus",
        "photo": "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
        "scores": [
			"2",
			"1",
			"3",
			"5",
			"3",
			"5",
			"5",
			"2",
			"5",
			"5"
        ]
    }, {
        "name": "Hilary Mallar",
        "photo": "https://media.giphy.com/media/C23cMUqoZdqMg/giphy.gif",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    }, {
        "name": "Kevin Collins",
        "photo": "https://media.giphy.com/media/xBAreNGk5DapO/giphy.gif",
        "scores": [
			"2",
			"3",
			"1",
			"5",
			"1",
			"4",
			"4",
			"4",
			"4",
			"2"
        ]
    }, {
        "name": "Melissa Burnham",
        "photo": "https://media.giphy.com/media/rWiEbamfqOHrq/giphy.gif",
        "scores": [
			"1",
			"5",
			"2",
			"5",
			"4",
			"5",
			"5",
			"1",
			"5",
			"3"
        ]
    }, {
        "name": "Michael Dinh",
        "photo": "https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif",
        "scores": [
			"2",
			"2",
			"4",
			"2",
			"2",
			"1",
			"4",
			"2",
			"1",
			"1"
        ]
    }, {
    "name": "Deanna Parkton",
    "photo": "https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif",
    "scores": [
            "1",
            "2",
            "2",
            "5",
            "4",
            "5",
            "2",
            "2",
            "3",
            "3"
        ]
    }, {
        "name": "Lisa Shemancik",
        "photo": "https://media.giphy.com/media/Lq0h93752f6J9tijrh/giphy.gif",
        "scores": [
			"5",
			"1",
			"1",
			"4",
			"2",
			"5",
			"3",
			"3",
			"3",
			"1"
        ]
    }, {
        "name": "Kalimah Perry",
        "photo": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
        "scores": [
			"4",
			"2",
			"1",
			"4",
			"4",
			"3",
			"3",
			"1",
			"5",
			"5"
        ]
    }
    ];

module.exports = Friends;