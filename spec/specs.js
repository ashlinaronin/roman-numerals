describe('numeralGenerator', function() {
    it("returns I for an input of 1", function() {
        expect(numeralGenerator(1)).to.equal("I");
    });

    it ("returns V for an input of 5", function(){
        expect(numeralGenerator(5)).to.equal("V");
    });

    it ("returns X for an input of 10", function(){
        expect(numeralGenerator(10)).to.equal("X");
    });

    it ("returns L for an input of 50", function(){
        expect(numeralGenerator(50)).to.equal("L");
    });

    it ("returns C for an input of 100", function(){
        expect(numeralGenerator(100)).to.equal("C");
    });

    it ("returns D for an input of 500", function(){
        expect(numeralGenerator(500)).to.equal("D");
    });

    it ("returns M for an input of 1000", function(){
        expect(numeralGenerator(1000)).to.equal("M");
    });

    it ("returns II for an input of 2", function(){
        expect(numeralGenerator(2)).to.equal("II");
    });

    it ("returns III for an input of 3", function(){
        expect(numeralGenerator(3)).to.equal("III");
    });

    it ("returns IV for an input of 4", function(){
        expect(numeralGenerator(4)).to.equal("IV");
    });

    it ("returns VI for an input of 6", function(){
        expect(numeralGenerator(6)).to.equal("VI");
    });

    it ("returns IX for an input of 9", function(){
        expect(numeralGenerator(9)).to.equal("IX");
    });

    it ("returns XIV for an input of 14", function(){
        expect(numeralGenerator(14)).to.equal("XIV");
    });

    it ("returns LXVI for an input of 66", function(){
        expect(numeralGenerator(66)).to.equal("LXVI");
    });

    it ("returns XC for an input of 90", function(){
        expect(numeralGenerator(90)).to.equal("XC");
    });

    it ("returns XCIX for an input of 99", function(){
        expect(numeralGenerator(99)).to.equal("XCIX");
    });
});
