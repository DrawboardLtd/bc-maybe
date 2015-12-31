bc-maybe
========

bc-maybe is a javascript implementation of something similar to Haskells Maybe monad

```haskell
type Code = String | Int
type MSG  = String | Int
type Maybe x = Just x | Nope x Code Msg
```

# Install

```bash
npm install --save bc-maybe babel-polyfill
```

> `babel-polyfill` needs to be included before any of `Maybe stuff`

# Usage

**`Maybe.Just`**
```javascript
import { Just, isJust } from "bc-maybe"

var j = new Just(42)
isJust(j) // true
j.value // 42
```

**`Maybe.Nope`**
```javascript
import { Nope, isNope } from "bc-maybe"

var n = new Nope(42, "ERROR_CODE", "Should have been a String")
// log: NOPE: [ERROR_CODE] Should have been a String

isNope(n) // true
n.value   // 42
n.code    // "ERROR_CODE"
n.message // "Should have been a String"
```

**`Maybe.pipe`**
```javascript
import { Just, Nope, pipe } from "bc-maybe"

var isNumber = x => ("number" === typeof x)
  ? Just(x)
  : Nope(x, "BAD_TYPE", `Expected ${ x } to be a "number" but received a "${ typeof x }" instead.`)

var double = x => Just(x * 2)
var square = x => Just(x * x)

var doubleAndSquare          = x => pipe(x, double, square)
var quadruple                = x => pipe(x, double, double)
var doubleAndSquareQuadruple = x => pipe(x, doubleAndSquare, quadruple)

var r1 = pipe("bob", isNumber, double)
// log: NOPE: [BAD_TYPE] Expected bob to be a "number" but received a "string" instead
r1.value // "bob"

var r2 = pipe(2, isNumber, double, square)
r2.value // 16

var r3 = doubleAndSquare(2)
r3.value // 16

var r4 = pipe(2, isNumber, doubleSquare, double)
r4.value // 32

var r5 = pipe(2, isNumber, doubleSquare, quadruple)
r5.value // 64

var r6 = pipe(2, isNumber, doubleAndSquareQuadruple)
r6.value // 64
```
