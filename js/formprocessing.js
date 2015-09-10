$(document).ready(function() {
    $('form#count-up-by').submit(function(event) {
        var multiple = parseInt($('input#multiple').val());
        var goal = parseInt($('input#goal').val());

        var resultArray = countUpBy(multiple, goal);

        // Clear results before adding new ones
        $('#result').empty();

        // Print each result as a list item
        resultArray.forEach(function(result) {
            $('#result').append('<li>' + result + '</li>');
        });

        // Show the hidden #result div
        $('#result').show();

        event.preventDefault();
    });
});
