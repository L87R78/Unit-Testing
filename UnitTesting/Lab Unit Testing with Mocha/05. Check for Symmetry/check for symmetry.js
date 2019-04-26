let assert = require('chai').assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}



describe("Is symmetric", function () {
    describe("Is true", function () {
        it('Should return true for [1, 2, 3, 2, 1]', function () {
            const input = [1, 2, 3, 2, 1];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for [1.32, 2, 3, 2, 1.32]', function () {
            const input = [1.32, 2, 3, 2, 1.32];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for [-1.32, 2, 3, 2, -1.32]', function () {
            const input = [-1.32, 2, 3, 2, -1.32];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for stringNum [-1.32, 2, 3, 2, -1.32]', function () {
            const input = [-1.32, '2', 3, '2', -1.32];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for Object [-1.32, 2, 3, 2, -1.32]', function () {
            const input = [-1.32, {}, 3, {}, -1.32];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for String [-1.32, lubo, 3, lubo, -1.32]', function () {
            const input = [-1.32, 'lubo', 3, 'lubo', -1.32];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return true for Length1 [1]', function () {
            const input = [1];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });
    });






                                                                //solve for false

    describe("Is false", function () {
        it('Should return false for Length2 [1, 2]', function () {
            const input = [1, 2];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });


        it('Should return false for [-1, 2, 3, 2, 1]', function () {
            const input = [-1, 2, 3, 2, 1];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for [-1.2, 2, 3, 2, 1.32]', function () {
            const input = [-1.2, 2, 3, 2, 1.32];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });


        it('Should return 0 for empty array', function () {
            const input = [];
            const result = isSymmetric(input);

            assert.isTrue(result, true)
        });

        it('Should return false for string in Array', function () {
            const input = [-1.2, 2, 3, 2, 'sasasa'];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for object in Array', function () {
            const input = [-1.2, 2, 3, 2, {}];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for stringNum in Array', function () {
            const input = [-1.2, '2', 3, 2, -1.2];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for [-1.2, 232, 3, 2, -1.2]', function () {
            const input = [-1.2, 23232, 3, 2, -1.2];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for [-1.2, 232, 3, 2323, 32, -1.2]', function () {
            const input = [-1.2, 232, 3, 2323, 32, -1.2];
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        });

        it('Should return false for Object', function () {
            const input = {};
            const result = isSymmetric(input);

            assert.isFalse(result, false)
        })
    });

});