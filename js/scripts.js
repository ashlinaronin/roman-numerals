var numeralGenerator = function(number){
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var outputString = "";

    for (var i = 0; i < numerals.length; i++) {
        var numberOfThisLetter = Math.trunc(number / numbers[i]);

        // Add the determined amount of letters to the end of the output string
        for (var letterToAdd = 0; letterToAdd < numberOfThisLetter; letterToAdd++) {
            outputString += numerals[i];
            number -= numbers[i];
        }
    }

    return outputString;
}
