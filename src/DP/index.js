function editDistance(word1, word2) {
  // We are not actually modifying word1 or word2.
  // We are exploring hypothetical operations and moving
  // pointers as if those operations happened.

  function solve(i, j) {
    if (i == word1.length) return word2.length - j
    if (j == word2.length) return word1.length - i

    if (word1[i] === word2[j]) return solve(i + 1, j + 1)

    let insert = solve(i, j + 1)
    let del = solve(i + 1, j)
    let replace = solve(i + 1, j + 1)

    return 1 + Math.min(insert, del, replace)
  }
  return solve(0, 0)
}

console.log(editDistance("horse", "ros"))
