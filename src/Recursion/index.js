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
// console.log(sumNumbers(10));

function isArraySorted(array, index = 0) {
  if (index === array.length - 1 || array.length == 0 || array.length == 1) return true

  if (array[index] > array[index + 1]) return false

  return isArraySorted(array, index + 1)
}

// console.log(isArraySorted([1, 2, 3, 4, 5]))

// function BinarySearch(array, target) {
//   if (array.length == 0 ) return "target not found"
// let mid = Math.floor((array.length ) / 2)
// console.log({mid})
// if (target === array[mid]) return mid

//   if (array[mid] > target) return BinarySearch(array.slice(0, mid), target)
//   if (array[mid] < target) return BinarySearch(array.slice(mid), target)
// }

// THE APROCH IS KIND OF CORRCET TBUT THE LOGIC IS'nt, SO WHEN EVER FUNCTION IS BEING CALLED AGAIN
// IT PASSES A NEW ARRAY WHUICH MEANS IF THE TARGET IS FOUND THOSE INDEX IN USER PROVIDED ARRAY IS 8 BUT NOT ITS
// REDUCED TO MAY BE 2 AS THE ARRYS GETS REDUCED ...

function BinarySearch(array, target, left = 0, right = array.length - 1) {
if (left > right) return -1
  let mid = Math.floor((left + right) / 2)

  if (target === array[mid]) return mid

  if (array[mid] > target) return BinarySearch(array, target, left, mid - 1)
  if (array[mid] < target) return BinarySearch(array, target, mid + 1, right)
}

// console.log(BinarySearch([1, 2, 3, 4], 2))
