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
    });


});