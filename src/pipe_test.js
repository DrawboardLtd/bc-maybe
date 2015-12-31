import { Just } from "./Just"
import { Nope } from "./Nope"
import { pipe } from "./pipe"
import assert, { equal } from "assert"

var isNumber = x => ("number" === typeof x)
  ? Just(x)
  : Nope(x, "BAD_TYPE", `Expected ${ x } to be a "number" but instead was a "${ typeof x }"`)


var double = x => Just(x * 2)
var square = x => Just(x * x)

var doubleAndSquare          = x => pipe(x, double, square)
var quadruple                = x => pipe(x, double, double)
var doubleAndSquareQuadruple = x => pipe(x, doubleAndSquare, quadruple)

describe("pipe", () => {
  it ("r1", () => {
    var r1 = pipe("bob", isNumber, double)
    equal(r1.value, "bob")
    equal(r1.code, "BAD_TYPE")
    equal(r1.message, `Expected bob to be a "number" but instead was a "string"`)
  })

  it ("r2", () => {
    var r2 = pipe(2, isNumber, double, square)
    equal(r2.value, 16)
  })

  it("r3", () => {
    var r3 = doubleAndSquare(2)
    equal(r3.value, 16)
  })

  it("r4", () => {
    var r4 = pipe(2, isNumber, doubleAndSquare, double)
    equal(r4.value, 32)
  })

  it("r5", () => {
    var r5 = pipe(2, isNumber, doubleAndSquare, quadruple)
    equal(r5.value, 64)
  })

  it("r6", () => {
    var r6 = pipe(2, doubleAndSquareQuadruple)
    equal(r6.value, 64)
  })
})
