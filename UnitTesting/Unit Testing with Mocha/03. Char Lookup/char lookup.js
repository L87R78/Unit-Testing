let assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}




describe("Is lookupChar", function () {
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(1, 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(-1, 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar({}, 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar([], 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(new Date(), 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(undefined, 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(null, 0);

        assert.equal(result, undefined)
    });
    it('with a non-string for first parameter, should return undefined', function () {

        const result = lookupChar(0, 0);

        assert.equal(result, undefined)
    });

                                    //second input

    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa','sassa');

        assert.equal(result, undefined)
    });

    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa',[]);

        assert.equal(result, undefined)
    });
    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa',{});

        assert.equal(result, undefined)
    });

    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa',new Date());

        assert.equal(result, undefined)
    });
    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa', 3.3);

        assert.equal(result, undefined)
    });
    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa', undefined);

        assert.equal(result, undefined)
    });
    it('with  second parameter, should return undefined', function () {

        const result = lookupChar('sasasa', null);

        assert.equal(result, undefined)
    });

                            //solve two if
    it('with first parameter, should return Incorrect index', function () {

        const result = lookupChar('pesho', 35433443);

        assert.equal(result, 'Incorrect index')
    });
    it('with first parameter, should return Incorrect index', function () {

        const result = lookupChar('pesho', -1);

        assert.equal(result, 'Incorrect index')
    });
    it('with first parameter, should return Incorrect index', function () {

        const result = lookupChar('pesho', 5);

        assert.equal(result, 'Incorrect index')
    });

                                    //finish

    it('with first parameter, should return result', function () {

        const result = lookupChar('pesho', 3);

        assert.equal(result, 'h' )
    });
    it('with first parameter, should return result', function () {

        const result = lookupChar('pesho', 0);

        assert.equal(result, 'p' )
    });

});