let assert = require('chai').assert;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


describe('RGB To Hex Color',()=>{
    it("it should return #FF9EAA for (255, 158, 170)",()=>{
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    })
    it("it should return #0C0D0E for (12, 13, 14)",()=>{
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    })
    it("it should return #000000 for (0,0,0)",()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    })
    it("it should return #FFFFFF for (255,255,255)",()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    })
    it("it should return undefined for (-1,5,18)",()=>{
        expect(rgbToHexColor(-1,5,18)).to.equal(undefined);
    })
    it("it should return undefined for (1,-5,18)",()=>{
        expect(rgbToHexColor(1,-5,18)).to.equal(undefined);
    })
    it("it should return undefined for (1,5,-18)",()=>{
        expect(rgbToHexColor(1,5,-18)).to.equal(undefined);
    })
    it("it should return undefined for (256,5,18)",()=>{
        expect(rgbToHexColor(256,5,18)).to.equal(undefined);
    })
    it("it should return undefined for (2,256,18)",()=>{
        expect(rgbToHexColor(2,256,18)).to.equal(undefined);
    })
    it("it should return undefined for (25,5,256)",()=>{
        expect(rgbToHexColor(25,5,256)).to.equal(undefined);
    })
    it("it should return undefined for (255,5.1,18)",()=>{
        expect(rgbToHexColor(255,5.1,18)).to.equal(undefined);
    })
    it("it should return undefined for (pesho,{gosho},[])",()=>{
        expect(rgbToHexColor('pesho',{name:'gosho'},[])).to.equal(undefined);
    })
})