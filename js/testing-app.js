const tempBoard = [0,1,2,3,4,5,6,7,8]
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


function getWinner(){

  const array = []

  for (let i=0; i < winningCombos.length; i++){ // iterate thru ea winningCombos (outside/main array) -> 0
    let sum = 0  // -> 0 -> 1 -> 3
    for (let j=0; j < 3; j++){ // iterate thru ea subArray  ->   [0,1,2]
      sum += tempBoard[winningCombos[i][j]] // -> [0][0] -> [0][1] -> [0][2]
    }
    array.push(sum)
  }
  array.some(ele => ele === 3 || -3) ? console.log("winner!!!!") : console.log("keep trying")
}

console.log(getWinner(winningCombos))
