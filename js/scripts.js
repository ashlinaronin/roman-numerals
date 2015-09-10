var numeralGenerator = function(number){

    // Include the subtraction cases for 4, 40, 9, 90, etc.
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var outputString = "";

    // Loop through every number that corresponds to a numeral
    for (var i = 0; i < numerals.length; i++) {

        /* Divide the user-inputted number by the current numeral and truncate the result
        ** to find out how many of the current numeral we need in the final result. */
        var numberOfThisLetter = Math.trunc(number / numbers[i]);

        /* Add the determined amount of letters to the end of the output string
        ** and subtract the number associated with the current numeral from the user number
        ** so that the next numeral in the next iteration of this loop
        ** can deal with the appropriate smaller number value. */
        for (var letterToAdd = 0; letterToAdd < numberOfThisLetter; letterToAdd++) {
            outputString += numerals[i];
            number -= numbers[i];
        }
    }

    return outputString;
}
