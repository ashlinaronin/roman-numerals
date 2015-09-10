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

    // Number of Ms is integer division by 1000
    var numberMs = Math.trunc(number / 1000);
    var mRemainder = (number % 1000);

    // Number of Ds is integer division by 500
    var numberDs = Math.trunc(mRemainder / 500);
    var dRemainder = (mRemainder % 500);

    // Number of Cs is integer division by 100
    var numberCs = Math.trunc(dRemainder / 100);
    var cRemainder = (dRemainder % 100);

    // Number of Ls is integer division by 50
    var numberLs = Math.trunc(cRemainder / 50);
    var lRemainder = (cRemainder % 50);

    // Number of Xs is integer division by 10
    var numberXs = Math.trunc(lRemainder / 10);
    var xRemainder = (lRemainder % 10);

    // Number of Vs is integer division by 5
    var numberVs = Math.trunc(xRemainder / 5);

    // Number of Is is remainder on division by 5
    var numberIs = (xRemainder % 5);


    // Add Ls to result string
    for (var i = 0; i < numberLs; i++) {
        result += "L";
    }

    // Add Cs to result string
    for (var i = 0; i < numberCs; i++) {
        result += "C";
    }

    // Add Ds to result string
    for (var i = 0; i < numberDs; i++) {
        result += "D";
    }

    // Add Ms to result string
    for (var i = 0; i < numberMs; i++) {
        result += "M";
    }

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
