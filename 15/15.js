function Graj(tile) {
  const tileLeft = parseInt(tile.style.left)
  const tileTop = parseInt(tile.style.top)
  const emptyLeft = parseInt(emptyTile.style.left)
  const emptyTop = parseInt(emptyTile.style.top)

  const isAdjacent =
    (Math.abs(tileLeft - emptyLeft) === 100 && tileTop === emptyTop) || (Math.abs(tileTop - emptyTop) === 100 && tileLeft === emptyLeft)

  if (isAdjacent) {
    if (tileLeft === emptyLeft) {
      let temp = tile.style.top
      tile.style.top = emptyTile.style.top
      emptyTile.style.top = temp
    } else if (tileTop === emptyTop) {
      let temp = tile.style.left
      tile.style.left = emptyTile.style.left
      emptyTile.style.left = temp
    }

    moveCounter++
    updateMoveCounter()
  }
}

function shuffleTiles() {
  const tiles = Array.from(document.querySelectorAll('#game-container div'))
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    let tempLeft = tiles[i].style.left
    let tempTop = tiles[i].style.top
    tiles[i].style.left = tiles[j].style.left
    tiles[i].style.top = tiles[j].style.top
    tiles[j].style.left = tempLeft
    tiles[j].style.top = tempTop
  }

  moveCounter = 0
  updateMoveCounter()
}

function updateMoveCounter() {
  moveCounterElement.textContent = `Moves: ${moveCounter}`
}

let num = 4
let newDiv, tileId
const gameContainer = document.getElementById('game-container')
let emptyTile = document.getElementById('emptyTile')
let moveCounter = 0
const moveCounterElement = document.getElementById('move-counter')
const shuffleButton = document.getElementById('shuffle-button')

shuffleButton.addEventListener('click', shuffleTiles)

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    newDiv = document.createElement('div')
    tileId = `tile_${i}${j}`
    newDiv.style.left = 100 * j + 'px'
    newDiv.style.top = 100 * i + 'px'
    newDiv.setAttribute('id', tileId)

    if (i === 3 && j === 3) {
      newDiv.setAttribute('id', 'emptyTile')
      emptyTile = newDiv
    } else {
      newDiv.innerHTML = `<img src='images/slice_${i}_${j}.jpg'>`
    }

    newDiv.addEventListener('click', function () {
      Graj(this)
    })

    gameContainer.appendChild(newDiv)
  }
}
