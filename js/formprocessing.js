$(document).ready(function() {
    $('form#roman-number').submit(function(event) {
        var inputtedNumber = parseInt($('input#number').val());
        var resultString = numeralGenerator(inputtedNumber);

        // Clear results before adding new ones
        $('#result').empty();

        // Add the result string into the result div
        $('#result').text(resultString);

        // Show the hidden #result div
        $('#result').show();

        // Avoid automatic browser form submit refresh confusion
        event.preventDefault();
    });
});
