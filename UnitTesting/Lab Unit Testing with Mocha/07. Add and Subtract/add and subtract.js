let assert = require('chai').assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


describe("Create calculator tests", function () {
    describe("Add", function () {
        it("Should return 0 after initialization", function () {
            const calc = createCalculator();
            const result = calc.get();

            assert.equal(result, 0)
        });
        it("Should return 5 after add(5)", function () {
            const calc = createCalculator();
            calc.add(5);
            const result = calc.get();

            assert.equal(result, 5)
        });
        it("Should return -5 after add(-5)", function () {
            const calc = createCalculator();
            calc.add(-5);
            const result = calc.get();

            assert.equal(result, -5)
        });
        it("Should return 10 after add(5), add(5)", function () {
            const calc = createCalculator();
            calc.add(5);
            calc.add(5);
            const result = calc.get();

            assert.equal(result, 10)
        });
        it("Should return -10 after add(-5), add(-5)", function () {
            const calc = createCalculator();
            calc.add(-5);
            calc.add(-5);
            const result = calc.get();

            assert.equal(result, -10)
        });

        it("Should return 11 after add(5.5), add(5.5)", function () {
            const calc = createCalculator();
            calc.add(5.5);
            calc.add(5.5);
            const result = calc.get();

            assert.equal(result, 11)
        });
        it("Should return -11 after add(-5.5), add(-5.5)", function () {
            const calc = createCalculator();
            calc.add(-5.5);
            calc.add(-5.5);
            const result = calc.get();

            assert.equal(result, -11)
        });
        it("Should return -11 after add('5.5'), add('5.5')", function () {
            const calc = createCalculator();
            calc.add('5.5');
            calc.add('5.5');
            const result = calc.get();

            assert.equal(result, 11)
        });

        it("Should return NaN after add(5), string", function () {
            const calc = createCalculator();
            calc.add(5.5);
            calc.add('lubo');
            const result = calc.get();

            assert.isNaN(result, NaN)
        });



    });

    describe("subtract", function () {
        it("Should return 0 after initialization", function () {
            const calc = createCalculator();
            const result = calc.get();

            assert.equal(result, 0)
        });
        it("Should return 6 after add(11) and subtract(6)", function () {
            const calc = createCalculator();
            calc.add(11);
            calc.subtract(5);
            const result = calc.get();

            assert.equal(result, 6)
        });
        it("Should return -3 after add(3) and subtract(6)", function () {
            const calc = createCalculator();
            calc.add(3);
            calc.subtract(6);
            const result = calc.get();

            assert.equal(result, -3)
        });

        it("Should return 4.5 after add(5.5), add(1)", function () {
            const calc = createCalculator();
            calc.add(5.5);
            calc.subtract(1.5);
            const result = calc.get();

            assert.equal(result, 4)
        });

        it("Should return NaN after add(5.5), string)", function () {
            const calc = createCalculator();
            calc.add(5.5);
            calc.subtract('lubo');
            const result = calc.get();

            assert.isNaN(result, NaN)
        });
    });
});

