import { Just, Nope, isJust, isNope, pipe } from "./index.js"
import assert, { equal } from "assert"

describe("export", () => {
  it("Just & isJust", () => { assert(isJust(Just(42))) })
  it("Nope & isNope", () => { assert(isNope(Nope(42, 43, 44))) })
  
  it ("pipe", () => {
    var double = x => Just(x * 2)
    equal(pipe(2, double).value, 4)
  })
})
