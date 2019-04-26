let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe("match", function () {
    describe("Add", function () {
        it('Should return for undefined string', function () {
            let input = mathEnforcer;
            let result = input.addFive('lubo');

            assert.equal(result, undefined)
        });
        it('Should return for undefined []', function () {
            let input = mathEnforcer;
            let result = input.addFive([]);

            assert.equal(result, undefined)
        });
        it('Should return for undefined {}', function () {
            let input = mathEnforcer;
            let result = input.addFive({});

            assert.equal(result, undefined)
        });
        it('Should return for undefined newDate', function () {
            let input = mathEnforcer;
            let result = input.addFive(new Date());

            assert.equal(result, undefined)
        });
        it('Should return for undefined undefined', function () {
            let input = mathEnforcer;
            let result = input.addFive(undefined);

            assert.equal(result, undefined)
        });
        it('Should return for undefined new Map', function () {
            let input = mathEnforcer;
            let result = input.addFive(new Map());

            assert.equal(result, undefined)
        });


                            //valid
        it('Should return for result 5', function () {
            let input = mathEnforcer;
            let result = input.addFive(5);

            assert.equal(result, 10)
        });
        it('Should return for result -5', function () {
            let input = mathEnforcer;
            let result = input.addFive(-5);

            assert.equal(result, 0)
        });
        it('Should return for result 5.5', function () {
            let input = mathEnforcer;
            let result = input.addFive(5.5);

            assert.closeTo(result, 10.5, 0.01)
        });
        it('Should return for result -5', function () {
            let input = mathEnforcer;
            let result = input.addFive(-5);

            assert.equal(result, 0)
        });
        it('Should return for result -5.5', function () {
            let input = mathEnforcer;
            let result = input.addFive(-5.5);

            assert.equal(result, -0.5)
        });


    });
    describe("subtract", function () {
        it('Should return for undefined string', function () {
            let input = mathEnforcer;
            let result = input.subtractTen('lubo');

            assert.equal(result, undefined)
        });
        it('Should return for undefined []', function () {
            let input = mathEnforcer;
            let result = input.subtractTen([]);

            assert.equal(result, undefined)
        });
        it('Should return for undefined {}', function () {
            let input = mathEnforcer;
            let result = input.subtractTen({});

            assert.equal(result, undefined)
        });
        it('Should return for undefined newDate', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(new Date());

            assert.equal(result, undefined)
        });
        it('Should return for undefined undefined', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(undefined);

            assert.equal(result, undefined)
        });

                    //valid
        it('Should return for result 16', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(10);

            assert.equal(result, 0)
        });
        it('Should return for result 16', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(16);

            assert.equal(result, 6)
        });
        it('Should return for result 15.5', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(15.5);

            assert.equal(result, 5.5)
        });
        it('Should return for result -16', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(-16);

            assert.equal(result, -26)
        });
        it('Should return for result -15.5', function () {
            let input = mathEnforcer;
            let result = input.subtractTen(-15.5);

            assert.equal(result, -25.5)
        });

    });
    describe("sum", function () {
        it('Should return for undefined string and num', function () {
            let input = mathEnforcer;
            let result = input.sum('lubo', 32);

            assert.equal(result, undefined)
        });
        it('Should return for undefined num and string', function () {
            let input = mathEnforcer;
            let result = input.sum(2, 'lubo');

            assert.equal(result, undefined)
        });
        it('Should return for undefined string and string', function () {
            let input = mathEnforcer;
            let result = input.sum('pesho', 'lubo');

            assert.equal(result, undefined)
        });
        it('Should return for undefined {} and {}', function () {
            let input = mathEnforcer;
            let result = input.sum({}, {});

            assert.equal(result, undefined)
        });
        it('Should return for undefined {} and {}', function () {
            let input = mathEnforcer;
            let result = input.sum({}, 5);

            assert.equal(result, undefined)
        });
        it('Should return for undefined {} and {}', function () {
            let input = mathEnforcer;
            let result = input.sum(5, {});

            assert.equal(result, undefined)
        });
        it('Should return for undefined [] and []', function () {
            let input = mathEnforcer;
            let result = input.sum([], []);

            assert.equal(result, undefined)
        });

        it('Should return for undefined undefined and undefined', function () {
            let input = mathEnforcer;
            let result = input.sum(undefined, undefined);

            assert.equal(result, undefined)
        });


                    //valid
        it('Should return for undefined int and int', function () {
            let input = mathEnforcer;
            let result = input.sum(2, 3);

            assert.equal(result, 5)
        });
        it('Should return for undefined double and double', function () {
            let input = mathEnforcer;
            let result = input.sum(2.5, 3.5);

            assert.equal(result, 6)
        });it('Should return for undefined double and double', function () {
            let input = mathEnforcer;
            let result = input.sum(2.5, 3.5);

            assert.closeTo(result, 6, 0.01)
        });

        it('Should return for undefined -int and -int', function () {
            let input = mathEnforcer;
            let result = input.sum(-2, -3);

            assert.equal(result, -5)
        });
        it('Should return for undefined double and double', function () {
            let input = mathEnforcer;
            let result = input.sum(-2.5, -3.5);

            assert.equal(result, -6)
        });

    });

});





