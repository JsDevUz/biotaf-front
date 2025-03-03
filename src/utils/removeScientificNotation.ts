function removeScientificNotation(x:number) {
  if (Math.abs(x) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1])
    if (e) {
      x *= 10 ** (e - 1)
      x = Number(`0.${new Array(e).join('0')}${x.toString().substring(2)}`)
    }
  } else {
    let e = parseInt(x.toString().split('+')[1])
    if (e > 20) {
      e -= 20
      x /= 10 ** e
      x += Number(new Array(e + 1).join('0'))
    }
  }
  return x
}

export default removeScientificNotation
