import { isJust } from "./Just"
import { isNope } from "./Nope"

export function pipe (seed, ...fns) {
  if (fns == null || !fns.length) return seed
  if (isNope(seed)) return seed
  if (isJust(seed)) seed = seed.value
  var [ fn, ...fns ] = fns
  return pipe( fn(seed,seed), ...fns )
}
