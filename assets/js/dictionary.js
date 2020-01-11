// -- searchBtn onclick event --
$("#searchBtn").on("click", function (event) {
    clear();
    wordSearch();


});

// -- search on keypress of "enter" event --
$("#word-search").on("keypress", function (e) {
    if (e.which === 13) {
        clear();
        wordSearch();

    };

});

var wordListEl = $("#word-list");
var words = [];



init();

function wordSearch() {

    var APIKey = "df02e1fe-49cf-4a55-98fc-de7865e40463";
    var searchParam = $("#word-search").val().trim();
    if (searchParam === "") {
        return;
    };

    // -- URL to query database -- 
    var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + searchParam + "?key=" + APIKey;

    // -- ajax call for dictionary -- 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        var responseWord = response[0].hwi.hw;

        // -- building current weather card start --
        for (i = 0; i < response[0].shortdef.length; i++) {
            var wordDef = response[0].shortdef[i];
            console.log(wordDef);


            var word = $("<h1 class= 'title'> " + responseWord + " : " + "</h1>");
            var def = $("<h2 class='subtitle'> " + wordDef + "</h2>")
            $("#definition").append(def)
        };
        console.log(responseWord)
        $("#definition").addClass("box")
        $("#definition").prepend(word)
        words.push(responseWord)
        localStorage.setItem("words", JSON.stringify(words));
        $("#word-search").val("");
        init();
    });
    // -- ajax call for dictionary end --
};

$("#word-list").on("click", "button", function (event) {
    event.preventDefault();
    clear();

    var btnVal = $(this).text();
    var APIKey = "df02e1fe-49cf-4a55-98fc-de7865e40463";

    // -- URL to query database -- 
    var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + btnVal + "?key=" + APIKey;

    // -- ajax call for dictionary -- 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response)
        var responseWord = response[0].hwi.hw;

        // -- building current weather card start --
        for (i = 0; i < response[0].shortdef.length; i++) {
            var wordDef = response[0].shortdef[i];
            console.log(wordDef);


            var word = $("<h1 class= 'title'> " + responseWord + " : " + "</h1>");
            var def = $("<h2 class='subtitle'> " + wordDef + "</h2>")
            $("#definition").append(def)
        };
        $("#definition").prepend(word)
    });
});

function renderWords() {
    if (words.length > 5) {
        words.shift();
    }
    for (var i = 0; i < words.length; i++) {

        var wordLS = words[i];
        var li = $("<li>")
        var button = $("<button>");
        button.text(wordLS);
        button.attr("data-index", i);
        button.addClass("button is-link is-fullwidth is-outlined box")
        li.append(button);
        $("#word-list").prepend(li);
        $("#word-list").prepend("<br>");
    }
};

// -- function to retrieve city names from localStorage --
function init() {
    $("#word-list").empty();
    var storedWords = JSON.parse(localStorage.getItem("words"));
    if (storedWords !== null) {
        words = storedWords;
    };
    renderWords();
};

function clear() {
    $("#definition").empty();
};



