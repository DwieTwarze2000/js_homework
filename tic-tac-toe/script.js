let p1 = "<img src='kolko.png' alt='Kółko' />"
let p2 = "<img src='krzyzyk.png' alt='Krzyżyk' />"
let k = 0
let num = 3
let tabId = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

function play(x) {
  const id = x.id
  const i = parseInt(id[1])
  const j = parseInt(id[2])

  if (tabId[i][j] !== 0) {
    return
  }

  if (k === 0) {
    x.innerHTML = p1
    tabId[i][j] = 1
    k = 1
    if (checkWin(1)) {
      alert('Wygrało kółko!')
      resetBoard()
      return
    }
  } else {
    x.innerHTML = p2
    tabId[i][j] = -1
    k = 0
    if (checkWin(-1)) {
      alert('Wygrał krzyżyk!')
      resetBoard()
      return
    }
  }

  if (isBoardFull() && !checkWin(1) && !checkWin(-1)) {
    alert('remis!')
    resetBoard()
    return
  }
}

function checkWin(x) {
  let win = false
  let sum = 0
  let sumCol = 0
  let sumVert1 = 0
  let sumVert2 = 0
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      sum += tabId[i][j]
      sumCol += tabId[j][i]

      if (i === j) {
        sumVert1 += tabId[i][j]
      }
      if (i === num - 1 - j) {
        sumVert2 += tabId[i][j]
      }
    }
    if (sum === 3 * x || sumCol === 3 * x || sumVert1 === 3 * x || sumVert2 === 3 * x) {
      win = true
    }
    sum = 0
    sumCol = 0
  }
  return win
}

function isBoardFull() {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (tabId[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

function initializeGameBoard() {
  const gameBoard = document.getElementById('game-container')

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', `a${i}${j}`)
      newDiv.addEventListener('click', function () {
        play(this)
      })
      gameBoard.appendChild(newDiv)
    }
  }
}

function resetBoard() {
  const gameBoard = document.getElementById('game-container')
  gameBoard.innerHTML = ''

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      tabId[i][j] = 0
    }
  }
  initializeGameBoard()
}

initializeGameBoard()
