import { Nope, isNope } from "./Nope"
import assert, { equal } from "assert"

var n = Nope(4, 5, 6)

describe("Nope", () => {

  describe("new Nope(value)", () => {
    it("instanciates without the new keyword", () => {
      assert(n instanceof Nope)
    })

    it("the value is available at .value", () => {
      equal(n.value, 4)
    })

    it("the code is available at .code", () => {
      equal(n.code, 5)
    })

    it("the message is available at .message", () => {
      equal(n.message, 6)
    })
  })

  describe("#isNope", () => {
    it("valid", () => {
      assert(isNope(n))
    })

    it("invalid", () => {
      assert(!isNope(new Date()))
    })
  })
})
