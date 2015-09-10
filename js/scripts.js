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


    return numerals[number];

    // if (number === 1){
    //     return 'I';
    // }

}
