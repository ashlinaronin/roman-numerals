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
});
