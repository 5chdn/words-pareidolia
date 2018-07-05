$(function() {
    var words_1;
    var words_2;

    $.getJSON("./json/words1.json", function(data) {
        words_1 = data;
    }

    $.getJSON("./json/words2.json", function(data) {
        words_2 = data;
    });

    generateWords();

    function randomWordFirst() {
        return words_1[Math.floor(Math.random() * words_1.length)];
    }

    function randomWordSecond() {
        return words_2[Math.floor(Math.random() * words_2.length)];
    }

    function generateWords() {
        var word1 = randomWordFirst();
        var word2 = randomWordSecond();

        var germanWord2 = word2.de.toLowerCase();
        germanWord2 = "<u>" + germanWord2[0] + "</u>" + germanWord2.slice(1);

        $("#german-word-article").html(word2.article);
        $("#german-word-1").html(word1.de);
        $("#english-word-1").html(word1.en);
        $("#german-word-2").html(germanWord2);
        $("#english-word-2").html(word2.en);
    }

    function getGermanWord() {
        return $("#german-word-1").text() + $("#german-word-2").text();
    }

    $("#words").click(function() {
        generateWords();
        clip.setValue(getGermanWord());
    });
});
