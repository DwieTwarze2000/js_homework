function changeSquare() {
  const top = parseInt(document.querySelector('#top').value) || 0
  const left = parseInt(document.querySelector('#left').value) || 0
  const size = Math.min(parseInt(document.querySelector('#size').value) || 50, 400)
  const borderColor = document.querySelector('#borderColor').value || '#000'
  const bgColor = document.querySelector('#bgColor').value || '#fff'

  const square = document.getElementById('square')
  const container = square.parentElement

  const maxTop = container.clientHeight - size - 2
  const maxLeft = container.clientWidth - size - 2

  square.style.top = Math.max(0, Math.min(top, maxTop)) + 'px'
  square.style.left = Math.max(0, Math.min(left, maxLeft)) + 'px'
  square.style.width = size + 'px'
  square.style.height = size + 'px'
  square.style.borderColor = borderColor
  square.style.backgroundColor = bgColor
}

changeSquare()
