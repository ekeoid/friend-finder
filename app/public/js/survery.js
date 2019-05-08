$(document).ready(function() {
    printQuestions();
    setupEventHandlers();
});

let questions = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."
];

function printQuestions() {
    
    for (let i=0; i < questions.length; i++) {
        let h5Label = $("<h5>").text("Question " + (i+1));
        let pQuestion = $("<p>").text(questions[i]);

        h5Label.attr("class", "pt-3");
        h5Label.css("font-weight", "600");
        h5Label.css("color", "#666");
        
        pQuestion.attr("class", "pl-3 pb-2");
        pQuestion.css("font-weight", "500");
        
        $("#question-area").append(h5Label, pQuestion, printAnswers(i+1), "<hr class=\"pb-1\">");
    }
}

function printAnswers(group) {

    let divToolbar = $("<div>");
    let divGroup = $("<div>");
    
    divToolbar.attr("class", "btn-toolbar mb-3");
    divToolbar.attr("role", "toolbar");
    divToolbar.attr("area-label", "Toolbar with button groups");

    divGroup.attr("class", "btn-group mr-2");
    // divGroup.attr("data-toggle", "button");
    divGroup.attr("role", "group");
    divGroup.attr("group", group);

    for (let i=1; i <= 5; i++) {
        let buttonScore = $("<button>");
        let color = ["#E90D00", "#CE6000", "#B39A00", "#00B44E", "#208E2C"];
        buttonScore.attr("class", "btn btn-secondary btn-score px-4 py-0");
        buttonScore.attr("type", "button");
        buttonScore.attr("color", color[i-1]);
        buttonScore.css("background-color", color[i-1]);
        buttonScore.text(i);
        buttonScore.appendTo(divGroup);
    }

    let spanLabel1 = $("<span>").text("Strongly Disagree");
    let spanLabel2 = $("<span>").text("Strongly Agree");

    spanLabel1.attr("class", "my-auto pl-5 pr-4");
    spanLabel1.css("color", "#555");
    spanLabel2.attr("class", "my-auto pl-4");
    spanLabel2.css("color", "#555");

    divGroup.prepend(spanLabel1);
    divGroup.append(spanLabel2);

    divToolbar.append(divGroup);
    
    return divToolbar;

} // end printAnswers()

function setupEventHandlers() {

    function validateForm() {
        let isValid = true;

        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        if ( $(".active").length < 1 ) {
            isValid = true;
        }

        return isValid;
    }

    $(document).on("click", ".btn-score", function(event) {
        //event.preventDefault();
        let currentGroup = $(this).parent().attr("group");

        // Reset Colors
        for (let i=1; i <= 5; i++) {
            let button = $(".btn-group[group=" + currentGroup + "] > button:contains(" + i + ")");
            button.css("background-color", button.attr("color"));
            button.removeClass("active");
        }
        
        $(this).addClass("active");
        $(this).css("background-color", "rgb(50, 50, 50)");
    });
    
    $(document).on("submit", "#new-user", function(event) {
        event.preventDefault();

        if (validateForm()) {
            let scores = $(".active").map(function() {
                return $(this).text();
            }).get();
    
            let userData = {
                name: $("#form-name").val().trim(),
                photo: $("#form-photo").val().trim(),
                scores: scores
            };

            $.ajax("/api/friends", {
                type: "POST",
                data: userData
            }).then( function(response) {
                console.log("Added user data");
                console.log(response);

                $("#match-name").text(response.name);
                $("#match-name").css("font-weight", "500");

                $("#match-photo").attr("src", response.photo);
                $("#match-photo").css("width", "200px");
                //$("#match-photo").css("height", "200px");

                $("#exampleModal").modal("show");
    
            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
        
    });

} // end setupEventHandlers()
