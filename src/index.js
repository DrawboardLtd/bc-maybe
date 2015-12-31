import * as J from "./Just"
import * as N from "./Nope"
import * as P from "./pipe"

export var Just = J.Just
export var Nope = N.Nope

export var isJust  = J.isJust
export var isNope  = N.isNope
export var isMaybe = thing => isJust(thing) || isMaybe(thing)

export var pipe = P.pipe
