var numeralGenerator = function(number){
    var numerals = {
        1:    'I',
        5:    'V',
        10:   'X',
        50:   'L',
        100:  'C',
        500:  'D',
        1000: 'M'
    };

    var result = "";

    // Handle numbers under eight inclusive for now

    // Number of Xs is integer division by 10
    var numberXs = Math.trunc(number / 10);
    var xRemainder = (number % 10);

    // Number of Vs is integer division by 5
    var numberVs = Math.trunc(xRemainder / 5);

    // Number of Is is remainder on division by 5
    var numberIs = (number % 5);


    // Add Xs to result string
    for (var i = 0; i < numberXs; i++) {
        result += "X";
    }

    // Add Vs to result string
    for (var i = 0; i < numberVs; i++) {
        result += "V";
    }

    // Add Is to result string
    for (var i = 0; i < numberIs; i++) {
        result += "I";
    }

    return result;

    // if (number === 1){
    //     return 'I';
    // }

}
