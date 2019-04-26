let assert = require('chai').assert;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}


describe("Sum", function () {
    it('Should return 3 for [1, 2]', function () {
        const  input = [1, 2];
        const result = sum(input);

        assert.equal(result, 3)
    });

    it('Should return -3 for [-1, -2]', function () {
        const  input = [-1, -2];
        const result = sum(input);

        assert.equal(result, -3)
    });

    it('Should return 0 for empty array', function () {
        const  input = [];
        const result = sum(input);

        assert.equal(result, 0)
    });

    it('Should throw if not array', function () {
        const  input = null;
        //const result = sum(input);

        assert.throws(function () {
            sum(input)
        })
    });

    it('Should return NaN if array contains string', function () {
        const  input = [1, 'pesho'];
        const result = sum(input);

        assert.isNaN(result)
    });

    it('Should return 1 if array is 1', function () {
        const  input = [1];
        const result = sum(input);

        assert.equal(result, 1);
    });
});