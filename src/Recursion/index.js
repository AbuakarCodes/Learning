function printNumbers(n) {
  if (n == 0 || n < 0) return
  printNumbers(n - 1)
  console.log(n)
}

// printNumbers(3)

function fic(n) {
  if (n == 0 || n == 1) return 1
  return n * fic(n - 1)
}

// console.log(fic(5))

function sumNumbers(n) {
  if (n == 1) return 1
  return n + sumNumbers(n - 1)
}
console.log(sumNumbers(10));