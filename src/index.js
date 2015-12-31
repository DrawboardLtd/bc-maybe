import { Just, isJust } from "./Just"
import { Nope, isNope } from "./Nope"
import { pipe } from "./pipe"

function isMaybe (thing) {
  return isJust(thing) || isNope(thing)
}

export default {
  Just,
  isJust,
  Nope,
  isNope,
  isMaybe,
  pipe,
}
