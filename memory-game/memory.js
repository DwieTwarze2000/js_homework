let images = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'img6.jpg',
  'img7.jpg',
  'img8.jpg',
]
let shuffledImages = []
let flippedCards = []
let matchedPairs = 0

function shuffle() {
  shuffledImages = images
    .map((img) => ({ img, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.img)
}

function setupBoard() {
  const cards = document.querySelectorAll('.card')
  cards.forEach((card, index) => {
    card.innerHTML = `<img src="${shuffledImages[index]}" alt="card image" />`
    card.classList.remove('flipped')
    card.style.visibility = 'visible'
  })
}

function play(card) {
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped')
    flippedCards.push(card)

    if (flippedCards.length === 2) {
      setTimeout(() => checkMatch())
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards
  const img1 = card1.querySelector('img').src
  const img2 = card2.querySelector('img').src

  if (img1 === img2) {
    matchedPairs++
    card1.style.visibility = 'hidden'
    card2.style.visibility = 'hidden'
    flippedCards = []

    if (matchedPairs === 8) {
      alert('You win!')
      startGame()
    }
  } else {
    setTimeout(() => hideCards(card1, card2), 300)
  }
}

function hideCards(card1, card2) {
  card1.classList.remove('flipped')
  card2.classList.remove('flipped')
  flippedCards = []
}

function startGame() {
  matchedPairs = 0
  flippedCards = []
  shuffle()
  setupBoard()
}

startGame()
