export function Just (value) {
  if (!isJust(this)) return new Just(value)
  this.value = value
}

export function isJust (thing) {
  return thing instanceof Just
}
