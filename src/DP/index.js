function timer(unit = "ms") {
    const start = performance.now();

    return function endTimer() {
        const end = performance.now();
        const time = end - start;

        // console.log("Start:", start);
        // console.log("End:", end);

        if (unit === "s") {
            console.log("Time:", time / 1000, "seconds");
        } else {
            console.log("Time:", time, "ms");
        }
    };
}


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

// console.log(editDistance("horse", "ros"))




function climbStairs(n) {
  let cache = []
  
  function logic(n, step = 0) {
    if (cache[step] != undefined) return  cache[step]
    if (step === n) return 1
    if (step > n) return 0

    let moveOne = logic(step+1,n)  
    let moveTwo = logic(step+2,n) 

    cache[step] = moveOne + moveTwo 
    return moveOne + moveTwo
  }
  return logic(n)
}

const end = timer("ms");
console.log( climbStairs(109),"gg")   
end(); 