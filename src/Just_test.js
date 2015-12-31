import { Just, isJust } from "./Just"
import assert, { equal } from "assert"

describe("Just", () => {
  describe("new Just(value)", () => {
    it("instanciates without the new keyword", () => {
      assert(Just(4) instanceof Just)
    })

    it("the value is available at .value", () => {
      equal(Just(4).value, 4)
    })
  })

  describe("#isJust", () => {
    it("valid", () => {
      assert(isJust(Just(4)))
    })

    it("invalid", () => {
      assert(!isJust(new Date()))
    })
  })
})
