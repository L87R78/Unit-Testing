let assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}




describe("Is isOddOrEven", function () {
    describe("Is undefined", function () {
        it('Should return undefined for 5', function () {
            const input = 5;
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for -5', function () {
            const input = -5;
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for {}', function () {
            const input = {};
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for array', function () {
            const input = [];
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for new Data', function () {
            const input = new Date();
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for 0', function () {
            const input = 0;
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });

        it('Should return undefined for null', function () {
            const input = null;
            const result = isOddOrEven(input);

            assert.equal(result, undefined)
        });
    });

    //part -2

    describe("Is even", function () {
        it('Should return even for lubo', function () {
            const input = 'lubo';
            const result = isOddOrEven(input);

            assert.equal(result, 'even')
        });

        it('Should return even for 123456', function () {
            const input = '123456';
            const result = isOddOrEven(input);

            assert.equal(result, 'even')
        });

    });

    //part 3

    describe("Is odd", function () {
        it('Should return odd for lub', function () {
            const input = 'lub';
            const result = isOddOrEven(input);

            assert.equal(result, 'odd')
        });

        it('Should return even for 12345', function () {
            const input = '12345';
            const result = isOddOrEven(input);

            assert.equal(result, 'odd')
        });
    });
});