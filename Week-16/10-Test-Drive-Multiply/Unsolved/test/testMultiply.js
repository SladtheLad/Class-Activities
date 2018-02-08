var expect = require("chai").expect;
var multiply = require("../src/multiply");

describe("Multiply", function () {

  it("throws useful error", () => {

  });

  it("should multiply two numbers together", function () {
    expect(multiply(2, 5)).to.equal(10);
    });

  it("should multiply two numbers together", function () {
    expect(multiply(15, 10)).to.equal(150);
  })

});
